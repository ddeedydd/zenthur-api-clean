// routes/evaluateResponse.js
const express = require('express');
const router = express.Router();
const { generateGPTResponse } = require('../services/openaiService');

router.post('/', async (req, res) => {
  try {
    const { goal, ai_response } = req.body;

    if (!goal || !ai_response) {
      return res.status(400).json({ error: 'ต้องใส่ goal และ ai_response' });
    }

    const evaluationPrompt = `
คุณคือผู้เชี่ยวชาญด้านการฝึก AI และวิเคราะห์พฤติกรรมของ AI

🎯 เป้าหมายที่ต้องการให้ AI ทำได้: "${goal}"

🧠 คำตอบของ AI ที่ให้มา:
"${ai_response}"

✅ กรุณาวิเคราะห์ตามหมวดต่อไปนี้ (ตอบเป็น JSON เท่านั้น):
- clarity: คะแนนความชัดเจน (0-10)
- empathy: คะแนนความเห็นอกเห็นใจ (0-10)
- tone_match: ตรงกับเป้าหมายหรือไม่ (true/false)
- feedback: คำแนะนำว่าควรปรับปรุงตรงไหน
`;

    const rawEval = await generateGPTResponse(evaluationPrompt, 0.3);

    let evaluation;
    try {
      evaluation = JSON.parse(rawEval);
    } catch (e) {
      return res.status(500).json({
        error: 'AI ตอบกลับมาไม่เป็น JSON ที่อ่านได้',
        raw: rawEval
      });
    }

    res.json({ evaluation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดใน evaluate-response' });
  }
});

module.exports = router;

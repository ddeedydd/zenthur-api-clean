// routes/generatePrompts.js
const express = require('express');
const router = express.Router();
const { generateGPTResponse } = require('../services/openaiService');

router.post('/', async (req, res) => {
  try {
    const { goal, sample_input } = req.body;

    if (!goal || !sample_input) {
      return res.status(400).json({ error: 'goal และ sample_input จำเป็นต้องใส่' });
    }

    const prompt = `
ช่วยสร้าง prompt จำนวน 2 ข้อ สำหรับเทรน AI ให้สามารถตอบได้ตามเป้าหมายนี้:

🎯 เป้าหมาย: "${goal}"

🧪 ตัวอย่างข้อความจากผู้ใช้: "${sample_input}"

ให้ตอบกลับมาเป็น array JSON string เช่น:
["prompt1", "prompt2"]
`;

    const aiResponse = await generateGPTResponse(prompt, 0.7);

    // ✅ เพิ่มบรรทัดนี้เพื่อ debug
    console.log("AI RAW RESPONSE:", aiResponse);

    let promptSet;
    try {
      promptSet = JSON.parse(aiResponse);
    } catch (e) {
      return res.status(500).json({ error: 'AI ตอบกลับมาไม่เป็น JSON ที่อ่านได้', raw: aiResponse });
    }

    res.json({ prompt_set: promptSet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดใน generate-prompts' });
  }
});

module.exports = router;
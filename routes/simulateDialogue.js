// routes/simulateDialogue.js
const express = require('express');
const router = express.Router();
const { generateGPTResponse } = require('../services/openaiService');

router.post('/', async (req, res) => {
  try {
    const { prompt, user_input } = req.body;

    if (!prompt || !user_input) {
      return res.status(400).json({ error: 'ต้องใส่ prompt และ user_input' });
    }

    const fullPrompt = `
ผู้ใช้ป้อนข้อความว่า: "${user_input}"

ให้คุณตอบในฐานะ:
"${prompt}"

**คำตอบต้องสุภาพ เป็นธรรมชาติ และแสดงถึงความเข้าใจต่อความรู้สึกของผู้ใช้**

เริ่มเลย:`;

    const ai_response = await generateGPTResponse(fullPrompt, 0.75);

    res.json({ ai_response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดใน simulate-dialogue' });
  }
});

module.exports = router;

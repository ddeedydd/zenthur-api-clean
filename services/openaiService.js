// services/openaiService.js
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateGPTResponse(prompt, temperature = 0.7) {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'คุณคือ AI ผู้ช่วยที่ให้คำแนะนำในการฝึก AI ตัวอื่น' },
      { role: 'user', content: prompt },
    ],
    temperature,
  });

  return chatCompletion.choices[0].message.content;
}

module.exports = {
  generateGPTResponse,
};

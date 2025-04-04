// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ เพิ่ม middleware ตรวจ API Key ที่นี่
const apiKeyAuth = require('./middleware/apiKeyAuth');
app.use(apiKeyAuth); // ต้องมี API Key ทุกครั้งที่เรียก

// Routes
const generatePrompts = require('./routes/generatePrompts');
const simulateDialogue = require('./routes/simulateDialogue');
const evaluateResponse = require('./routes/evaluateResponse');

app.use('/generate-prompts', generatePrompts);
app.use('/simulate-dialogue', simulateDialogue);
app.use('/evaluate-response', evaluateResponse);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Zenthur API running on port ${PORT}`);
});

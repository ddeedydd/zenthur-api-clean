# 🔮 Zenthur API

**AI Training-as-a-Service** for developers, startups, and AI teams  
Zenthur helps you automatically generate prompts, simulate AI responses, and evaluate outputs — all through a simple API.

---

## 🚀 Base URL

```
https://zenthur-api-clean-production.up.railway.app
```

---

## 🔐 Authentication

All endpoints require an API Key sent via request headers:

```
x-api-key: your-api-key-here
```

> You can request a demo API key by contacting the Zenthur team  
> Or set it in `.env`: `ZENTHUR_API_KEY=your-key-here`

---

## 🧠 Endpoints

### 1. `POST /generate-prompts`
> Generate a set of prompts to train a language model to match your goal

**Request Body:**

```json
{
  "goal": "Act as a compassionate fitness coach",
  "sample_input": "I feel discouraged about working out lately"
}
```

**Response:**

```json
{
  "prompt_set": [
    "How do you feel about restarting your goal?",
    "Would it help to take small steps each day?"
  ]
}
```

---

### 2. `POST /simulate-dialogue`
> Simulate AI’s response given a system prompt and user input

**Request Body:**

```json
{
  "prompt": "You are a supportive fitness coach...",
  "user_input": "I want to quit working out"
}
```

**Response:**

```json
{
  "ai_response": "I totally understand... but look at how far you’ve come already!"
}
```

---

### 3. `POST /evaluate-response`
> Evaluate an AI’s response based on clarity, empathy, and tone

**Request Body:**

```json
{
  "goal": "Be encouraging and friendly",
  "ai_response": "Just trying is already enough."
}
```

**Response:**

```json
{
  "evaluation": {
    "clarity": 8,
    "empathy": 9,
    "tone_match": true,
    "feedback": "Very supportive! Could include a bit more user-specific context."
  }
}
```

---

## 💡 Use Cases

- Build AI coaches, tutors, companions  
- Fine-tune LLMs with personalized training flows  
- Benchmark conversational agents  
- Integrate into AutoGPT / Agentic systems

---

## 📦 Tech Stack

- Node.js + Express  
- OpenAI API  
- Railway Hosting  
- Prompt Engine + Feedback Scoring Logic

---

## 📫 Contact

Built by: [@ddeedydd](https://github.com/ddeedydd)  
Email: zenthur.team@gmail.com  
Website: Coming Soon






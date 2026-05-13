# AI Mood Detector

AI Mood Detector is a full-stack AI-powered web application that detects mood, emotions, sentiment, and emotional tone from user text using Natural Language Processing (NLP).

---

## Features

- Mood Detection
- Emotion Classification
- Sentiment Analysis
- Emoji Prediction
- Motivational Responses
- Chat-style Interface
- Real-time API Communication

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- TypeScript

### AI Service
- FastAPI
- Python
- TextBlob
- NLTK

---

## Project Architecture

```txt
Frontend (Next.js)
        ↓
Node.js Backend API
        ↓
Python AI Service
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/harshitclub/ai-mood-detector.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

# AI Service Setup

```bash
cd ai-service

python -m venv venv

# Activate virtual environment

# Windows
venv\\Scripts\\activate

# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Environment Variables

### Frontend

`.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

### Backend

`.env`

```env
PORT=5000
FRONTEND_URL=http://localhost:3000
AI_SERVICE_URL=http://127.0.0.1:8000
```

---

### AI Service

`.env`

```env
APP_NAME=AI Mood Detector API
APP_VERSION=1.0.0
FRONTEND_URL=http://localhost:3000
```

---

## API Endpoint

```txt
POST /api/v1/analyze
```

### Request

```json
{
  "text": "I am feeling stressed today"
}
```

### Response

```json
{
  "success": true,
  "message": "Text analyzed successfully",
  "data": {
    "mood": "Negative",
    "emotion": "Stress",
    "emoji": "😩",
    "sentiment_score": -0.39,
    "response": "Take a small break and breathe 🌼"
  }
}
```

---

## Future Improvements

- Hugging Face Transformers
- Real ML Models
- Chat History
- Authentication
- Redis Caching
- Docker Deployment
- Analytics Dashboard

---

## License

MIT
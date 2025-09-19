# RefactorAI - Render Deployment Guide

This guide will help you deploy RefactorAI to Render as a **single full-stack service** using the included `render.yaml` configuration.

## Architecture

RefactorAI is deployed as a single Node.js web service that:
- Serves the React frontend as static files
- Handles API requests on `/ai/*` endpoints
- Automatically builds the frontend during deployment

## Prerequisites

1. GitHub repository with your code
2. Render account (free tier available)
3. Google AI API key

## Deployment Options

### Option 1: Blueprint Deployment (Recommended)

#### 1. Push Code to GitHub

Make sure your code is pushed to a GitHub repository that Render can access.

#### 2. Connect to Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file

#### 3. Configure Environment Variables

Set these in the Render dashboard for the service:

| Variable Name | Required | Description | Example |
|---------------|----------|-------------|---------|
| `GOOGLE_API_KEY` | Yes | Google AI API key for code review functionality | `AIzaSy...` |
| `NODE_ENV` | No | Node environment (automatically set to production) | `production` |
| `PORT` | No | Port number (automatically set by Render) | `10000` |

#### 4. Deploy

1. Click "Apply" in the Render dashboard
2. Render will:
   - Install backend dependencies
   - Build the frontend automatically
   - Start the single service serving both frontend and API

#### 5. Access Your Application

Once deployed, you'll have:
- **Single URL**: `https://refactorai-app-[hash].onrender.com`
- Frontend served at the root (`/`)
- API available at `/ai/*` endpoints
- Health check at `/health`

### Option 2: Manual Service Deployment

Deploy as a single **Web Service** (not static site):

**Service Type:** Web Service (Node.js)

**Build Command:**
```bash
cd backend && npm install && npm run build
```

**Start Command:**
```bash
cd backend && npm start
```

**Environment Variables:**
- `GOOGLE_API_KEY` (required)
- `NODE_ENV=production`

> **Note:** No separate frontend service needed! The backend serves both API and frontend.

## Getting Your Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and add it to your Render service environment variables

## Local Development

### Option 1: Full-stack development (Recommended)
```bash
# Build frontend and start backend
node build.js
cd backend && npm start
```

### Option 2: Separate development
```bash
# Terminal 1: Start backend
cd backend && npm run dev

# Terminal 2: Start frontend
cd frontend && npm run dev
```

For local development environment variables:

#### Backend (.env in backend folder)
```
GOOGLE_API_KEY=your_google_ai_api_key_here
PORT=3000
NODE_ENV=development
```

#### Frontend (.env in frontend folder) - Only needed for separate development
```
VITE_API_BASE_URL=http://localhost:3000
```

## Architecture Details

- **Frontend**: React + Vite (built and served as static files)
- **Backend**: Node.js + Express API server (also serves frontend)
- **AI Service**: Google AI (Gemini) for code review
- **Deployment**: Single web service on Render

## Cost Benefits

- **Single service** = lower cost (one service instead of two)
- **Render Free Tier** includes:
  - 750 hours/month of usage
  - Auto-sleep after 15 minutes of inactivity
  - Custom domains available

## Troubleshooting

### Common Issues

1. **Build Failures**: 
   - Check build logs in Render dashboard
   - Ensure both `backend/package.json` and `frontend/package.json` exist
   - Verify build command can access frontend directory

2. **Frontend Not Loading**: 
   - Check if `frontend/dist` directory exists after build
   - Verify static file serving is working at `/health` endpoint

3. **API Connection Issues**: 
   - Test API endpoints directly: `/ai/get-review`
   - Check backend logs for errors

4. **Google AI Errors**: 
   - Ensure `GOOGLE_API_KEY` is valid and has proper permissions
   - Test API key locally first

### Logs

Access logs through the Render dashboard:
- Go to your service → "Logs" tab
- Monitor real-time deployment and runtime logs
- Check both build logs and runtime logs

### Health Check

Visit `/health` endpoint to verify service is running:
```json
{
  "status": "OK",
  "message": "RefactorAI Backend is running"
}
```

## Support

If you encounter issues:
1. Check Render documentation: [render.com/docs](https://render.com/docs)
2. Verify environment variables are correctly set
3. Check service logs for error messages
4. Test locally using `node build.js` first

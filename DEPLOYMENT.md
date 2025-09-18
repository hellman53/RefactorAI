# RefactorAI - Render Deployment Guide

This guide will help you deploy RefactorAI to Render using the included `render.yaml` configuration.

## Prerequisites

1. GitHub repository with your code
2. Render account (free tier available)
3. Google AI API key

## Deployment Steps

### 1. Push Code to GitHub

Make sure your code is pushed to a GitHub repository that Render can access.

### 2. Connect to Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file

### 3. Configure Environment Variables

#### Backend Service Environment Variables

Set these in the Render dashboard for the backend service:

| Variable Name | Required | Description | Example |
|---------------|----------|-------------|---------|
| `GOOGLE_API_KEY` | Yes | Google AI API key for code review functionality | `AIzaSy...` |
| `NODE_ENV` | No | Node environment (automatically set to production) | `production` |
| `PORT` | No | Port number (automatically set by Render) | `10000` |

#### Frontend Service Environment Variables

The frontend automatically receives:

| Variable Name | Source | Description |
|---------------|--------|-------------|
| `VITE_API_BASE_URL` | Auto-generated | Backend API URL from Render |

### 4. Deploy

1. Click "Apply" in the Render dashboard
2. Render will:
   - Build and deploy the backend service
   - Build and deploy the frontend static site
   - Automatically connect them together

### 5. Access Your Application

Once deployed, you'll have:
- Backend API: `https://refactorai-backend-[hash].onrender.com`
- Frontend: `https://refactorai-frontend-[hash].onrender.com`

## Getting Your Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key and add it to your Render backend service environment variables

## Local Development

For local development, use these environment variables:

### Backend (.env in backend folder)
```
GOOGLE_API_KEY=your_google_ai_api_key_here
PORT=3000
NODE_ENV=development
```

### Frontend (.env in frontend folder)
```
VITE_API_BASE_URL=http://localhost:3000
```

## Architecture

- **Frontend**: React + Vite static site
- **Backend**: Node.js + Express API server
- **AI Service**: Google AI (Gemini) for code review

## Cost Considerations

- Render Free Tier includes:
  - 750 hours/month of usage
  - Auto-sleep after 15 minutes of inactivity
  - Custom domains available

## Troubleshooting

### Common Issues

1. **Build Failures**: Check build logs in Render dashboard
2. **API Connection Issues**: Verify `VITE_API_BASE_URL` is correctly set
3. **Google AI Errors**: Ensure `GOOGLE_API_KEY` is valid and has proper permissions

### Logs

Access logs through the Render dashboard:
- Go to your service → "Logs" tab
- Monitor real-time deployment and runtime logs

## Support

If you encounter issues:
1. Check Render documentation: [render.com/docs](https://render.com/docs)
2. Verify environment variables are correctly set
3. Check service logs for error messages

const express = require('express');
const path = require('path');
const aiRoutes = require('./routes/ai.routes')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Health check endpoint (before other routes)
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'RefactorAI Backend is running' });
});

// API routes
app.use('/ai', aiRoutes)

// Serve static files from frontend build
const frontendPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendPath));

// Catch-all handler: send back React's index.html file for SPA routing
app.get('*', (req, res) => {
    const indexPath = path.join(frontendPath, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error serving index.html:', err);
            res.status(500).send('Error loading application');
        }
    });
});

module.exports = app;

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resume.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'work.html'));
});

app.get('/experience', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'experience.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Resume download route
app.get('/resume/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public', 'resume', filename);
    res.download(filePath, filename, (err) => {
        if (err) {
            res.status(404).send('Resume not found');
        }
    });
});

// API Routes for dynamic content
app.get('/api/profile', (req, res) => {
    res.json({
        name: 'Akhil Jadli',
        role: 'Web Developer',
        social: {
            linkedin: 'https://linkedin.com/in/your-profile',
            github: 'https://github.com/your-username',
            instagram: 'https://instagram.com/your-username',
            twitter: 'https://twitter.com/your-username'
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
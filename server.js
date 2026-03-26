const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the docs directory
app.use(express.static(path.join(__dirname, 'docs')));

// Route root to index2.html (the Excel interface)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index2.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

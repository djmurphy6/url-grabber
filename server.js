const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// CORS middleware for all requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Or use your extension's origin for more security
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.post('/receive-url', (req, res) => {
  console.log('Received URL:', req.body.url);
  res.send('URL received');
});

app.get('/', (req, res) => {
  res.send('URL Grabber server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

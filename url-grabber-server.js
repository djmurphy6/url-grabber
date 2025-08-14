const express = require('express');
const app = express();
const PORT = 6767;

// CORS middleware MUST come before express.json()
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use(express.json());

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

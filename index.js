const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/hello', (req, res) => {
  console.log('GET /hello');
  res.json({ date: new Date().toISOString(), message: 'hello world!'});
});

app.get('/health', (req, res) => {
  console.log('GET /health');
  res.sendStatus(204);
});

app.listen(port, () => console.log(`listening on port ${port}`));

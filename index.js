const express = require('express');
const crypto = require('crypto');
const uuid = require('uuid');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/hello', (req, res) => {
  console.log('GET /hello');
  res.json({date: new Date().toISOString(), message: 'hello world!'});
});

app.get('/health', (req, res) => {
  console.log('GET /health');
  res.sendStatus(204);
});

app.get('/hash', (req, res) => {
  const id = uuid.v4().substring(0, 8);
  const start = Date.now();
  console.log(`GET /h256 [${id}]`);
  const hash = crypto
    .createHmac('sha256', 'My 5uPER 5ecRe7')
    .update(new Date().toISOString())
    .digest('base64');

  console.log(`Hash generated for [${id}] in ${Date.now() - start}ms`);
  res.send(hash)
});


app.listen(port, () => console.log(`listening on port ${port}`));

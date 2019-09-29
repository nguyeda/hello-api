const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/hello', (req, res) => res.json({ date: new Date().toISOString(), message: 'hello world!'}));

app.get('/health', (req, res) => res.sendStatus(204));

app.listen(port, () => console.log(`listening on port ${port}`));

// app.js
const express = require('express');
const requestLogger = require('./requestLogger');

const app = express();
const port = 3009;

// Include requestLogger as global middleware
app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

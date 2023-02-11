const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 8055;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

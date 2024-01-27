const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);

  next();
});

app.get('/:id', function (req, res) {
  try {
    const result = {
      hello: `hello, ${req.params.id}!`,
    };

    res.json(result);
  } catch (err) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000);

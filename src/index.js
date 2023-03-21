const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// logs http request: morgan npm
app.use(morgan('combined'));

// set static file
app.use(express.static('C:\\Users\\DuowngTora\\Pictures\\Saved Pictures'))

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
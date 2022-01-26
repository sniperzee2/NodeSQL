const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'))

app.use('/', require('./routes/route'));

const PORT = 5000;


app.listen(
  PORT,
  console.log(`Server running on ${PORT}`)
);

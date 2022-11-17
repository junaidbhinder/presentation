require("dotenv").config();
const db = require("./config/db");
const express = require('express');
const users = require('./router/user.routes')
const stock = require('./router/csv.router')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/v1',users)  
app.use('/api/v1',stock)
app.listen(process.env.PORT, () => {
  console.log('server is Running', process.env.PORT);
});
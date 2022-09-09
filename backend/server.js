require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConn = require('./config/database');
const router = require('./routes');

const corsOption = {
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));

dbConn();
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send("Welcome to Coder's Collab");
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

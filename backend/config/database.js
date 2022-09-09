const mongoose = require('mongoose');

function dbConnect() {
  const { DB_URL } = process.env;

  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error: '));
  db.once('open', () => {
    console.log('DB connected!');
  });
}

module.exports = dbConnect;

const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
  } catch (err) {
    console.error('Error connecting to mongodb');
    console.error(err);
  }
}

module.exports = { connect };

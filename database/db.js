require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(process.env.DATABASE_URL)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;

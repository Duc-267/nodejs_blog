const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/duc_application_dev');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect fail');
        
    }
}

module.exports = { connect }

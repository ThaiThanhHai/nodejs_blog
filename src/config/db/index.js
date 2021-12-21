const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/F8_Education');
        console.log('Connect Successfuly!!!');
    } catch(err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };

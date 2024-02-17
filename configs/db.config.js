const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ex-event-mod-2-lab';


mongoose.connect(MONGODB_URI) 
    .then(() => console.info(`Succesfully connected to ${MONGODB_URI}`))
    .catch((error) => console.error('Error: ' + error));
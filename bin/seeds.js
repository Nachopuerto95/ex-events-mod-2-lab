require('dotenv/config');
require('../configs/db.config');

const Event = require('../models/event.model');
const events = require('../data/events');

Event.create(events) 
    .then((events) => console.log(`${events.length} events created`))
    .catch((error) => console.error('error al crear', error));

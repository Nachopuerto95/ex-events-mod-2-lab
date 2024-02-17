const Event = require('../models/event.model');


module.exports.make = (req, res, next) => {
    res.render('layout');
} 

module.exports.list = (req, res, next) => {
    
    Event.find()    
        .then((events) => res.render('events/list', {events})) 
        .catch((error) => next(error) )
}

module.exports.detail = (req, res, next) => {
    res.render('events/detail')
}
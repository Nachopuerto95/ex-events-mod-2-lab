module.exports.make = (req, res, next) => {
    res.render('layout');
} 

const events = require('../data/events');

module.exports.list = (req, res, next) => {
    res.render('events/list', {events})
}
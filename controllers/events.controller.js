const Event = require('../models/event.model');
const createError = require('http-errors');
const mongoose = require('mongoose');


module.exports.list = (req, res, next) => {
    Event.find()    
        .then((events) => res.render('events/list', {events})) 
        .catch((error) => next(error))
}

module.exports.detail = (req, res, next) => {
    Event.findById(req.params.id)
        .then((event) =>  res.render('events/detail', {event}))
        .catch (() => next(createError(404, 'Not found')))

}

module.exports.create = (req, res, next) => {
    res.render('events/create')
}

module.exports.doCreate = (req, res, next) => {
    const event = req.body;

    Event.create(event)
        .then((event) => res.redirect('/events'))
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).render('events/create', {event, errors: error.errors});
            } else {
                next(error);

            }
        });
}

module.exports.delete = (req, res, next) => {
    
    Event.findByIdAndDelete(req.params.id)
        .then((event) => {
            if (!event) {
                next(createError(404, 'Event not found'))
            } else {
                res.redirect('/events')
            }
        })
        .catch((error) => next(error));

}
const express = require('express');
const events = require('../controllers/events.controller');

const router = express.Router();
router.get('/', events.make);
router.get('/events', events.list);

module.exports = router;

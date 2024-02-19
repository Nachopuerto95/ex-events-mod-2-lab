require('dotenv/config');
require('./configs/db.config');


const createError = require('http-errors');
const express  = require('express');
const logger = require('morgan');
const app = express();

require('./configs/hbs.config');


app.set('view engine','hbs'); 
app.set('views', __dirname + '/views');

// Application middleware
app.use(logger('dev'));
app.use(express.urlencoded());
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
})

const routes = require('./configs/routes.config');
app.use('/', routes);

app.use((req, res, next) => next(createError(404, 'route not found')));

app.use((error, req, res, next) => {
    error = error.status ? error : createError(500, error);
    console.error(error);
    res.status(error.status).render(`errors/${error.status}`);
})




app.listen(3000, () => console.log('listening on port 3000'));

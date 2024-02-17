require('dotenv/config');
require('./configs/db.config');


const express  = require('express');
const app = express();

require('./configs/hbs.config');


app.set('view engine','hbs'); 
app.set('views', __dirname + '/views');

const routes = require('./configs/routes.config');
app.use('/', routes);

app.listen(3000, () => console.log('listening on por 3000'));


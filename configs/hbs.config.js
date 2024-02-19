const hbs = require('hbs');
const dayjs = require('../configs/dayjs.config');

hbs.registerHelper('dateFormat', (date, format ) => {
    
    return dayjs(date).format(format);

})


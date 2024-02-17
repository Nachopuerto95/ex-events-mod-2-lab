const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [3, 'Title needs at least 3 chars']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minLength: [10, 'Description needs at least 10 chars']
        },
        capacity: {
            type: Number,
            required: [true, 'Capacity is required'],
            min: [1, 'capacity must be greater than 0']
        },
        start: {
            type: Date,
            required: [true, 'Start date is required'],
        },
        end: {
            type: Date,
            required: [true, 'End date is required'],
            validate: 
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            validate: {
                validator: function(value) {
                    try{
                        new URL(value);
                        return true;
                    } catch (error) {
                        return false;
                    }
                },
                message: 'Invalid image URL' 
            }
        },
        tags: {
            type: [String]
        } 
    },
    { timestamps: true}
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
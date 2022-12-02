const { Schema, model } = require("mongoose");

// *** MAY NEED TO ADD ATHLETS ID FROM STATS JSON FILE *** 
// *** STATS JSON FILE CURRENTLY ONLY HAS STATS FOR DAMARTS -- IT MAY BE CHANGED TO INCLUDE ALL MEMBERS STATS, THEREFORE WOULD NEED TO USE ATHLETE ID IN MODELS *** 


const statsSchema = new Schema(
    {
        name: {
            type: String, 
            required: true, 
            trim: true
        }, 
        distance: {
            type: Number, 
            required: true
        },
        moving_time: {
            type: Number, 
            required: true
        },
        elapsed_time: {
            type: Number, 
            required: true
        },
        total_elevation_gain: {
            type: Number, 
            required: true
        },
        average_speed: {
            type: Number, 
            required: true
        },
        max_speed: {
            type: Number, 
            required: true
        },
        average_Watts: {
            type: Number, 
            required: true
        },
        elev_high: {
            type: Number, 
            required: true
        },
        elev_low: {
            type: Number, 
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Stats = model("Stats", statsSchema);

module.exports = Stats;


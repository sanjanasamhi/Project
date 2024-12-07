const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    data: {
        labels: { type: [String], required: true }, 
        datasets: [{
            label: { type: String, required: true }, 
            data: { type: [Number], required: true }, 
            backgroundColor: { type: [String], required: true }
        }]
    }
});

module.exports = mongoose.model('Report', reportSchema);
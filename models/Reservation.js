const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    catwayNumber:   {type: Number, required: true},
    clientName:     {type: String, required: true},
    boatName:       {type: String},
    startDate:      {type: Date, require: true},
    endDate:        {type: Date, require: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);
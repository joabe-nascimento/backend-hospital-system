const mongoose = require("mongoose");

const TrackingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

const Tracking = mongoose.model("Tracking", TrackingSchema);

module.exports = Tracking;

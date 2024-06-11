const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  registeredBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Incident", incidentSchema);

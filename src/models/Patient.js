const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priority: { type: String, default: "Baixa" },
});

module.exports = mongoose.model("Patient", PatientSchema);



const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  patient: { type: String, required: true },
  status: { type: String, default: "Pendente" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", RequestSchema);

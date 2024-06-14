const Patient = require("../models/Patient");

exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pacientes" });
  }
};

exports.addPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: "Erro ao adicionar paciente" });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedPatient);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar paciente" });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    await Patient.findByIdAndDelete(id);
    res.json({ message: "Paciente removido" });
  } catch (error) {
    res.status(400).json({ message: "Erro ao remover paciente" });
  }
};

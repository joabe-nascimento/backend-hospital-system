const express = require("express");
const router = express.Router();
const Incident = require("../models/Incident");

// Obter todos os incidentes
router.get("/incidents", async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.json(incidents);
  } catch (err) {
    console.error("Erro ao buscar incidentes:", err);
    res.status(500).json({ message: err.message });
  }
});

// Adicionar um novo incidente
router.post("/incidents", async (req, res) => {
  const incident = new Incident({
    description: req.body.description,
    registeredBy: req.body.registeredBy,
  });

  try {
    const newIncident = await incident.save();
    res.status(201).json(newIncident);
  } catch (err) {
    console.error("Erro ao adicionar incidente:", err);
    res.status(400).json({ message: err.message });
  }
});

// Remover um incidente
router.delete("/incidents/:id", async (req, res) => {
  try {
    console.log(`Tentando remover o incidente com ID: ${req.params.id}`);
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      console.log("Incidente não encontrado");
      return res.status(404).json({ message: "Incidente não encontrado" });
    }
    await Incident.deleteOne({ _id: req.params.id });
    res.json({ message: "Incidente removido" });
  } catch (err) {
    console.error("Erro ao remover incidente:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

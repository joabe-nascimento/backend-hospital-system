const express = require("express");
const router = express.Router();
const Tracking = require("../models/Tracking");

// Obter todos os trackings
router.get("/trackings", async (req, res) => {
  try {
    const trackings = await Tracking.find();
    res.json(trackings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Adicionar um novo tracking
router.post("/trackings", async (req, res) => {
  const tracking = new Tracking({
    name: req.body.name,
    status: req.body.status,
  });

  try {
    const newTracking = await tracking.save();
    res.status(201).json(newTracking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Atualizar status de um tracking
router.patch("/trackings/:id", async (req, res) => {
  try {
    const tracking = await Tracking.findById(req.params.id);
    if (!tracking) {
      return res.status(404).json({ message: "Tracking não encontrado" });
    }
    tracking.status = req.body.status;
    await tracking.save();
    res.json(tracking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

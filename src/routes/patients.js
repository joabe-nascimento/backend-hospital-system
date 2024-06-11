const express = require("express");
const {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");
const router = express.Router();

router.get("/patients", getPatients);
router.post("/patients", addPatient);
router.patch("/patients/:id", updatePatient);
router.delete("/patients/:id", deletePatient);

module.exports = router;

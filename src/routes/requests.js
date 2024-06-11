const express = require("express");
const {
  getRequests,
  addRequest,
  updateRequest,
} = require("../controllers/requestController");
const router = express.Router();

router.get("/requests", getRequests);
router.post("/requests", addRequest);
router.patch("/requests/:id", updateRequest);

module.exports = router;

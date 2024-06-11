const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const requestRoutes = require("./routes/requests");
const priorityRoutes = require("./routes/patients");
const trackingRoutes = require("./routes/trackings");
const incidentRoutes = require("./routes/incidents");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB", err));

// Rotas
app.use("/api", authRoutes);
app.use("/api", requestRoutes);
app.use("/api", priorityRoutes);
app.use("/api", trackingRoutes);
app.use("/api", incidentRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

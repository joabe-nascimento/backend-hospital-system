  const Request = require("../models/Request");

  exports.getRequests = async (req, res) => {
    try {
      const requests = await Request.find();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar solicitações" });
    }
  };

  exports.addRequest = async (req, res) => {
    try {
      const newRequest = new Request(req.body);
      await newRequest.save();
      res.status(201).json(newRequest);
    } catch (error) {
      res.status(400).json({ message: "Erro ao adicionar solicitação" });
    }
  };

  exports.updateRequest = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRequest = await Request.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedRequest);
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar solicitação" });
    }
  };

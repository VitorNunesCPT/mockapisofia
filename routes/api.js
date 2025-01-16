const express = require("express");
const { mockRegulators } = require("../data/regulator");
const { mockRegulatedList } = require("../data/regulatorList");
const {
  mockConsultants,
  mockConsultantAnswers,
  mockProcessSolicitations,
  mockSolicitationsSOF,
} = require("../data/consultant");

const router = express.Router();

// Rota GET para '/regulator/home'
router.get("/regulator/home", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockRegulators, // Retorna os dados mockados
  });
});

router.get("/regulator/forwarded", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockRegulatedList, // Retorna os dados mockados
  });
});

// Nova rota POST para '/regulator/solicitation/read/:id'
router.post("/regulator/solicitation/read/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  // Exemplo de resposta para simular a API
  res.status(200).json({
    message: `Teleconsultoria com ID ${id} foi devolvida com sucesso!`,
    data: {
      id,
      description,
      status: "returned",
    },
  });
});

router.get("/regulator/rejects", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockRegulatedList, // Retorna os dados mockados
  });
});

router.get("/regulator/returned", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockRegulatedList, // Retorna os dados mockados
  });
});

// Rota GET para '/consultant/home'
router.get("/consultant/home", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockConsultants, // Retorna os dados mockados
  });
});

// Rota GET para '/consultant/answers'
router.get("/consultant/answers", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockConsultantAnswers, // Retorna os dados mockados
  });
});

// Rota GET para '/processes/solicitations'
router.get("/processes/solicitations", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockProcessSolicitations, // Retorna os dados mockados
  });
});

// Rota GET para '/processes/solicitationsSOF'
router.get("/processes/solicitationsSOF", (req, res) => {
  res.status(200).json({
    message: "Success",
    data: mockSolicitationsSOF, // Retorna os dados mockados
  });
});
module.exports = router;

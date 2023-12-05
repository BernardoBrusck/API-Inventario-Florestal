const RelogioMedicinal = require('../models/relogioMedicinal');

const getAllRelogioMedicinal = async (req, res) => {
  try {
    const relogioMedicinal = await RelogioMedicinal.getAll();
    res.json(relogioMedicinal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createRelogioMedicinal = async (req, res) => {
  const { id, acao, horario, plantio, modo_uso, contraindicacao, indicacao } = req.body;
  try {
    const relogioMedicinal = await RelogioMedicinal.create(id, acao, horario, plantio, modo_uso, contraindicacao, indicacao);
    res.json(relogioMedicinal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateRelogioMedicinal = async (req, res) => {
  const { id } = req.params;
  const { acao, horario, plantio, modo_uso, contraindicacao, indicacao } = req.body;

  try {
    const existingRelogioMedicinal = await RelogioMedicinal.getById(id);

    if (!existingRelogioMedicinal) {
      return res.status(404).json({ error: 'RelogioMedicinal not found' });
    }

    const updatedRelogioMedicinal = await RelogioMedicinal.update(id, acao, horario, plantio, modo_uso, contraindicacao, indicacao);
    res.json(updatedRelogioMedicinal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateRelogioMedicinal = async (req, res) => {
  const { id } = req.params;
  const { acao, horario, plantio, modo_uso, contraindicacao, indicacao } = req.body;

  try {
    const existingRelogioMedicinal = await RelogioMedicinal.getById(id);

    if (!existingRelogioMedicinal) {
      return res.status(404).json({ error: 'RelogioMedicinal not found' });
    }

    if (acao !== undefined) {
      existingRelogioMedicinal.acao = acao;
    }

    if (horario !== undefined) {
      existingRelogioMedicinal.horario = horario;
    }

    if (plantio !== undefined) {
      existingRelogioMedicinal.plantio = plantio;
    }

    if (modo_uso !== undefined) {
      existingRelogioMedicinal.modo_uso = modo_uso;
    }

    if (contraindicacao !== undefined) {
      existingRelogioMedicinal.contraindicacao = contraindicacao;
    }

    if (indicacao !== undefined) {
      existingRelogioMedicinal.indicacao = indicacao;
    }

    const updatedRelogioMedicinal = await RelogioMedicinal.update(id, existingRelogioMedicinal.acao, existingRelogioMedicinal.horario, existingRelogioMedicinal.plantio, existingRelogioMedicinal.modo_uso, existingRelogioMedicinal.contraindicacao, existingRelogioMedicinal.indicacao);
    res.json(updatedRelogioMedicinal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteRelogioMedicinal = async (req, res) => {
  const { id } = req.params;
  try {
    const relogioMedicinal = await RelogioMedicinal.delete(id);
    if (relogioMedicinal) {
      res.json(relogioMedicinal);
    } else {
      res.status(404).json({ error: 'Relogio Medicinal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllRelogioMedicinal,
  createRelogioMedicinal,
  updateRelogioMedicinal,
  partialUpdateRelogioMedicinal,
  deleteRelogioMedicinal,
};
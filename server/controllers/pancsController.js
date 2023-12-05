const PANC = require('../models/pancs');

const getAllPANCs = async (req, res) => {
  try {
    const pancs = await PANC.getAll();
    res.json(pancs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPANC = async (req, res) => {
  const { id, plantio, modo_uso, contraindicacao, indicacao } = req.body;
  try {
    const panc = await PANC.create(id, plantio, modo_uso, contraindicacao, indicacao);
    res.json(panc);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePANC = async (req, res) => {
  const { id } = req.query;
  const { plantio, modo_uso, contraindicacao, indicacao } = req.body;
  try {
    const panc = await PANC.update(id, plantio, modo_uso, contraindicacao, indicacao);
    if (panc) {
      res.json(panc);
    } else {
      res.status(404).json({ error: 'Pancs not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdatePancs = async (req, res) => {
  const { id } = req.params;
  const { plantio, modo_uso, contraindicacao, indicacao } = req.body;

  try {
    const existingPancs = await PANC.getById(id);

    if (!existingPancs) {
      return res.status(404).json({ error: 'Pancs not found' });
    }

    if (plantio !== undefined) {
      existingPancs.plantio = plantio;
    }

    if (modo_uso !== undefined) {
      existingPancs.modo_uso = modo_uso;
    }

    if (contraindicacao !== undefined) {
      existingPancs.contraindicacao = contraindicacao;
    }

    if (indicacao !== undefined) {
      existingPancs.indicacao = indicacao;
    }

    const updatedPancs = await PANC.update(id, existingPancs.plantio, existingPancs.modo_uso, existingPancs.contraindicacao, existingPancs.indicacao);
    res.json(updatedPancs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePANC = async (req, res) => {
  const { id } = req.query;
  try {
    const panc = await PANC.delete(id);
    if (panc) {
      res.json(panc);
    } else {
      res.status(404).json({ error: 'Pancs not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPANCs,
  createPANC,
  updatePANC,
  deletePANC,
  partialUpdatePancs,
};
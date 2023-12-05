const AviFauna = require('../models/avi_fauna');

const getAllAviFauna = async (req, res) => {
  try {
    const aviFauna = await AviFauna.getAll();
    res.json(aviFauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAviFaunaById = async (req, res) => {
  const { id } = req.params;
  try {
    const aviFauna = await AviFauna.getById(id);
    if (aviFauna) {
      res.json(aviFauna);
    } else {
      res.status(404).json({ error: 'Avi Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createAviFauna = async (req, res) => {
  const { id, habitat, habitat_alimentar } = req.body;
  try {
    const aviFauna = await AviFauna.create(id, habitat, habitat_alimentar);
    res.json(aviFauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateAviFauna = async (req, res) => {
  const { id } = req.params;
  const { habitat, habitat_alimentar } = req.body;
  try {
    const aviFauna = await AviFauna.update(id, habitat, habitat_alimentar);
    if (aviFauna) {
      res.json(aviFauna);
    } else {
      res.status(404).json({ error: 'Avi Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateAviFauna = async (req, res) => {
  const { id } = req.params;
  const { habitat, habitat_alimentar } = req.body;

  try {
    const existingAviFauna = await AviFauna.getById(id);

    if (!existingAviFauna) {
      return res.status(404).json({ error: 'AviFauna not found' });
    }

    if (habitat !== undefined) {
      existingAviFauna.habitat = habitat;
    }

    if (habitat_alimentar !== undefined) {
      existingAviFauna.habitat_alimentar = habitat_alimentar;
    }

    const updatedAviFauna = await AviFauna.update(id, existingAviFauna.habitat, existingAviFauna.habitat_alimentar);
    res.json(updatedAviFauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteAviFauna = async (req, res) => {
  const { id } = req.params;
  try {
    const aviFauna = await AviFauna.delete(id);
    if (aviFauna) {
      res.json(aviFauna);
    } else {
      res.status(404).json({ error: 'Avi Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAviFauna,
  getAviFaunaById,
  createAviFauna,
  updateAviFauna,
  deleteAviFauna,
  partialUpdateAviFauna,
};
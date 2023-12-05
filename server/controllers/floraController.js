const Flora = require('../models/flora');

const getAllFlora = async (req, res) => {
  try {
    const flora = await Flora.getAll();
    res.json(flora);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFloraById = async (req, res) => {
  const { id } = req.params;
  try {
    const flora = await Flora.getById(id);
    if (flora) {
      res.json(flora);
    } else {
      res.status(404).json({ error: 'Flora not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFlora = async (req, res) => {
  const { nome_cientifico, nome_popular, id_especie } = req.body;
  try {
    const flora = await Flora.create(nome_cientifico, nome_popular, id_especie);
    res.json(flora);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateFlora = async (req, res) => {
  const { id } = req.params;
  const { nome_cientifico, nome_popular, id_especie } = req.body;
  try {
    const flora = await Flora.update(id, nome_cientifico, nome_popular, id_especie);
    if (flora) {
      res.json(flora);
    } else {
      res.status(404).json({ error: 'Flora not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateFlora = async (req, res) => {
  const { id } = req.params;
  const { nome_cientifico, nome_popular, id_especie } = req.body;

  try {
    const existingFlora = await Flora.getById(id);

    if (!existingFlora) {
      return res.status(404).json({ error: 'Flora not found' });
    }

    if (nome_cientifico !== undefined) {
      existingFlora.nome_cientifico = nome_cientifico;
    }

    if (nome_popular !== undefined) {
      existingFlora.nome_popular = nome_popular;
    }

    if (id_especie !== undefined) {
      existingFlora.id_especie = id_especie;
    }

    const updatedFlora = await Flora.update(id, existingFlora.nome_cientifico, existingFlora.nome_popular, existingFlora.id_especie);
    res.json(updatedFlora);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFlora = async (req, res) => {
  const { id } = req.params;
  try {
    const flora = await Flora.delete(id);
    if (flora) {
      res.json(flora);
    } else {
      res.status(404).json({ error: 'Flora not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllFlora,
  getFloraById,
  createFlora,
  updateFlora,
  deleteFlora,
  partialUpdateFlora,
};
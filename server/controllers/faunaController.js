const Fauna = require('../models/fauna');

const getAllFauna = async (req, res) => {
  try {
    const fauna = await Fauna.getAll();
    res.json(fauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFaunaById = async (req, res) => {
  const { id } = req.params;
  try {
    const fauna = await Fauna.getById(id);
    if (fauna) {
      res.json(fauna);
    } else {
      res.status(404).json({ error: 'Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFauna = async (req, res) => {
  const { nome_cientifico, nome_popular, id_especie } = req.body;
  try {
    const fauna = await Fauna.create(nome_cientifico, nome_popular, id_especie);
    res.json(fauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateFauna = async (req, res) => {
  const { id } = req.params;
  const { nome_cientifico, nome_popular, id_especie } = req.body;
  try {
    const fauna = await Fauna.update(id, nome_cientifico, nome_popular, id_especie);
    if (fauna) {
      res.json(fauna);
    } else {
      res.status(404).json({ error: 'Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateFauna = async (req, res) => {
  const { id } = req.params;
  const { nome_cientifico, nome_popular, id_especie } = req.body;

  try {
    const existingFauna = await Fauna.getById(id);

    if (!existingFauna) {
      return res.status(404).json({ error: 'Fauna not found' });
    }

    if (nome_cientifico !== undefined) {
      existingFauna.nome_cientifico = nome_cientifico;
    }

    if (nome_popular !== undefined) {
      existingFauna.nome_popular = nome_popular;
    }

    if (id_especie !== undefined) {
      existingFauna.id_especie = id_especie;
    }

    const updatedFauna = await Fauna.update(id, existingFauna.nome_cientifico, existingFauna.nome_popular, existingFauna.id_especie);
    res.json(updatedFauna);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFauna = async (req, res) => {
  const { id } = req.params;
  try {
    const fauna = await Fauna.delete(id);
    if (fauna) {
      res.json(fauna);
    } else {
      res.status(404).json({ error: 'Fauna not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllFauna,
  getFaunaById,
  createFauna,
  updateFauna,
  deleteFauna,
  partialUpdateFauna,
};
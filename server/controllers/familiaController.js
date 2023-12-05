const Familia = require('../models/familia');

const getAllFamilias = async (req, res) => {
  try {
    const familias = await Familia.getAll();
    res.json(familias);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFamiliaById = async (req, res) => {
  const { id } = req.params;
  try {
    const familia = await Familia.getById(id);
    if (familia) {
      res.json(familia);
    } else {
      res.status(404).json({ error: 'Familia not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFamilia = async (req, res) => {
  const { nome, id_ordem } = req.body;
  try {
    const familia = await Familia.create(nome, id_ordem);
    res.json(familia);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateFamilia = async (req, res) => {
  const { id } = req.params;
  const { nome, id_ordem } = req.body;
  try {
    const familia = await Familia.update(id, nome, id_ordem);
    if (familia) {
      res.json(familia);
    } else {
      res.status(404).json({ error: 'Familia not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateFamilia = async (req, res) => {
  const { id } = req.params;
  const { nome, id_ordem } = req.body;

  try {
    const existingFamilia = await Familia.getById(id);

    if (!existingFamilia) {
      return res.status(404).json({ error: 'Familia not found' });
    }

    if (nome !== undefined) {
      existingFamilia.nome = nome;
    }

    if (id_ordem !== undefined) {
      existingFamilia.id_ordem = id_ordem;
    }

    const updatedFamilia = await Familia.update(id, existingFamilia.nome, existingFamilia.id_ordem);
    res.json(updatedFamilia);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFamilia = async (req, res) => {
  const { id } = req.params;
  try {
    const familia = await Familia.delete(id);
    if (familia) {
      res.json(familia);
    } else {
      res.status(404).json({ error: 'Familia not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllFamilias,
  getFamiliaById,
  createFamilia,
  updateFamilia,
  deleteFamilia,
  partialUpdateFamilia,
};
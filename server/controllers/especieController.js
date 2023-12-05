const Especie = require('../models/especie');

const getAllEspecies = async (req, res) => {
  try {
    const especies = await Especie.getAll();
    res.json(especies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getEspecieById = async (req, res) => {
  const { id } = req.params;
  try {
    const especie = await Especie.getById(id);
    if (especie) {
      res.json(especie);
    } else {
      res.status(404).json({ error: 'Especie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createEspecie = async (req, res) => {
  const { nome, id_genero } = req.body;
  try {
    const especie = await Especie.create(nome, id_genero);
    res.json(especie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateEspecie = async (req, res) => {
  const { id } = req.params;
  const { nome, id_genero } = req.body;
  try {
    const especie = await Especie.update(id, nome, id_genero);
    if (especie) {
      res.json(especie);
    } else {
      res.status(404).json({ error: 'Especie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateEspecie = async (req, res) => {
  const { id } = req.params;
  const { nome, id_genero } = req.body;

  try {
    const existingEspecie = await Especie.getById(id);

    if (!existingEspecie) {
      return res.status(404).json({ error: 'Especie not found' });
    }

    if (nome !== undefined) {
      existingEspecie.nome = nome;
    }

    if (id_genero !== undefined) {
      existingEspecie.id_genero = id_genero;
    }

    const updatedEspecie = await Especie.update(id, existingEspecie.nome, existingEspecie.id_genero);
    res.json(updatedEspecie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteEspecie = async (req, res) => {
  const { id } = req.params;
  try {
    const especie = await Especie.delete(id);
    if (especie) {
      res.json(especie);
    } else {
      res.status(404).json({ error: 'Especie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllEspecies,
  getEspecieById,
  createEspecie,
  updateEspecie,
  deleteEspecie,
  partialUpdateEspecie,
};
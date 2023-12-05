const Genero = require('../models/genero');

const getAllGeneros = async (req, res) => {
  try {
    const generos = await Genero.getAll();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getGeneroById = async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await Genero.getById(id);
    if (genero) {
      res.json(genero);
    } else {
      res.status(404).json({ error: 'Genero not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createGenero = async (req, res) => {
  const { nome, id_familia } = req.body;
  try {
    const genero = await Genero.create(nome, id_familia);
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateGenero = async (req, res) => {
  const { id } = req.params;
  const { nome, id_familia } = req.body;
  try {
    const genero = await Genero.update(id, nome, id_familia);
    if (genero) {
      res.json(genero);
    } else {
      res.status(404).json({ error: 'Genero not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateGenero = async (req, res) => {
  const { id } = req.params;
  const { nome, id_familia } = req.body;

  try {
    const existingGenero = await Genero.getById(id);

    if (!existingGenero) {
      return res.status(404).json({ error: 'Genero not found' });
    }

    if (nome !== undefined) {
      existingGenero.nome = nome;
    }

    if (id_familia !== undefined) {
      existingGenero.id_familia = id_familia;
    }

    const updatedGenero = await Genero.update(id, existingGenero.nome, existingGenero.id_familia);
    res.json(updatedGenero);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteGenero = async (req, res) => {
  const { id } = req.params;
  try {
    const genero = await Genero.delete(id);
    if (genero) {
      res.json(genero);
    } else {
      res.status(404).json({ error: 'Genero not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  deleteGenero,
  partialUpdateGenero,
};
const Filo = require('../models/filo');

const getAllFilos = async (req, res) => {
  try {
    const filos = await Filo.getAll();
    res.json(filos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFiloById = async (req, res) => {
  const { id } = req.params;
  try {
    const filo = await Filo.getById(id);
    if (filo) {
      res.json(filo);
    } else {
      res.status(404).json({ error: 'Filo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createFilo = async (req, res) => {
  const { nome, id_reino } = req.body;
  try {
    const filo = await Filo.create(nome, id_reino);
    res.json(filo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateFilo = async (req, res) => {
  const { id } = req.params;
  const { nome, id_reino } = req.body;
  try {
    const filo = await Filo.update(id, nome, id_reino);
    if (filo) {
      res.json(filo);
    } else {
      res.status(404).json({ error: 'Filo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateFilo = async (req, res) => {
  const { id } = req.params;
  const { nome, id_reino } = req.body;

  try {
    const existingFilo = await Filo.getById(id);

    if (!existingFilo) {
      return res.status(404).json({ error: 'Filo not found' });
    }

    if (nome !== undefined) {
      existingFilo.nome = nome;
    }

    if (id_reino !== undefined) {
      existingFilo.id_reino = id_reino;
    }

    const updatedFilo = await Filo.update(id, existingFilo.nome, existingFilo.id_reino);
    res.json(updatedFilo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFilo = async (req, res) => {
  const { id } = req.params;
  try {
    const filo = await Filo.delete(id);
    if (filo) {
      res.json(filo);
    } else {
      res.status(404).json({ error: 'Filo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllFilos,
  getFiloById,
  createFilo,
  updateFilo,
  deleteFilo,
  partialUpdateFilo,
};
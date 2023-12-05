const Ordem = require('../models/ordem');

const getAllOrdens = async (req, res) => {
  try {
    const ordens = await Ordem.getAll();
    res.json(ordens);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrdemById = async (req, res) => {
  const { id } = req.params;
  try {
    const ordem = await Ordem.getById(id);
    if (ordem) {
      res.json(ordem);
    } else {
      res.status(404).json({ error: 'Ordem not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createOrdem = async (req, res) => {
  const { nome, id_classe } = req.body;
  try {
    const ordem = await Ordem.create(nome, id_classe);
    res.json(ordem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateOrdem = async (req, res) => {
  const { id } = req.params;
  const { nome, id_classe } = req.body;
  try {
    const ordem = await Ordem.update(id, nome, id_classe);
    if (ordem) {
      res.json(ordem);
    } else {
      res.status(404).json({ error: 'Ordem not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateOrdem = async (req, res) => {
  const { id } = req.params;
  const { nome, id_classe } = req.body;

  try {
    const existingOrdem = await Ordem.getById(id);

    if (!existingOrdem) {
      return res.status(404).json({ error: 'Ordem not found' });
    }

    if (nome !== undefined) {
      existingOrdem.nome = nome;
    }

    if (id_classe !== undefined) {
      existingOrdem.id_classe = id_classe;
    }

    const updatedOrdem = await Ordem.update(id, existingOrdem.nome, existingOrdem.id_classe);
    res.json(updatedOrdem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteOrdem = async (req, res) => {
  const { id } = req.params;
  try {
    const ordem = await Ordem.delete(id);
    if (ordem) {
      res.json(ordem);
    } else {
      res.status(404).json({ error: 'Ordem not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllOrdens,
  getOrdemById,
  createOrdem,
  updateOrdem,
  deleteOrdem,
  partialUpdateOrdem,
};
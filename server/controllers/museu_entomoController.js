const MuseuEntomo = require('../models/museu_entomo');

const getAllMuseuEntomo = async (req, res) => {
  try {
    const museuEntomo = await MuseuEntomo.getAll();
    res.json(museuEntomo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMuseuEntomoById = async (req, res) => {
  const { id } = req.params;
  try {
    const museuEntomo = await MuseuEntomo.getById(id);
    if (museuEntomo) {
      res.json(museuEntomo);
    } else {
      res.status(404).json({ error: 'Museu Entomo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMuseuEntomo = async (req, res) => {
  const { id, nome_coletor, data, local } = req.body;
  try {
    const museuEntomo = await MuseuEntomo.create(id, nome_coletor, data, local);
    res.json(museuEntomo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMuseuEntomo = async (req, res) => {
  const { id } = req.params;
  const { nome_coletor, data, local } = req.body;
  try {
    const museuEntomo = await MuseuEntomo.update(id, nome_coletor, data, local);
    if (museuEntomo) {
      res.json(museuEntomo);
    } else {
      res.status(404).json({ error: 'Museu Entomo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateMuseuEntomo = async (req, res) => {
  const { id } = req.params;
  const { nome_coletor, data, local } = req.body;

  try {
    const existingMuseuEntomo = await MuseuEntomo.getById(id);

    if (!existingMuseuEntomo) {
      return res.status(404).json({ error: 'MuseuEntomo not found' });
    }

    if (nome_coletor !== undefined) {
      existingMuseuEntomo.nome_coletor = nome_coletor;
    }

    if (data !== undefined) {
      existingMuseuEntomo.data = data;
    }

    if (local !== undefined) {
      existingMuseuEntomo.local = local;
    }

    const updatedMuseuEntomo = await MuseuEntomo.update(id, existingMuseuEntomo.nome_coletor, existingMuseuEntomo.data, existingMuseuEntomo.local);
    res.json(updatedMuseuEntomo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMuseuEntomo = async (req, res) => {
  const { id } = req.params;
  try {
    const museuEntomo = await MuseuEntomo.delete(id);
    if (museuEntomo) {
      res.json(museuEntomo);
    } else {
      res.status(404).json({ error: 'Museu Entomo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMuseuEntomo,
  getMuseuEntomoById,
  createMuseuEntomo,
  updateMuseuEntomo,
  deleteMuseuEntomo,
  partialUpdateMuseuEntomo,
};
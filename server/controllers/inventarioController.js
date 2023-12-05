const Inventario = require('../models/inventario');

const getAllInventario = async (req, res) => {
  try {
    const inventario = await Inventario.getAll();
    res.json(inventario);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getInventarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const inventario = await Inventario.getById(id);
    if (inventario) {
      res.json(inventario);
    } else {
      res.status(404).json({ error: 'Inventario not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createInventario = async (req, res) => {
  const { id, volume, diametro, altura } = req.body;
  try {
    const inventario = await Inventario.create(id, volume, diametro, altura);
    res.json(inventario);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateInventario = async (req, res) => {
  const { id } = req.params;
  const { volume, diametro, altura } = req.body;
  try {
    const inventario = await Inventario.update(id, volume, diametro, altura);
    if (inventario) {
      res.json(inventario);
    } else {
      res.status(404).json({ error: 'Inventario not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdateInventario = async (req, res) => {
  const { id } = req.params;
  const { volume, diametro, altura } = req.body;

  try {
    const existingInventario = await Inventario.getById(id);

    if (!existingInventario) {
      return res.status(404).json({ error: 'Inventario not found' });
    }

    if (volume !== undefined) {
      existingInventario.volume = volume;
    }

    if (diametro !== undefined) {
      existingInventario.diametro = diametro;
    }

    if (altura !== undefined) {
      existingInventario.altura = altura;
    }

    const updatedInventario = await Inventario.update(id, existingInventario.volume, existingInventario.diametro, existingInventario.altura);
    res.json(updatedInventario);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteInventario = async (req, res) => {
  const { id } = req.params;
  try {
    const inventario = await Inventario.delete(id);
    if (inventario) {
      res.json(inventario);
    } else {
      res.status(404).json({ error: 'Inventario not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllInventario,
  getInventarioById,
  createInventario,
  updateInventario,
  deleteInventario,
  partialUpdateInventario,
};
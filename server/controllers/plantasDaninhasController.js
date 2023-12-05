const PlantasDaninhas = require('../models/plantasDaninhas');

const getAllPlantasDaninhas = async (req, res) => {
  try {
    const plantasDaninhas = await PlantasDaninhas.getAll();
    res.json(plantasDaninhas);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getPlantasDaninhasById = async (req, res) => {
  const { id } = req.params;
  try {
    const plantaDaninha = await PlantasDaninhas.getById(id);
    if (plantaDaninha) {
      res.json(plantaDaninha);
    } else {
      res.status(404).json({ error: 'Planta Daninha not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPlantasDaninhas = async (req, res) => {
  const { id, problema } = req.body;
  try {
    const plantaDaninha = await PlantasDaninhas.create(id, problema);
    res.json(plantaDaninha);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePlantasDaninhas = async (req, res) => {
  const { id } = req.params;
  const { problema } = req.body;
  try {
    const plantaDaninha = await PlantasDaninhas.update(id, problema);
    if (plantaDaninha) {
      res.json(plantaDaninha);
    } else {
      res.status(404).json({ error: 'Planta Daninha not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const partialUpdatePlantasDaninhas = async (req, res) => {
  const { id } = req.params;
  const { problema } = req.body;

  try {
    const existingPlantasDaninhas = await PlantasDaninhas.getById(id);

    if (!existingPlantasDaninhas) {
      return res.status(404).json({ error: 'PlantasDaninhas not found' });
    }

    if (problema !== undefined) {
      existingPlantasDaninhas.problema = problema;
    }

    const updatedPlantasDaninhas = await PlantasDaninhas.update(id, existingPlantasDaninhas.problema);
    res.json(updatedPlantasDaninhas);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePlantasDaninhas = async (req, res) => {
  const { id } = req.params;
  try {
    const plantaDaninha = await PlantasDaninhas.delete(id);
    if (plantaDaninha) {
      res.json(plantaDaninha);
    } else {
      res.status(404).json({ error: 'Planta Daninha not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPlantasDaninhas,
  getPlantasDaninhasById,
  createPlantasDaninhas,
  updatePlantasDaninhas,
  deletePlantasDaninhas,
  partialUpdatePlantasDaninhas,
};
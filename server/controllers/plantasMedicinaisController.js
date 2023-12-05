const PlantasMedicinais = require('../models/plantasMedicinais');

const getAllPlantasMedicinais = async (req, res) => {
  try {
    const plantasMedicinais = await PlantasMedicinais.getAll();
    res.json(plantasMedicinais);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPlantasMedicinais = async (req, res) => {
  const { id } = req.body;
  try {
    const plantaMedicinal = await PlantasMedicinais.create(id);
    res.json(plantaMedicinal);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updatePlantasMedicinais = async (req, res) => {
  const { id } = req.params;
  const { id_flora } = req.body;

  try {
    const existingPlantasMedicinais = await PlantasMedicinais.getById(id);

    if (!existingPlantasMedicinais) {
      return res.status(404).json({ error: 'PlantasMedicinais not found' });
    }

    const updatedPlantasMedicinais = await PlantasMedicinais.update(id, id_flora);
    res.json(updatedPlantasMedicinais);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePlantasMedicinais = async (req, res) => {
  const { id } = req.params;
  try {
    const plantaMedicinal = await PlantasMedicinais.delete(id);
    if (plantaMedicinal) {
      res.json(plantaMedicinal);
    } else {
      res.status(404).json({ error: 'Planta Medicinal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllPlantasMedicinais,
  createPlantasMedicinais,
  updatePlantasMedicinais,
  deletePlantasMedicinais,
};
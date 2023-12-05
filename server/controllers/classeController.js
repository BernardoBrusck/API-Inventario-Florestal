const Classe = require('../models/classe.js');

const getAllClasses = async (req, res) => {
    try {
        const classes = await Classe.getAll();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getClassById = async (req, res) => {
    const { id } = req.params;
    try {
        const classe = await Classe.getById(id);
        if (classe) {
            res.json(classe);
        } else {
            res.status(404).json({ error: 'Classe not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createClasse = async (req, res) => {
    const { nome, id_filo } = req.body;
    try {
        const classe = await Classe.create(nome, id_filo);
        res.json(classe);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateClasse = async (req, res) => {
    const { id } = req.params;
    const { nome, id_filo } = req.body;
    try {
        const classe = await Classe.update(id, nome, id_filo);
        if (classe) {
            res.json(classe);
        } else {
            res.status(404).json({ error: 'Classe not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const partialUpdateClasse = async (req, res) => {
    const { id } = req.params;
    const { nome, id_filo } = req.body;

    try {
        const existingClasse = await Classe.getById(id);

        if (!existingClasse) {
            return res.status(404).json({ error: 'Classe not found' });
        }

        if (nome !== undefined) {
            existingClasse.nome = nome;
        }

        if (id_filo !== undefined) {
            existingClasse.id_filo = id_filo;
        }

        const updatedClasse = await Classe.update(id, existingClasse.nome, existingClasse.id_filo);
        res.json(updatedClasse);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteClasse = async (req, res) => {
    const { id } = req.params;
    try {
        const classe = await Classe.delete(id);
        if (classe) {
            res.json(classe);
        } else {
            res.status(404).json({ error: 'Classe not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllClasses,
    getClassById,
    createClasse,
    updateClasse,
    partialUpdateClasse,
    deleteClasse,
};
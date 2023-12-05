const Reino = require('../models/reino');

const getAllReinos = async (req, res) => {
    try {
        const reinos = await Reino.getAll();
        res.json(reinos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getReinoById = async (req, res) => {
    const { id } = req.params;
    try {
        const reino = await Reino.getById(id);
        if (reino) {
            res.json(reino);
        } else {
            res.status(404).json({ error: 'Reino not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createReino = async (req, res) => {
    const { nome } = req.body;
    try {
        const reino = await Reino.create(nome);
        res.json(reino);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateReino = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        const reino = await Reino.update(id, nome);
        if (reino) {
            res.json(reino);
        } else {
            res.status(404).json({ error: 'Reino not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const partialUpdateReino = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const existingReino = await Reino.getById(id);

        if (!existingReino) {
            return res.status(404).json({ error: 'Reino not found' });
        }

        if (nome !== undefined) {
            existingReino.nome = nome;
        }

        const updatedReino = await Reino.update(id, existingReino.nome);
        res.json(updatedReino);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteReino = async (req, res) => {
    const { id } = req.params;
    try {
        const reino = await Reino.delete(id);
        if (reino) {
            res.json(reino);
        } else {
            res.status(404).json({ error: 'Reino not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllReinos,
    getReinoById,
    createReino,
    updateReino,
    deleteReino,
    partialUpdateReino,
};
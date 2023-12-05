const Users = require('../models/users');
const crypto = require('crypto');

const createUser = async (req, res) => {
    const { nome, cpf, email, telefone, senha } = req.body;

    const Salt = "df21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bcdf21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bc" + senha
    const hashedPassword = crypto.createHash('sha256').update(Salt).digest('hex');

    try {
        const newUser = await Users.create(nome, cpf, email, telefone, hashedPassword);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await Users.getAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Users.getById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserByCPF = async (req, res) => {
    const { cpf } = req.params;

    try {
        const user = await Users.getByCPF(cpf);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getUserLogin = async (req, res) => {
    const { cpf, senha } = req.body;

    const Salt = "df21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bcdf21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bc" + senha
    const hashedPassword = crypto.createHash('sha256').update(Salt).digest('hex');

    try {
        const user = await Users.getLogin(cpf, hashedPassword);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, telefone, senha, cargo } = req.body;

    const Salt = "df21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bcdf21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bc" + senha
    const hashedPassword = crypto.createHash('sha256').update(Salt).digest('hex');

    try {
        const existingUser = await Users.getById(id);

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedUser = await Users.update(id, nome, cpf, email, telefone, hashedPassword, cargo);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const partialUpdateUser = async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, email, telefone, senha, cargo } = req.body;

    const Salt = "df21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bcdf21575de7e6b0d19a5e0b929cedf9e2d33a30b6a1b7974f300a23e55490c1bc" + senha
    const hashedPassword = crypto.createHash('sha256').update(Salt).digest('hex');

    try {
        const existingUser = await Users.getById(id);

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (nome !== undefined) {
            existingUser.nome = nome;
        }

        if (cpf !== undefined) {
            existingUser.cpf = cpf;
        }

        if (email !== undefined) {
            existingUser.email = email;
        }

        if (telefone !== undefined) {
            existingUser.telefone = telefone;
        }

        if (senha !== undefined) {
            existingUser.senha = hashedPassword;
        }

        if (cargo !== undefined) {
            existingUser.cargo = cargo;
        }

        const updatedUser = await Users.update(id, existingUser.nome, existingUser.cpf, existingUser.email, existingUser.telefone, existingUser.senha, existingUser.cargo);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await Users.delete(id);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByCPF,
    getUserLogin,
    updateUser,
    partialUpdateUser,
    deleteUser,
};
const pool = require('../src/db');

class Users {
    static async create(nome, cpf, email, telefone, hashedPassword) {
        try {
            const result = await pool.query('INSERT INTO users (nome, cpf, email, telefone, senha) VALUES ($1, $2, $3, $4, $5) RETURNING *', [nome, cpf, email, telefone, hashedPassword]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creating user');
        }
    }

    static async getAll() {
        try {
            const result = await pool.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }

    static async getById(id) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error fetching user by id');
        }
    }

    static async getByCPF(cpf) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE cpf=$1', [cpf]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error fetching user by cpf');
        }
    }

    static async getLogin(cpf, hashedPassword) {
        try {
            const result = await pool.query('SELECT * FROM users WHERE cpf=$1 AND senha=$2', [cpf, hashedPassword]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error fetching user by cpf and senha');
        }
    }

    static async update(id, nome, cpf, email, telefone, hashedPassword, cargo) {
        try {
            const result = await pool.query('UPDATE users SET nome=$1, cpf=$2, email=$3, telefone=$4, senha=$5, cargo=$6 WHERE id=$7 RETURNING *', [nome, cpf, email, telefone, hashedPassword, cargo, id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error updating user');
        }
    }

    static async delete(id) {
        try {
            const result = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error deleting user');
        }
    }
}

module.exports = Users;
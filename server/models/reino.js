const pool = require('../src/db');

class Reino {
    static async getAll() {
        try {
            const result = await pool.query('SELECT * FROM reinos');
            return result.rows;
        } catch (error) {
            throw new Error('Error fetching reinos');
        }
    }

    static async getById(id) {
        try {
            const result = await pool.query('SELECT * FROM reinos WHERE id=$1', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error fetching reino by id');
        }
    }

    static async create(nome) {
        try {
            const result = await pool.query('INSERT INTO reinos (nome) VALUES ($1) RETURNING *', [nome]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creating reino');
        }
    }

    static async update(id, nome) {
        try {
            const result = await pool.query('UPDATE reinos SET nome=$1 WHERE id=$2 RETURNING *', [nome, id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error updating reino');
        }
    }

    static async delete(id) {
        try {
            const result = await pool.query('DELETE FROM reinos WHERE id=$1 RETURNING *', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error deleting reino');
        }
    }
}

module.exports = Reino;
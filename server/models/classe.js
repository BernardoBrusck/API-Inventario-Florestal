const pool = require('../src/db');

class Classe {
    static async getAll() {
        try {
            const result = await pool.query('SELECT * FROM classes');
            return result.rows;
        } catch (error) {
            throw new Error('Error fetching classes');
        }
    }

    static async getById(id) {
        try {
            const result = await pool.query('SELECT * FROM classes WHERE id=$1', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error fetching classe by id');
        }
    }

    static async create(nome, id_filo) {
        try {
            const result = await pool.query('INSERT INTO classes (nome, id_filo) VALUES ($1, $2) RETURNING *', [nome, id_filo]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error creating classe');
        }
    }

    static async update(id, nome, id_filo) {
        try {
            const result = await pool.query('UPDATE classes SET nome=$1, id_filo=$2 WHERE id=$3 RETURNING *', [nome, id_filo, id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error updating classe');
        }
    }

    static async delete(id) {
        try {
            const result = await pool.query('DELETE FROM classes WHERE id=$1 RETURNING *', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error deleting classe');
        }
    }
}

module.exports = Classe;
const pool = require('../src/db');

class Familia {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM familias');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching familias');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM familias WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching familia by id');
    }
  }

  static async create(nome, id_ordem) {
    try {
      const result = await pool.query('INSERT INTO familias (nome, id_ordem) VALUES ($1, $2) RETURNING *', [nome, id_ordem]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating familia');
    }
  }

  static async update(id, nome, id_ordem) {
    try {
      const result = await pool.query('UPDATE familias SET nome=$1, id_ordem=$2 WHERE id=$3 RETURNING *', [nome, id_ordem, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating familia');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM familias WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting familia');
    }
  }
}

module.exports = Familia;   
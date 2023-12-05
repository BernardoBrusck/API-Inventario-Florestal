const pool = require('../src/db');

class Filo {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM filos');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching filos');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM filos WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching filo by id');
    }
  }

  static async create(nome, id_reino) {
    try {
      const result = await pool.query('INSERT INTO filos (nome, id_reino) VALUES ($1, $2) RETURNING *', [nome, id_reino]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating filo');
    }
  }

  static async update(id, nome, id_reino) {
    try {
      const result = await pool.query('UPDATE filos SET nome=$1, id_reino=$2 WHERE id=$3 RETURNING *', [nome, id_reino, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating filo');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM filos WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting filo');
    }
  }
}

module.exports = Filo;
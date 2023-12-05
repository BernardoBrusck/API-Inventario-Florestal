const pool = require('../src/db');

class PlantasDaninhas {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM plantas_daninhas');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching plantas daninhas');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM plantas_daninhas WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching plantas daninhas by id');
    }
  }

  static async create(id, problema) {
    try {
      const result = await pool.query('INSERT INTO plantas_daninhas (id, problema) VALUES ($1, $2) RETURNING *', [id, problema]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating plantas daninhas');
    }
  }

  static async update(id, problema) {
    try {
      const result = await pool.query('UPDATE plantas_daninhas SET problema=$1 WHERE id=$2 RETURNING *', [problema, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating plantas daninhas');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM plantas_daninhas WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting plantas daninhas');
    }
  }
}

module.exports = PlantasDaninhas;
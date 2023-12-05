const pool = require('../src/db');

class AviFauna {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM avi_fauna');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching avi_fauna');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM avi_fauna WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching avi_fauna by id');
    }
  }

  static async create(id, habitat, habitat_alimentar) {
    try {
      const result = await pool.query('INSERT INTO avi_fauna (id, habitat, habitat_alimentar) VALUES ($1, $2, $3) RETURNING *', [id, habitat, habitat_alimentar]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating avi_fauna');
    }
  }

  static async update(id, habitat, habitat_alimentar) {
    try {
      const result = await pool.query('UPDATE avi_fauna SET habitat=$1, habitat_alimentar=$2 WHERE id=$3 RETURNING *', [habitat, habitat_alimentar, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating avi_fauna');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM avi_fauna WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting avi_fauna');
    }
  }
}

module.exports = AviFauna;
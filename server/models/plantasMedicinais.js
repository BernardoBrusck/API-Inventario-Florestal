const pool = require('../src/db');

class PlantasMedicinais {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM plantas_medicinais');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching plantas medicinais');
    }
  }

  static async create(id) {
    try {
      const result = await pool.query('INSERT INTO plantas_medicinais (id) VALUES ($1) RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating plantas medicinais');
    }
  }

  static async update(id, id_flora) {
    try {
      const result = await pool.query('UPDATE plantas_medicinais SET id_flora=$1 WHERE id=$2 RETURNING *', [id_flora, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating PlantasMedicinais');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM plantas_medicinais WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting plantas medicinais');
    }
  }
}

module.exports = PlantasMedicinais;

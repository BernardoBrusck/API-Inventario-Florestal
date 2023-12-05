const pool = require('../src/db');

class PANC {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM pancs');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching PANCs');
    }
  }

  static async create(id, plantio, modo_uso, contraindicacao, indicacao) {
    try {
      const result = await pool.query('INSERT INTO pancs (id, plantio, modo_uso, contraindicacao, indicacao) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, plantio, modo_uso, contraindicacao, indicacao]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating PANC');
    }
  }

  static async update(id, plantio, modo_uso, contraindicacao, indicacao) {
    try {
      const result = await pool.query('UPDATE pancs SET plantio=$1, modo_uso=$2, contraindicacao=$3, indicacao=$4 WHERE id=$5 RETURNING *', [plantio, modo_uso, contraindicacao, indicacao, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating PANC');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM pancs WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting PANC');
    }
  }
}

module.exports = PANC;
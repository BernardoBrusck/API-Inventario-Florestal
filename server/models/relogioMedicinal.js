const pool = require('../src/db');

class RelogioMedicinal {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM relogio_medicinal');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching relogio medicinal');
    }
  }

  static async create(id, acao, horario, plantio, modo_uso, contraindicacao, indicacao) {
    try {
      const result = await pool.query('INSERT INTO relogio_medicinal (id, acao, horario, plantio, modo_uso, contraindicacao, indicacao) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [id, acao, horario, plantio, modo_uso, contraindicacao, indicacao]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating relogio medicinal');
    }
  }

  static async update(id, acao, horario, plantio, modo_uso, contraindicacao, indicacao) {
    try {
      const result = await pool.query('UPDATE relogio_medicinal SET acao=$1, horario=$2, plantio=$3, modo_uso=$4, contraindicacao=$5, indicacao=$6 WHERE id=$7 RETURNING *', [acao, horario, plantio, modo_uso, contraindicacao, indicacao, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating RelogioMedicinal');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM relogio_medicinal WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting relogio medicinal');
    }
  }
}

module.exports = RelogioMedicinal;
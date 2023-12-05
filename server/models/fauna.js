const pool = require('../src/db');

class Fauna {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM fauna');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching fauna');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM fauna WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching fauna by id');
    }
  }

  static async create(nome_cientifico, nome_popular, id_especie) {
    try {
      const result = await pool.query('INSERT INTO fauna (nome_cientifico, nome_popular, id_especie) VALUES ($1, $2, $3) RETURNING *', [nome_cientifico, nome_popular, id_especie]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating fauna');
    }
  }

  static async update(id, nome_cientifico, nome_popular, id_especie) {
    try {
      const result = await pool.query('UPDATE fauna SET nome_cientifico=$1, nome_popular=$2, id_especie=$3 WHERE id=$4 RETURNING *', [nome_cientifico, nome_popular, id_especie, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating fauna');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM fauna WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting fauna');
    }
  }
}

module.exports = Fauna;
const pool = require('../src/db');

class Flora {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM flora');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching flora');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM flora WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching flora by id');
    }
  }

  static async create(nome_cientifico, nome_popular, id_especie) {
    try {
      const result = await pool.query('INSERT INTO flora (nome_cientifico, nome_popular, id_especie) VALUES ($1, $2, $3) RETURNING *', [nome_cientifico, nome_popular, id_especie]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating flora');
    }
  }

  static async update(id, nome_cientifico, nome_popular, id_especie) {
    try {
      const result = await pool.query('UPDATE flora SET nome_cientifico=$1, nome_popular=$2, id_especie=$3 WHERE id=$4 RETURNING *', [nome_cientifico, nome_popular, id_especie, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating flora');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM flora WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting flora');
    }
  }
}

module.exports = Flora;
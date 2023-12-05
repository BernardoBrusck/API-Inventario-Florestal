const pool = require('../src/db');

class Especie {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM especies');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching especies');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM especies WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching especie by id');
    }
  }

  static async create(nome, id_genero) {
    try {
      const result = await pool.query('INSERT INTO especies (nome, id_genero) VALUES ($1, $2) RETURNING *', [nome, id_genero]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating especie');
    }
  }

  static async update(id, nome, id_genero) {
    try {
      const result = await pool.query('UPDATE especies SET nome=$1, id_genero=$2 WHERE id=$3 RETURNING *', [nome, id_genero, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating especie');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM especies WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting especie');
    }
  }
}

module.exports = Especie;
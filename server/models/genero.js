const pool = require('../src/db');

class Genero {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM generos');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching generos');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM generos WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching genero by id');
    }
  }

  static async create(nome, id_familia) {
    try {
      const result = await pool.query('INSERT INTO generos (nome, id_familia) VALUES ($1, $2) RETURNING *', [nome, id_familia]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating genero');
    }
  }

  static async update(id, nome, id_familia) {
    try {
      const result = await pool.query('UPDATE generos SET nome=$1, id_familia=$2 WHERE id=$3 RETURNING *', [nome, id_familia, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating genero');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM generos WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting genero');
    }
  }
}

module.exports = Genero;
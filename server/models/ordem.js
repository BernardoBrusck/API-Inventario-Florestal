const pool = require('../src/db');

class Ordem {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM ordens');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching ordens');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM ordens WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching ordem by id');
    }
  }

  static async create(nome, id_classe) {
    try {
      const result = await pool.query('INSERT INTO ordens (nome, id_classe) VALUES ($1, $2) RETURNING *', [nome, id_classe]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating ordem');
    }
  }

  static async update(id, nome, id_classe) {
    try {
      const result = await pool.query('UPDATE ordens SET nome=$1, id_classe=$2 WHERE id=$3 RETURNING *', [nome, id_classe, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating ordem');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM ordens WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting ordem');
    }
  }
}

module.exports = Ordem;
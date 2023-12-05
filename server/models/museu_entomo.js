const pool = require('../src/db');

class MuseuEntomo {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM museu_entomo');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching museu_entomo');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM museu_entomo WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching museu_entomo by id');
    }
  }

  static async create(id, nome_coletor, data, local) {
    try {
      const result = await pool.query('INSERT INTO museu_entomo (id, nome_coletor, data, local) VALUES ($1, $2, $3, $4) RETURNING *', [id, nome_coletor, data, local]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating museu_entomo');
    }
  }

  static async update(id, nome_coletor, data, local) {
    try {
      const result = await pool.query('UPDATE museu_entomo SET nome_coletor=$1, data=$2, local=$3 WHERE id=$4 RETURNING *', [nome_coletor, data, local, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating museu_entomo');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM museu_entomo WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting museu_entomo');
    }
  }
}

module.exports = MuseuEntomo;
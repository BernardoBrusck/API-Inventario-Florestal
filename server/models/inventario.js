const pool = require('../src/db');

class Inventario {
  static async getAll() {
    try {
      const result = await pool.query('SELECT * FROM inventario');
      return result.rows;
    } catch (error) {
      throw new Error('Error fetching inventario');
    }
  }

  static async getById(id) {
    try {
      const result = await pool.query('SELECT * FROM inventario WHERE id=$1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error fetching inventario by id');
    }
  }

  static async create(id, volume, diametro, altura) {
    try {
      const result = await pool.query('INSERT INTO inventario (id, volume, diametro, altura) VALUES ($1, $2, $3, $4) RETURNING *', [id, volume, diametro, altura]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error creating inventario');
    }
  }

  static async update(id, volume, diametro, altura) {
    try {
      const result = await pool.query('UPDATE inventario SET volume=$1, diametro=$2, altura=$3 WHERE id=$4 RETURNING *', [volume, diametro, altura, id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error updating inventario');
    }
  }

  static async delete(id) {
    try {
      const result = await pool.query('DELETE FROM inventario WHERE id=$1 RETURNING *', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error('Error deleting inventario');
    }
  }
}

module.exports = Inventario;
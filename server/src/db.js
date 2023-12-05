const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'inventario_florestal',
    password: '123',
    port: 5432,
})

module.exports = pool;
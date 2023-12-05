const pool = require('../src/db');

async function checkAuthorization(req, res, next) {
    const { id_user } = req.body;

    try {
        const result = await pool.query('SELECT cargo FROM users WHERE id = $1', [id_user]);

        if (result.rows.length === 0) {
            return res.status(403).json({ error: 'Acesso Negado' });
        }

        const userCargo = result.rows[0].cargo;

        if (userCargo === 'ADM') {
            return next();
        } else if (userCargo === 'client') {
            if (req.method === 'GET' || req.method === 'POST') {
                return next();
            }
        }

        res.status(403).json({ error: 'Acesso Negado' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = checkAuthorization;

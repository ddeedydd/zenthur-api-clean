// middleware/apiKeyAuth.js
require('dotenv').config();

function apiKeyAuth(req, res, next) {
  const clientKey = req.headers['x-api-key'];
  const validKey = process.env.ZENTHUR_API_KEY;

  if (!clientKey || clientKey !== validKey) {
    return res.status(401).json({ error: 'Unauthorized. Invalid or missing API key.' });
  }

  next(); // ผ่าน ✅
}

module.exports = apiKeyAuth;

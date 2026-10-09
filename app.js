const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 🚨 FAILLE SAST : Secret/Mot de passe écrit en clair dans le code
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE_SECRET_KEY";
const DB_PASSWORD = "admin_password_12345";

app.get('/', (req, res) => {
  res.send('<h1>🛒 Mon Magasin E-Commerce</h1>');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

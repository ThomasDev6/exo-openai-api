import express from 'express';
import chat from "./routes/chat.js";
import cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
// Middleware pour analyser les données JSON dans les requêtes
app.use(express.json());

// Exemple de route API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Bonjour, le monde!' });
});

app.use('/api', chat);

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

const express   = require ('express');
const mongoose  = require ('mongoose');
const port = 8080;

const app = express();

app.listen(port, () => {
  console.log('Serveur démarré sur le port ' + port);
});

// Middlewares
app.use(express.json()); 


//Middleware d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
   res.status(500).json({ message: 'Erreur serveur' });
});


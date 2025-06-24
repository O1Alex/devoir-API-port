const Catway = require ('../models/Catway');

//Obtenir TOUS les catways:
exports.getAllCatways = async (req, res) => {
  try {
    const catways = await Catway.find();
    res.json(catways);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Obtenir un catway par son ID:
exports.getCatwayById = async (req, res) => {
  try {
    const catway = await Catway.findById(req.params.id);
    if (!catway) return res.status(404).json({ message: 'Non trouvé' });
    res.json(catway);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//Créer un catway:
exports.createCatway = async (req, res) => {
  try {
    const newCatway = await Catway.create(req.body);
    res.status(201).json(newCatway);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//Modifier un catway:
exports.updateCatway = async (req, res) => {
  try {
    const updatedCatway = await Catway.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // renvoie le document mis à jour
    );
    res.json(updatedCatway);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Supprimer un catway:
exports.deleteCatway = async (req, res) => {
  try {
    await Catway.findByIdAndDelete(req.params.id);
    res.json({ message: 'Catway supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


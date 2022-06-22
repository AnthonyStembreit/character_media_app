const router = require('express').Router();
const {
  getCharacters,
  getSingleCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('../controllers/character_controller');

// /api/characters
router.route('/').get(getCharacters).post(createCharacter);

// /api/characters/:characterId
router.route('/:characterId').get(getSingleCharacter).put(updateCharacter).delete(deleteCharacter);


module.exports = router;
//create needs to create a UserCharacterMap set 
//needs get by franchise 

const { Character, User } = require('../models');

const CharacterController = {
    // get all Characters
    getCharacters: async (req, res) => {
        try {

            const dbCharacterData = await Character.find().sort({ createdAt: -1 });

            if (!dbCharacterData) {
                res.status(404).json({ message: "No characters found!" });
            };

            res.status(200).json(dbCharacterData);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    // get single Character by id
    getSingleCharacter: async (req, res) => {
        try {

            const dbCharacterData = await Character.findOne({ _id: req.params.characterId });

            if (!dbCharacterData) {
                res.status(404).json({ message: "No characters found!" });
            };

            res.status(200).json(dbCharacterData);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    // create a Character
    createCharacter: async (req, res) => {
        try {

            const dbCharacterData = await Character.create(req.body);
            if (!dbCharacterData) {
                res.status(500).json({ message: "Character was not created!" });
            };
            
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { characters: dbCharacterData._id } },
                { new: true }
                );
                
                console.log(dbUserData)
            if (!dbUserData) {
                res.status(404).json({ message: "User was not found!" });
            };

            res.status(200).json({ message: 'Character successfully created!' });
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    // update Character
    updateCharacter: async (req, res) => {
        try {

            const dbCharacterData = await Character.findOneAndUpdate({ _id: req.params.characterId }, { $set: req.body }, { runValidators: true, new: true });

            if (!dbCharacterData) {
                res.status(404).json({ message: "Character not found!" });
            };

            res.status(200).json(dbCharacterData);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },
    // delete Character
    deleteCharacter: async (req, res) => {
        try {
            const dbCharacterData = await Character.findOneAndRemove({ _id: req.params.characterId });

            if (!dbCharacterData) {
                res.status(404).json({ message: "Character was not found!" });
            };

            const dbUserData = await User.findOneAndUpdate(
                { characters: req.params.characterId },
                { $pull: { characters: req.params.characterId } },
                { new: true }
            );

            if (!dbUserData) {
                res.status(404).json({ message: "User was not found!" });
            };

            if (dbCharacterData && dbUserData) {
                res.status(200).json(dbUserData);
            } else {
                res.status(500).json({ message: "Something went wrong!" });
            };

        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        };
    }

    //   // add a reaction to a Character
    //   addReaction(req, res) {
    //     Character.findOneAndUpdate(
    //       { _id: req.params.characterId },
    //       { $addToSet: { reactions: req.body } },
    //       { runValidators: true, new: true }
    //     )
    //       .then((dbCharacterData) => {
    //         if (!dbCharacterData) {
    //           return res.status(404).json({ message: 'No Character with this id!' });
    //         }
    //         res.json(dbCharacterData);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //       });
    //   },
    //   // remove reaction from a Character
    //   removeReaction(req, res) {
    //     Character.findOneAndUpdate(
    //       { _id: req.params.characterId },
    //       { $pull: { reactions: { reactionId: req.params.reactionId } } },
    //       { runValidators: true, new: true }
    //     )
    //       .then((dbCharacterData) => {
    //         if (!dbCharacterData) {
    //           return res.status(404).json({ message: 'No Character with this id!' });
    //         }
    //         res.json(dbCharacterData);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //       });
    //   },
};

module.exports = CharacterController;

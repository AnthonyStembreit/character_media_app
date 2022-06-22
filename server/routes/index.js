const express = require('express');
const router = express.Router();
const userRoutes = require("./user-routes");
const authRoutes = require("./auth-routes");
const characterRoutes = require("./character_routes");

router.use("/character", characterRoutes)
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router
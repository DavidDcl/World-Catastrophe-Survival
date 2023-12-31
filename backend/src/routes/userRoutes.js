const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.browse);

router.get("/:id", userControllers.read);

module.exports = router;

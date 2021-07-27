const { getHome } = require("../controllers");

const router = require("express").Router();

router.get("/", getHome);

module.exports = router;

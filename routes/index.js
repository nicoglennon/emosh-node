const { Router } = require("express");

const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

router.post("/posts", controllers.createPost);

module.exports = router;

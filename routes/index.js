const { Router } = require("express");

const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

// user routes
router.get("/users", controllers.getAllUsers);
router.post("/users", controllers.createUser);
router.get("/users/:userId", controllers.getUserById);
router.put("/users/:userId", controllers.updateUser);
router.delete("/users/:userId", controllers.deleteUser);

// post routes
router.get("/posts", controllers.getAllPosts);
router.post("/posts", controllers.createPost);
router.get("/posts/:postId", controllers.getPostById);
router.put("/posts/:postId", controllers.updatePost);
router.delete("/posts/:postId", controllers.deletePost);

module.exports = router;

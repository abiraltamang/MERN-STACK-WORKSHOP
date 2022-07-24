const router = require("express").Router();

const users = {
  1: {
    name: "ram",
  },
  2: {
    name: "shyam",
  },
};

//GET api for fetching all users
router.get("/users", (req, res) => {
  return res.json(users);
});

router.get("/users/:id", (req, res) => {
  const user = users[req.params.id];
  return res.json(user);
});

// POST api for creating a new user
router.post("/users", (req, res) => {
  const { id, name } = req.body;
  users[id] = {
    name,
  };
  return res.json(users);
});

// PUT api for updating a user by id
router.put("/users/:id", (req, res) => {
  const { name } = req.body;
  users[req.params.id] = {
    name,
  };
  return res.json(users);
});

// DELETE api for deleting a user by id
router.delete("/users/:id", (req, res) => {
  delete users[req.params.id];
  return res.json(users);
});

module.exports = router;

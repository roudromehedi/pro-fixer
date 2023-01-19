const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();
module.exports = router;

//get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

//add posts
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    createdAt: new Date(),
  });
  res.status(201).send();
});

//delete posts
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://roudro:roudro114727@cluster0.wq88nqb.mongodb.net/vue_express",
    {
      useNewUrlParser: true,
    }
  );
  return client.db("vue_express").collection("posts");
}

module.exports = router;

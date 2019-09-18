const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {

  const router = express.Router();

  //INDEX
  router.get('/', (req, res) => {
    collection.find().toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(error);
      res.status(500);
      res.json({status: 500, error: err});
    })
  })

  //CREATE
  router.post('/', (req, res) => {
    const newData = req.body;
    collection.insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
    .catch((err) => {
      console.error(error);
      res.status(500);
      res.json({status: 500, error: err});
    })
  })

  //DELETE


  return router;
};

module.exports = createRouter;
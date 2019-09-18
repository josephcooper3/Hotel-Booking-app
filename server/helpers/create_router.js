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


  //DELETE


  return router;
};

module.exports = createRouter;
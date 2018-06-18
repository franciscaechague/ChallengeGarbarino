const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

let db = '';

MongoClient.connect('mongodb://localhost:27017/ChallengeGarbarino', function (err, client) {
  if (err) throw err;
  console.log("Connected successfully to mongo server");

  db = client.db('ChallengeGarbarino');

  insertDocuments(db);
});

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    db.collection('products').find().toArray((err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res);
    });
  });
};

const addNewProduct = (request) => {
  console.log(request);
  const req = JSON.parse(request.product);
  return new Promise((resolve, reject) => {
    db.collection('products').save(req, (err, res) => {
      if (err) return reject(err);
      resolve(res);
      console.log('saved to database');
    })
  })
};

const insertDocuments = function (db) {
  // Get the documents collection
  const collection = db.collection('products');
  // Insert some documents
  collection.insertMany([
    {
      "name": "televisor 32 LED",
      "price": 19999.99,
      "list_price": 29999.99,
      "brand": "SONY",
      "category_id": 12345
    },
    {
      "name": "televisor 50 4K",
      "price": 29999.99,
      "list_price": 39999.99,
      "brand": "LG",
      "category_id": 12345
    },
    {
      "name": "Microsoft OFFICE 365 PERSONAL",
      "price": 999.99,
      "list_price": 999.99,
      "brand": "Microsoft",
      "category_id": 123123,
      "virtual": true
    }
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
  });
};

app.get('/getAllProducts', (req, res) => getAllProducts().then(result => res.send(result)));

app.post('/addProduct', (req, res) => addNewProduct(req.body).then(result => res.send(result)));

app.listen(8080, () => console.log('Example app listening on port 8080!')
);

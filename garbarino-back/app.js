const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const getAllProducts = function(callback) {
    MongoClient.connect('mongodb://localhost:27017/ChallengeGarbarino', function (err, client) {
        if (err) throw err;
        console.log("Connected successfully to mongo server");

        const db = client.db('ChallengeGarbarino');

        insertDocuments(db, function() {
            client.close();
        });

        db.collection('products').find().toArray(function (err, result) {
            if (err) throw err;
            callback(result);
        })
    });
};


const insertDocuments = function(db, callback) {
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
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

app.get('/', (req, res) => getAllProducts(res.send))


app.listen(3000, () => console.log('Example app listening on port 3000!')
)

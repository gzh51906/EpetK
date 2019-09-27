

const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';

const assert = require('assert');
// 获取Mongo客户端


//连接mongoDB
     const dbNanem = 'sanmao'
   function getAll(callback) {
     MongoClient.connect(url,  (err, client)=>{
            // err:连接失败时的错误信息，默认为null
            // client：连接数据库的客户端
            if(err) {
                    console.log('链接失败');
            }
            const db = client.db(dbNanem)
          const collection = db.collection('yiji');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);

    callback(docs)
  });
 
                    client.close();
    });

    }
  exports.getAll = getAll;





   function getAll2(callback) {
     MongoClient.connect(url,  (err, client)=>{
            // err:连接失败时的错误信息，默认为null
            // client：连接数据库的客户端
            if(err) {
                    console.log('链接失败');
            }

            const db = client.db(dbNanem)
          const collection = db.collection('erji');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);

    callback(docs)
  });
 
                    client.close();
    });

    }
  exports.getAll2 = getAll2;








// getAll(function (arr) {
//     console.log(arr);
// })
   

            // 连接具体一个数据库，无则自动创建
            // let db = client.db(DBname);
                  
            // resolve({client,db});
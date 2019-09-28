const express = require('express')
const Router = express.Router()

const {
    insert,
    remove,
    find,
    update
} = require('../db/mongo');
const {
    formatData,
    token
} = require('../utils');


//拿到所有商品
Router.get('/all', async (req, res) => {

    let data = await find('yiji', {
    });
    res.send(formatData({
    data
    }))

})

//jia
Router.post('/change', async (req, res) => {
    let {
    catgoryName
    } = req.body;

    try {
      if(catgoryName){
        insert('yiji', {catgoryName}  )
      }
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})

//----
Router.post('/:id', (req, res) => {console.log('k');

    let {
        id
    } = req.params;
    let {
        catgoryName  
    } = req.body;
console.log(catgoryName  ,req.body);

try{
    if(catgoryName){
        update('yiji', {
                _id: id
            }, {
                $set: {
                    title: catgoryName  
                }
            })
    }
  res.send(formatData()) 
}catch (err) {
        res.send(formatData({
            code: 0
        }))
     }
})




module.exports = Router;
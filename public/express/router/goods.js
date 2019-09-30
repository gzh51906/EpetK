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
Router.get('/role', async (req, res) => {

    let data = await find('role', {
    });
    res.send(formatData({
    data
    }))
})




Router.get('/all', async (req, res) => {

    let data = await find('yiji', {
    });
    res.send(formatData({
    data
    }))

})

//增加
Router.post('/change', async (req, res) => {
    let {
    catgoryName
    } = req.body;
    
    try {
      if(catgoryName){
          insert('yiji', {title:catgoryName})
      }
      
        res.send(formatData())
    } catch (err) {

        res.send(formatData({
            code: 0
        }))
    }
})

// 删除

Router.post('/del/:id', (req, res) => {
let {
        id
    } = req.params;
    let {
        parentId  
    } = req.body;
    try {
        remove('yiji', {
            _id: parentId
        })
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }

})

//----修改
Router.post('/xiugai/:id', (req, res) => {

    let {
        id
    } = req.params;
    let {
        catgoryName  
    } = req.body;

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

// 查找
Router.post('/searchlist',async (req, res) => {
    console.log('123');
//  let {
//         id
//     } = req.params;
    let {
        title  
    } = req.body;
    console.log("1",req.body);

try{
    let data
    if(title){
      data=await find('yiji', {
            title
            })
           
    }
    //
  res.send(formatData( {data}))  
}catch (err) {
        res.send(formatData({
            code: 0
        }))
     }

})




module.exports = Router;
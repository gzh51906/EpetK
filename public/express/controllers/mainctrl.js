
var db = require("../models/db");


    exports.showIndex = function (req,res) {
        db.getAll(function (arr) {
            console.log(arr);
    res.send(
        {
             "arr":arr
        }
    );


        })


    };


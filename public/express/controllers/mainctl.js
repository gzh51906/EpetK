
var db = require("../models/db");

    exports.showIndex2 = function (req,res) {
        db.getAll2(function (arr) {
            console.log(arr);
    res.send(
        {
             "arr":arr
        }
    );


        })


    };


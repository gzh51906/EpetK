var express = require('express')
var cors = require('cors');
var  app = express();
app.use(cors());
const Router = express.Router()
    


var mainctrl = require('./controllers/mainctrl');
// var mainctrl2 = require('./controllers/mainctl');

 app.get("/",mainctrl.showIndex)
//  app.get("/:id",mainctrl2.showIndex2)
app.listen(5000);

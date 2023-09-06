let express = require('express');
let app = express();
absolutepath = __dirname +'/views/index.html'
app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req, res){
  res.sendFile(absolutepath);
})
console.log("Hello World")



































 module.exports = app;

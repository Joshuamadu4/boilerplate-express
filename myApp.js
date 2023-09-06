let express = require('express');
let app = express();
absolutepath = __dirname +'/views/index.html'
app.use('/public', express.static(__dirname + '/public'))
app.get('/', function(req, res){
  res.sendFile(absolutepath);
})

app.get("/json", function(req, res){
  res.json({
    message: "Hello json"
  });
});
app.use((req,res,next) => {
  let {method, path, ip} = req;
    console.log(method +" "+path+"-"+ip)
  next();
})
console.log("Hello World")



































 module.exports = app;

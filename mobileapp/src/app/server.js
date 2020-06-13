var express = require('express');
var app = express();
var body_parser = require('body-parser');
​
var http = require('https');
​
app.use(body_parser.json());
​
var myLogModule = require('./Log.js');
​
myLogModule.info('Node.js started');
var login = [{"userid":"jey" , "password":"test"},{"userid":"jey" , "password":"test"}];
​
var file = require('fs');
​
​
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
    myLogModule.info("Example app listening at http://%s:%s" + host + port);
​
    myLogModule.warning('my log is warning');
 })
 
app.get('/whoiam/:name', function (req, res) {
    // First read existing users.
​
    var name = req.params.name;
        var output;
       console.log( name );
       if (name == 'jey') {
           output = name + " is NEC Alumni" ;
       } else {
         output = name + " is current student" ;
       }
       res.end( JSON.stringify(output));
    });
   
app.get('/student',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
​
  const data = file.readFileSync('student.json');
  const dataStr = JSON.parse(data);
  res.end( JSON.stringify(dataStr));
​
});
​
app.get('/name',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
​
  const myame= "jey";
  res.end( JSON.stringify(myame));
​
});
app.get('/studentlsit',function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
​
  const stlist = [{"name":"jey","department":"ECE","section":"A"},{"name":"John","department":"ECE","section":"A"}]
  res.end( JSON.stringify(stlist));
});
app.get('/allchanel' ,  function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
​
var channellist = [];
​
  const init = {
    host: 'slack.com',
    path: '/api/channels.list?token=xoxb-514915302310-1148002808389-L8KTQHajr4z3IFi3e5ynXigp',
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const callback =  function(response) {
     var result = Buffer.alloc(0);
    response.on('data', function(chunk) {
      result = Buffer.concat([result, chunk]);
    });
    
    response.on('end', function() {
     
      var chanel = JSON.parse(result);
      var poncahnnel = chanel['channels'];
      var farray  = chanel.channels[0];
      
      //console.log('frist cahnnel from lsit' , chanel.channels[0]);
/* 
      for (let index = 0; index < poncahnnel.length; index++) {
        const element = poncahnnel[index];
        var id = element.id;
        var name = element.name;
        console.log('id' , id);
        console.log('name' ,name);
      }*/
      
     poncahnnel.forEach(element => {
       var jsonData = {}; 
       var id = element.id;
        var name = element.name;
        //console.log('id' , id);
        //console.log('name' ,name);
        jsonData['id'] = element.id;
        jsonData['name'] = element.name;
        channellist.push(jsonData);
​
    });
    res.end( JSON.stringify(channellist));
    console.log('name' ,channellist);
​
    });
  };
  
  const request = http.request(init, callback);
  request.end();
 
​
​
});
​
app.post('/add',function(req,res){
​
  const student  = req.body;
  console.log('Adding new student: ', student);
​
  res.end( JSON.stringify("students updated successfully"));
​
});
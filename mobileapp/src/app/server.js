var express = require('express');
var app = express();
var body_parser = require('body-parser');
var http = require('https');
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
app.get('/allchanel' ,  function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
var channellist = [];
  const init = {
    host: 'slack.com',
    path: 'https://slack.com/api/channels.list?token=xoxb-514915302310-1148002808389-TYN9qxbqMwaNQrMgp1O4f1bZ',
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
    });
    res.end( JSON.stringify(channellist));
    console.log('name' ,channellist);
    });
  };
  const request = http.request(init, callback);
  request.end();
});

app.get('/channeldetail/:id' ,  function(req,res){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods","PUT,GET,DELETE,PATCH")
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Origin,Accept,Authorization')
  var id = req.params.id;
  var channeldetail = [];
  var chanel
  const init = {
    host: 'slack.com',
    path: 'https://slack.com/api/channels.info?token=xoxb-514915302310-1148002808389-TYN9qxbqMwaNQrMgp1O4f1bZ&channel='+id,
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
       chanel = JSON.parse(result);
      var poncahnnel = chanel['name'];
      console.log(channeldetail)
     // var farray  = chanel.channels[0];
      //console.log('frist cahnnel from lsit' , chanel.channels[0]);
/*
      for (let index = 0; index < poncahnnel.length; index++) {
        const element = poncahnnel[index];
        var id = element.id;
        var name = element.name;
        console.log('id' , id);
        console.log('name' ,name);
      }*/
     /*poncahnnel.forEach(element => {
       var jsonData = {};
       var id = element.id;
        var name = element.name;
        //console.log('id' , id);
        //console.log('name' ,name);
        jsonData['id'] = element.id;
        jsonData['name'] = element.name;
        channeldetail.push(jsonData);
    });*/
    res.end( JSON.stringify(channeldetail));
    console.log('name' ,channeldetail);
    });
  };
  const request = http.request(init, callback);
  request.end();
});
/*
  This file configures the express server which serves our index.html
*/

 /* var express = require('express');
var path = require('path');
var open = require ('open');  // this will be used to open the application in the browser

var port = 3000;
Above all are in  ES5 format. So now we are using babel , so we can use import stuff i.e. ES6 format of JS.
*/

import express from 'express';
import path from 'path';
import open from 'open';  // this will be used to open the application in the browser
import webpack from 'webpack';
import config from '../webpack.config.dev';


/* eslint-disable no-console */
const port = 3000;
const app = express ();  // creating an instance of express
const compiler = webpack(config);  // Now we have the reference to the webpack compiler

app.use(require('webpack-dev-middleware')(compiler,{
   noInfo: true,
   publicPath: config.output.publicPath
}));   // This is just letting express know to handle the bundle created by webpack.

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname,'../src/index.html')); // index file should be in the sr folder which is at the root.
});

app.listen(port,function(err){
    if (err)
    {
        console.log(err);   
     }
     else
     {
         open('http://localhost:'+ port);
     }
});
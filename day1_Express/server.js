/**
 * constant variable declaration
 * const [contantsName]
 * Importing express from dependencies using require
 */
 const express = require('express')
 /**
  * Initilizing express app
  * calling dependency function and storing to a contant [app]
  */
 const app = express();
 
 // fetch request data and then sends to request.data
 app.use(express.json())
 // declaration of object { key: value, key2: value2}
 const responseData = {
     success: true,
     message: "Successfully fetched data",
     data: []
 }
 function handleGetRequest(request, response) {
     // response.send("Welcome! to the web Workshop");
     response.json(responseData);
     response.end()
 }
 
 function handlePostRequest(req,res){
     console.log(req.body)
     res.json(req.body);
 }
 
 /**
  * First parameter route name, second paramater function
  */
 app.get('/', handleGetRequest)
 app.post('/post', handlePostRequest)
 
 
 
 /**
  * Listening app on port 3000, 3001, 3002, 8000
  * google.com => http port 80, https port 443, different services (certian port allocated)
  * github.com
  */
 function appInitialized(){
     console.log("App is running on http://localhost:3000. Click to open it.")
 }
 app.listen(4000, appInitialized)
 
 
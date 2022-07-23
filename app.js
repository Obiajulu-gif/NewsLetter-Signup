const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
// API Key
// f0253f10d70da7b254887328b12cc191-us14

// parsing the data to our server
app.use(bodyParser.urlencoded({extended: true}));

// this is a folder that helps us to store all our static files so that it can be render in the web page
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})
app.post("/", (req, res) => {
  // getting data from the form
  firstName = req.body.firstName
  lastName = req.body.lastName
  email = req.body.email

  console.log(firstName, lastName,email);
// // ----------------------------------API Code for Mail Chimp--------------------------//
//   // the data to be supply must be an array of object i.e. it must be a list and a nested dictionary
//   var data ={
//     members: [
//       {email_address: email,
//       status: "subscribed",
//       merge_fields:{
//         FNAME:"",
//         LNAME:""
//       }
//       }
//     ]
//   }
//   // we are going to convert our javascript object to real live JSON Object
//   var jsondata = JSON.stringify(data)
//   var options ={
//     url:"",// we are going to add the url and the list id to this
//     method:"POST",
//     headers:{
//       "Authorization": "OkoyEmmanuel f0253f10d70da7b254887328b12cc191-us14"
//     },
//     body: jsondata
//   }
//
//   request(options, (error, response, body) => {
//     if (error) {
//       res.send("There was an error with signing up, please try again")
//       console.log(error);
//     }else {
//       if (response.statusCode === 200) {
//           res.send("sucessfully subscribed")
//        }else {
//          res.send("There was an error with signing up, pleas try again")
//      };
//     }
//   })
res.sendFile(__dirname + "/failure.html")
})
// --------------------------------------------------------------------------//
app.post("/failure", (req, res) => {
  res.redirect("/")
})
// locally port(i.e the one we create on our computer) listen to port = 3000
// we create a dynamic port for heroku to choose for us by tapping into the
// port = process.env.PORT
var localPort = 3000
var port = process.env.PORT
// it listen to online port or our locally created port
app.listen(port || localPort, () => {
  console.log("Server is listen on Port 3000");
})

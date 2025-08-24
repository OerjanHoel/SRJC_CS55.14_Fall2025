// Week 1 assignment 
//Create a simnple http node.js 
// Create different response depending on URL
let myhttp = require('http');
// Start server
let myserver = myhttp.createServer(
  function (myrequest, myresponse) {
    console.log(myrequest.url);
    // Responces depending on URL
    let mytext;
    if (myrequest.url === "/new_here") {
      mytext = "Have we met before? Try going to /class";
    } else {
      mytext = "Have you tried adding /new_here at the end of the URL?";
    }
    if (myrequest.url === "/class") {
      mytext = "Nice to meet you! Check out /secret";
    }
    if (myrequest.url === "/secret") {
      mytext = "JavaScript is cool and rewarding when you figure things out!";
    }
    // writeHead() creates an http response header, http status code 200 OK + the content type
    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    myresponse.end(mytext);
  }
);
// tcp listening port .listen takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0) 
// 127.0.0.1 = Local computer address 
myserver.listen(8080, "127.0.0.1");

console.log("server has started");
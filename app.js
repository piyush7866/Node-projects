const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our Home page");
  }
  if (req.url === "/about") {
    res.end("This is our About page");
  }
  res.end(`
  <h1> Oops</h1>
    <p> The page you are looking for is not present at the moment </p>
    <a href='/'> Back to home </a>  
  
  `);
});
server.listen("3000");

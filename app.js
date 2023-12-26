const { rejects } = require("assert");
const http = require("http");
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(items));
const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.end(`<h1>this is the Home page</h1>
      <a href="/about"><h1>About</h1></a>`);
      break;
    case "/about":
      res.end(`<h1>this is the About Page </h1>
      <a href="/">Home</a>`);
      break;
    default:
      res.end(`<h1>Opps</h1>`);
      break;
  }
});

server.listen(3000);

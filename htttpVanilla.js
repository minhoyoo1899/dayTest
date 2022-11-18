const http = require("http");
const fs = require("fs");
const path = require("path");

const sever = http.createServer((req, res) => {
  //closure 함수를 이용하여 반복사용된 것들을 하나의 함수로 묶었다.
  function staticRoute(needFile, statusCodeNumber, contentType) {
    const readData = fs.readFileSync(needFile, (err) => {
      if (err) throw err;
    });
    res.writeHead(statusCodeNumber, { "Content-Type": contentType });
    res.write(readData);
    res.end();
  }

  if (req.method === "GET") {
    let getSting = req.url;
    //if문 대신 switch문을 써보았음!
    switch (getSting) {
      case "/":
        console.log("HTML");

        staticRoute("./index.html", 200, "text/html");
        // const test = fs.readFileSync("./index.html", (err) => {
        //   if (err) throw err;
        // });
        // res.writeHead(200, { "content-Type": "text/html" });
        // res.write(test);
        // res.end();

        break;
      case "/style.css":
        console.log("CSS");
        staticRoute("./style.css", 200, "text/css");
        // const css = fs.readFileSync("./style.css", (err) => {
        //   if (err) throw err;
        // });
        // res.writeHead(200, { "content-Type": "text/css" });
        // res.write(css);
        // res.end();

        break;

      case "/event.js":
        console.log("Javascript");
        staticRoute("./event.js", 200, "text/javascript");
        // const scrpit = fs.readFileSync("./event.js", (err) => {
        //   if (err) throw err;
        // });
        // res.writeHead(200, { "content-Type": "text/javascript" });
        // res.write(scrpit);
        // res.end();

        break;
    }
  }
});

sever.listen(5678, (err) => {
  console.log("server listening on");
  if (err) throw err;
});
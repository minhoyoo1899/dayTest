const fs = require('fs'); // 파일시스템 파일을 불러와 CRUD에 사용
const http = require('http'); // 네트워크 통신 


const server = http.createServer((req, res) => { 
  const index = fs.readFileSync('./index.html',"utf-8", (err) => {
    if (err) throw err;
  });

  const css = fs.readFileSync('./index.css', (err) => {
    if (err) throw err;
  });

  const js = fs.readFileSync('./index.js',"utf-8",(err) => {
    if (err) throw err;
  });
  const jsA = fs.readFileSync('./a.js',"utf-8",(err) => {
    if (err) throw err;
  });
  const jsB = fs.readFileSync('./b.js',"utf-8",(err) => {
    if (err) throw err;
  });

  // const jss = fs.readFileSync('./index.js',"utf-8", (err) => {
  //   if (err) throw err;
  // });

  //console.log(jss); // dkalfkjdfkalfjkdasf 
  // dkjflakjflakjf + adfjklafkjlasdkjflsakfj -> 

  if (req.method === 'GET') {
    const url = req.url
    if (url === "/") {
      const setHtml = index.replace('<돼지>', './index.js').replace('<돼지02>', './a.js').replace('<돼지03>', './b.js');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      //res.setHeader('Content-Type', 'text/css');
      //res.setHeader('Content-Type', 'text/javascript');
      res.end(setHtml);
    } else if (url === "/index.css") {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
      res.end(css);
    } else if (url === "/index.js") {
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.end(js);
    } else if (url === "/updatescript") {
      //fs.mkdir("minho", (err) => console.log(err));
      //console.log("a");
      const tempJS = js.replace('//돼지//', "//유민호//");      
      fs.writeFile('index02.js', tempJS, 'utf8', function(err) {
        console.log('비동기적 파일 쓰기 완료');
      });
     
      const tempHTML = index.replace('<돼지>', './index02.js');
      console.log(tempHTML);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(tempHTML);     
    } if (url === "/index02.js") {
      const jss = fs.readFileSync('./index02.js', "utf-8", (err) => {
        if (err) throw err;
      });
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.end(jss);
    } else if (url === '/a.js') {
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.end(jsA);
    } else if (url === '/b.js') {
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.end(jsB);
    } else if (url === '/combine') {
      const datArr = [];
      const jsC = jsA + jsB;
      fs.writeFile("c.js", jsC, "utf8", function (err) {
        console.log("비동기적 파일 쓰기 완료 c");
        const jsDDat = 'console.log("ddd")';
        fs.writeFile("d.js", jsDDat, "utf8", function (err) {
          console.log("비동기적 파일 쓰기 완료 d");
          const jsD = fs.readFileSync("./d.js", "utf-8", (err) => {
            if (err) throw err;
          });
          datArr.push(jsD);
        });
        const jsEDat = 'console.log("eee")';
        fs.writeFile("e.js", jsEDat, "utf8", function (err) {
          console.log("비동기적 파일 쓰기 완료 e");
          const jsE = fs.readFileSync("./e.js", "utf-8", (err) => {
            if (err) throw err;
          });
          datArr.push(jsE);
          // console.log(datArr);
          const jsF = datArr.join(';');
          // console.log('f');
          // console.log(jsF);

          fs.writeFile("f.js", jsF, "utf8", function (err) {
            console.log("비동기적 파일 쓰기 완료 f");
            const setHtml = index.replace("<돼지>", "./index.js").replace("<돼지02>", "./c.js").replace("<돼지03>", "./f.js");
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.end(setHtml);
          });          
        });
      }); 
      
    } else if (url === '/f.js') { 
        const jsF = fs.readFileSync('./f.js', "utf-8", (err) => {
        if (err) throw err;
      });
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      res.end(jsF);
    } 
  
  } else if (req.method === 'POST') {
    let body = "";

    req.on('data', (data) => { 
      body += data;
      data = data.toString('utf-8');
      console.log(data, 'this is first event');
    });

    req.on('end', () => { 
      console.log(body, "this is last event");
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(index);
    });
  }
});

server.listen(5588, () => {
  console.log('server running');
});

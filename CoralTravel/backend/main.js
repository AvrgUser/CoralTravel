const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const { type } = require('os');

const server = http.createServer((req, res) => {
  let path = __dirname.slice(0, __dirname.length-'\\backend'.length)
  let ctype = 'text/html'

  if (req.url === '/') {
    
    console.log(path)
    path+='\\dist\\coral-travel\\index.html'
    }
   else if(url!=undefined){
    
    if(req.url.includes('.js')){
      console.log('type set')
      ctype = 'text/javascript'
    }
    else if(req.url.includes('.css')){
      console.log('type set')
      ctype = 'text/stylesheet'
    }
    if(req.url.includes('.jpg')){
      console.log('type set')
      ctype = 'image/jpeg'
      
    }
    path+='\\dist\\coral-travel\\'+req.url.slice(1, req.url.length)
    console.log(path)
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
      console.log('request done\n'+err.message)
    } else {
      res.writeHead(200, {'Content-Type': ctype});
      res.end(data)
      console.log('request done', ctype)
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
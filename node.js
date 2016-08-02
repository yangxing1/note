var http = require('http');
var fs = require('fs');
var server = new http.Server();
server.listen(8080);
console.log('OK');

server.on('request', function (req, res) {
  var url = require('url').parse(req.url);
  console.log(url.pathname);
  if (url.pathname.indexOf('public') !== -1) {
    if (url.pathname.indexOf('header') !== -1) {
      res_means('header.html', req, res);
    } else if (url.pathname.indexOf('footer') !== -1) {
      res_means('footer.html', req, res);
    } else if (url.pathname.indexOf('catalog') !== -1) {
      res_means('catalog.html', req, res);
    } else if (url.pathname.indexOf('comment') !== -1) {
      res_means('comment.html', req, res);
    } else if (url.pathname.indexOf('secondary') !== -1) {
      res_means('secondary.html', req, res);
    }
  }

  else if (url.pathname.indexOf('data') !== -1) {
    if (url.pathname.indexOf('catalog') !== -1) {
      res_means('data.json', req, res);  
    } else if (url.pathname.indexOf('comment') !== -1) {
      res_means('comment.json', req, res);
    }
  }

  else if (url.pathname === '/') {
    res_means('index.html', req, res);
  }
  
  else {
    res_means(url.pathname.substring(1), req, res);
  }
});


function res_means(filename, req, res) {
  var type = '';
  switch(filename.substring(filename.lastIndexOf('.') + 1)) {
    case 'html':
    case 'htm':   type = 'text/html; charset=UTF-8'; break;
    case 'js':    type = 'application/javascript; charset=UTF-8'; break;
    case 'css':   type = 'text/css; charset=UTF-8'; break;
    case 'txt':   type = 'text/plain; charset=UTF-8'; break;
    default:       type = 'application/octet-stream'; break;
  }
  fs.readFile(filename, function (err, content) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/plain; charset=UTF-8"});
      res.end(err.message);
    } else {
      res.writeHead(200, {"Content-Type": type});
      res.end(content);
    }
  });
}
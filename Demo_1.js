const http = require('http');
const fs = require('fs');
const filePath = './coap.pdf';

http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile(filePath, function(err, data) {
      if (err) {
        res.statusCode = 500;
        res.end();
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Authorization': 'Basic b2JqLnVzZXJuYW110m9iai5wYXNzd29yZA==',
        'version': 'your_version'
      });
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(8080, () => {
  console.log('Server running on port 8080');
});

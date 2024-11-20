const http = require('http');

const hostname = '0.0.0.0';
const port = '16800';

httpd = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Docker Practice\n');
});

httpd.listen(port, hostname, function(){
    console.log('server start');
});

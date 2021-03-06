var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var mapping = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "jpg": "image/jpeg",
    "jpeg": "image/jpeg",
    "png": "image/png",
    "woff2": "font/woff2",
    "woff": "font/woff",
    "svg": "image/svg+xml"
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true);

    //var queries = address.query;

    var fileName = parsedUrl.pathname; // /default.html

    //var search = parsedUrl.search; // ?year=2017&month=february
    sendFile(response, fileName === "/" ? "index.html" : fileName);

})

function sendFile(response, fileName) {
    var ext = path.extname(fileName).slice(1);
    var contentType = mapping[ext];
    if (/image/.test(contentType) || /font/.test(contentType))
        response.setHeader('Cache-Control', 'public, max-age=31557600');
    var filePath = path.join(__dirname, fileName);
    var readStream = fs.createReadStream(filePath);
    response.writeHead(200, mapping[ext]);
    readStream.pipe(response);
}

var port = 34445;

server.listen(port, function(err) {
    console.log(err);
});
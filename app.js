var express = require('express');
var path = require('path');
var port = process.env.PORT || 8085;
var serveStatic = require('serve-static');
const app = express();

/********* Allow cross origin requests *******************************/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json, Header-Custom-TizenCORS"
    );
    next();
});

// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'static')));
app.use('/dist', serveStatic(path.join(__dirname, 'dist')));
app.use('/static', serveStatic(path.join(__dirname, 'static')));

app.use('/*', express.static(__dirname + '/', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['htm', 'html', 'ico'],
    index: '/static/index.html',
    lastModified: true,
    maxAge: '1d',
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.header('Cache-Control', 'public, max-age=1d');
    }
}));

app.listen(port);
console.log('server started in env ' + process.env.NODE_ENV + ' at ' + port);
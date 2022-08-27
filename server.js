const
  express = require('express'),
  serveStatic = require('serve-static'),
  path = require('path'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000

//const app = express()

//app.use(history())
//app.use(serveStatic(__dirname + '/dist/spa'))
//app.listen(port)

const app = express()
app.use(history())
app.use(serveStatic(__dirname + '/dist/spa'))
app.get('/*', function(req,res) {
    //res.sendFile(path.join(__dirname+'/dist/spa/index.html'));
    res.sendFile(path.join(__dirname, 'dist/quasar-app', 'index.html'));
});
app.listen(port);
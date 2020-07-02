const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('app'));

app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//     console.log(req.method, req.url, res.statusCode)
//     next()
// })

// Routes
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


app.listen(PORT, () => console.log("App listening on PORT " + PORT));
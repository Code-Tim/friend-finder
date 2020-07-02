// DEPENDENCIES===========================================================
// Path package to get path to file
var path = require('path');

// ROUTES =================================================================
// Sends html file via express app
module.exports = function (app) {

    app.get('/css/style.css', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/css/style.css'));
    });

    app.get('/img/:name', function (req, res) {
        res.sendFile(path.join(__dirname + '/../photos'));
    });

    // HTML GET requests for when user visits home/survey html page
    app.get('/home', function (req, res) {
        //responds with path  [directory name, path to survey.html]
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //Default - No matches
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    })
}
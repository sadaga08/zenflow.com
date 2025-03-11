const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

// Static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use('/images', express.static('public/images'));

// View engine
app.set("view engine", "ejs");
app.set("views", "views");
//connexion of database
const connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zen-login'
});

connexion.connect(function (error) {
    if (error) {
        console.log('Erreur de connexion à MySQL :', error);
    } else {
        console.log('MySQL connecté avec succès...');
    }
});

// Router files
app.get("/login", function (req, res) {
    res.render("login"); 
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});

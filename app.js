const express = require("express");
const mysql = require("mysql");
const bodyparser=require("body-parser");
const app = express();
const port = 3000;
//middelwear pour récupérer les donnée
app.use(bodyparser.urlencoded({extended:true}));
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
        console.log(error);
    } else {
        console.log('MySQL connecté avec succès...');
    }
});
//creation de la table 1
const sql = "CREATE TABLE IF NOT EXISTS login(id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(75),password VARCHAR(80),confirm VARCHAR(80))"
connexion.query(sql,function (error,result) {
    const sql = "INSERT INTO login (email,password,confirm)VALUES(?,?,?)"
    if (error) {
        console.log(error);
    } else {
        console.log('table créer...');
    }
});
// Insertion des données dans login 
app.post('/login', function (req, res) {
    const { email, password, confirm } = req.body;//récupérer les donnée de formulaire
    const insert1 = "INSERT INTO login (email, password, confirm) VALUES (?, ?, ?)";//insertion des données de formulaire
    connexion.query(insert1, [email, password, confirm], function (error, result) {//stackage de donnée récupérer
        if (error) {
            console.log(error);
            return res.send("Une erreur s'est produite lors de l'inscription.");
        } else {
            console.log('Utilisateur ajouté avec succès dans login.');
            return res.redirect("/login");
        }
    });
});


//creation de la table 2
const sql1 = "CREATE TABLE IF NOT EXISTS signup(id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(75) NOT NULL, password VARCHAR(75) NOT NULL)";
connexion.query(sql1,function (error,result) {

    if (error) {
        console.log(error);
    } else {
        console.log('table signup créer avec surcès...');
        
    }
});
//insertion  des donnée dans signup
app.post('/page-main', function (req, res) {
    const { email, password } = req.body;
    const insert2 = "INSERT INTO signup(email, password) VALUES(?, ?)";
    connexion.query(insert2, [email, password], function (error, result) {
        if (error) {
            console.log(error);
            return res.send("Une erreur s'est produite lors de l'inscription.");
        } else {
            console.log("Utilisateur ajouté avec succès dans signup.");
            return res.redirect('/page-main');
        }
    });
});




// Router files
app.get("/login", function (req, res) {
    res.render("login"); 
});
app.get("/page-main", function (req, res) {
    res.render("page-main"); 
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
const express = require("express");

const mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection({
    host: "localhost",
    database: "practicas",
    user: "root",
    password: ""

})
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", function(req,res){
    res.render("registro");
});

app.post("/validar", function(req,res){
    const datos = req.body;

    let usuario = datos.id_usu;
    let nombre = datos.nom;
    let apellido = datos.apell;
    let correo = datos.correo;
    let user = datos.user;
    let password = datos.pass;
    let rol_id = datos.rol;


    let registrar = "INSERT INTO  usuario (id_usuario, nombre, apellido, correo, user, password, rol_id) VALUES ('"+usuario+"', '"+nombre+"',  '"+apellido+"', '"+correo+"', '"+user+"', '"+password+"', '"+rol_id+"')";
    conexion.query(registrar, function(error){

        if(error){
            throw error;
        }else{
            console.log("datos almacenados correctamente");
        }
    });
    
    

});

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});
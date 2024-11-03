//Importar express - COMMONJS
const express = require('express')
const path = require('path')

//Inicializar express
const app = express ()

//Servimos los archivos estáticos de la carpeta (Para usar estilos)
app.use(express.static(path.join(__dirname, 'src')));

//RUTA
//Inicial
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'src','index.html'));
});
//Integrantes
app.get('/integrantes',(req, res)=>{
    res.json([
        {
            id:1,
            nombre:"Paul",
            apellido:"Cabrera",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:2,
            nombre:"Mireya",
            apellido:"García",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:3,
            nombre:"Mateo",
            apellido:"Torres",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:4,
            nombre:"Ariel",
            apellido:"Catucuamba",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:5,
            nombre:"Mathís",
            apellido:"Terán",
            edad:21,
            carrera:"Desarrollo de Software"
        },
        {
            id:6,
            nombre:"Anthony",
            apellido:"Astudillo",
            edad:21,
            carrera:"Desarrollo de Software"
        }
    ])
});

// Ruta /integrantes/:id
app.get('/integrantes/:id',(req, res)=>{
    const {id} = req.params;
    console.log(typeof(id));
    const integrantes=[
        {
            id:1,
            nombre:"Paul",
            apellido:"Cabrera",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:2,
            nombre:"Mireya",
            apellido:"García",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:3,
            nombre:"Mateo",
            apellido:"Torres",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:4,
            nombre:"Ariel",
            apellido:"Catucuamba",
            edad:20,
            carrera:"Desarrollo de Software"
        },
        {
            id:5,
            nombre:"Mathías",
            apellido:"Terán",
            edad:21,
            carrera:"Desarrollo de Software"
        },
        {
            id:6,
            nombre:"Anthony",
            apellido:"Astudillo",
            edad:21,
            carrera:"Desarrollo de Software"
        }
    ];

    const response = integrantes.find((integrantes)=>integrantes.id === +id);
    response ? res.send(response) : res.send("Id not found");
})


//Nosotros
app.get('/nosotros',(req, res)=>{
    res.sendFile(path.join(__dirname,'src','nosotros.html'));
});

//Productos
app.get('/productos',(req, res)=>{
    res.sendFile(path.join(__dirname,'src','productos.html'));
});

app.listen(3000);
console.log("Server OK");
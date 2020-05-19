const express = require('express'),
    app = express(),
    path = require('path'), //Path es uno de los modulos de Node
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

// USO DE MIDDLEWARES
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());
app.use(cookieSession({secret: "I'm a secret"}));

    // creamos las rutas de la aplicación
    // index
    app.get('/', (req, res)=>{
        res.sendFile(`${__dirname}/views/index.html`);
    });
    // 
    app.get('/about_me', (req, res)=>{
        res.sendFile(`${__dirname}/views/about_me.html`);
    });
    
    app.get('/experience', (req, res)=>{
        res.sendFile(`${__dirname}/views/experience.html`);
    });
    
    app.get('/education', (req, res)=>{
        res.sendFile(`${__dirname}/views/education.html`);
    });
    
    app.get('/languages', (req, res)=>{
        res.sendFile(`${__dirname}/views/languages.html`);
    });
    
    app.get('/skills', (req, res)=>{
        res.sendFile(`${__dirname}/views/skills.html`);
    });




    // cookies , VISITAS
    app.get('/visita',(req, res)=>{
    
        req.session.visitas || (req.session.visitas = 0);
      
         let n = req.session.visitas++;
         res.end(`<h1>Visita # ${n}</h1>`);
         console.log(n)
     });

app.listen(8080);
console.log('Conexion ok');
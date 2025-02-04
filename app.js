const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const { db } = require('./BackEnd/database/db');
const {readdirSync} = require('fs')
//const PORT = process.env.PORT
const path = require('path');
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
const routesPath = path.join(__dirname, './BackEnd/routes'); // Construct absolute path 
readdirSync(routesPath).map((routeFile) => {
    const routePath = path.join(routesPath, routeFile);
    const route = require(routePath);
    app.use('/api/v1', route);
});

app.get('/',(req,res)=>{
    res.send('Hello world')
})

const server = () => {
    db()
    app.listen(PORT,() =>{
        console.log('listening to port:',PORT)
    })

}
 
server()  

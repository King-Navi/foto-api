const express = require("express")
const app = express()

app.use(express.json())

app.use("/client", express.static("public"))

if (require.main == module) {
    const PORT = process.env || 8080
    app.listen(PORT, () => console.log("Servidor corriendo"))
}


//Paso 1 npm init -y 
//Paso 2 npm install express
//Paso 3 proyecto de HTML, CSS y Scripts 
//Paso 4 Crear archivo app.js

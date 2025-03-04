require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Servir imágenes estáticamente

/* Conexión a MongoDB */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Error de conexión", err));

// Importar rutas
const photoRoutes = require("./routes/photoRoutes");
app.use("/api/photos", photoRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

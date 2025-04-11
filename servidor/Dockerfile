# Usa una imagen base de Node para producción
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Exponemos el puerto donde corre el servidor (ajusta según tu configuración)
EXPOSE 3000

# Comando para arrancar la aplicación (asegúrate de que este comando existe en tu package.json)
CMD ["npm", "start"]

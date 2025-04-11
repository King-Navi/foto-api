FROM nginx:alpine

# Copia todo el contenido de la carpeta actual a la ruta donde Nginx lo servirá
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

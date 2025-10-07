# backend/Dockerfile

# Usa una imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install 

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto (ajusta si usas otro en .env)
EXPOSE 3000

# Comando para arrancar el backend
CMD [ "npm", "run", "dev", "--", "--host", "start" ]
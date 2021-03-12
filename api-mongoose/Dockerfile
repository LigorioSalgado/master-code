FROM node:12
#Aqui le a docker digo que version de node voy a ocupar

WORKDIR /usr/src/app 
#Aqui le digo a docker donde va estar trabajando mi container
#/opt/app

COPY package.json ./ 
#copia los package y muevelos al WORKDIR

RUN npm install 
#aqui instalo todas las dependencias de mi proyecto

RUN npm install nodemon -g  
#Instalando de manera global nodemon

COPY . . 
#voy copiar el resto de los archivos al WORKDIR

EXPOSE 3000 
#Expon(abre) el puerto para que te puedas conectar

CMD ["nodemon","-L","--watch",".","server.js"] 
# nodemon -L --watch . server.js
# -L, --legacy-watch ....... use polling to watch for changes (typically needed when watching over a network/Docker)
#entrypoint - punto de entrda es la linea principal que ejecuta o inicia le container
#Va ejecuta el comando node server.js como si lo escribieramos en la consola

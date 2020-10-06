const greeting  = (name) => {
    return `Hola ${name}, Saludos desde JS `
}
export default greeting;  // Hago accesible mi funcion greeting para otros archivos de JS
//module.exports  es similar a export default

//Diferencia module.export esta escrito en commonJS Javascript normal
//export default esta para babel y ecmascript6
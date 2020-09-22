function ejemploDeCb(cb) {
    // Aqui se puede hacer el código que sea.
    // ...
    cb('String que regresa el CB')
}


ejemploDeCb((parametro) => {
    console.log(parametro);
    console.log(3+3);
});

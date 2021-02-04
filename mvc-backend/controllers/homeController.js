const homeController = (req, res) => {
    res.send({message: 'Esto viene desde el controlador'});
}

module.exports = homeController;

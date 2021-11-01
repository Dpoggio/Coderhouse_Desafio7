const Contenedor = require('../lib/contenedor.js')

const ARCHIVO_PRODUCTOS = './DB/productos.txt'


class Productos extends Contenedor{
    constructor(){
        super(ARCHIVO_PRODUCTOS)
    }
}

module.exports = Productos
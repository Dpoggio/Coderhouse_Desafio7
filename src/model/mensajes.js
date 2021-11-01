const Contenedor = require('../lib/contenedor.js')

const ARCHIVO_MENSAJES = './DB/mensajes.txt'


class Mensajes extends Contenedor{
    constructor(){
        super(ARCHIVO_MENSAJES)
    }
}

module.exports = Mensajes
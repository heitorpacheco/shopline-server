'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Segmento extends Model {

    categoria () {
        return this.hasMany('App/Models/Categoria')
    }
}

module.exports = Segmento

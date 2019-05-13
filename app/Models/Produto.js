'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {

    categoria () {
        return this.hasOne('App/Models/Categoria')
    }

    imagem () {
        return this.hasMany('App/Models/Imagem')
    }

    atributo () {
        return this
        .belongsToMany('App/Models/Atributo')
        .pivotTable('prod_atrs')
    }
}

module.exports = Produto

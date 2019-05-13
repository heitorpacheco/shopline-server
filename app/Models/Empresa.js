'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {

    user () {
        return this.belongsTo('App/Models/User')
    }

    segmento () {
        return this
        .belongsToMany('App/Models/Segmento')
        .pivotTable('seg_emps')
    }
}

module.exports = Empresa

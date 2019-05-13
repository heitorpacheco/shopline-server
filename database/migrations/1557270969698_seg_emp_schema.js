'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SegEmpSchema extends Schema {
  up () {
    this.create('seg_emps', (table) => {
      table.integer('segmento_id').unsigned().references('id').inTable('segmentos').notNullable()
      table.integer('empresa_id').unsigned().references('id').inTable('empresas').notNullable()
      table.primary(['segmento_id', 'empresa_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('seg_emps')
  }
}

module.exports = SegEmpSchema

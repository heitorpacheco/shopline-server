'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SegmentoSchema extends Schema {
  up () {
    this.create('segmentos', (table) => {
      table.increments()
      table.string('segmento', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('segmentos')
  }
}

module.exports = SegmentoSchema

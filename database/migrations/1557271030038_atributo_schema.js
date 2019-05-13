'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtributoSchema extends Schema {
  up () {
    this.create('atributos', (table) => {
      table.increments()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.string('atributo', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('atributos')
  }
}

module.exports = AtributoSchema

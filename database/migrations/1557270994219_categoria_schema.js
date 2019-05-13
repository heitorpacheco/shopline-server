'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.integer('segmento_id').unsigned().references('id').inTable('segmentos').notNullable()
      table.string('categoria', 50).notNullable()
      table.timestamps()
    })    
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagemSchema extends Schema {
  up () {
    this.create('imagems', (table) => {
      table.increments()
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.string('path', 100).notNullable()
      table.boolean('capa').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('imagems')
  }
}

module.exports = ImagemSchema

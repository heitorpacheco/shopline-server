'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdAtrSchema extends Schema {
  up () {
    this.create('prod_atrs', (table) => {
      table.integer('produto_id').unsigned().references('id').inTable('produtos').notNullable()
      table.integer('atributo_id').unsigned().references('id').inTable('atributos').notNullable()
      table.primary(['produto_id', 'atributo_id'])
      table.timestamps()
    })
  }

  down () {
    this.drop('prod_atrs')
  }
}

module.exports = ProdAtrSchema

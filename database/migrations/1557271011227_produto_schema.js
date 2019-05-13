'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias').notNullable()
      table.integer('segmento_id').unsigned().references('id').inTable('segmentos').notNullable()
      table.integer('empresa_id').unsigned().references('id').inTable('empresas').notNullable()
      table.string('nome', 50).notNullable()
      table.string('descricao', 250).notNullable()
      table.float('valor', 8, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema

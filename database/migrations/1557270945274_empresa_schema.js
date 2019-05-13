'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table.integer('usuario_id').unsigned().references('id').inTable('users').notNullable()
      table.string('nome_fantasia', 150).notNullable()
      table.string('endereco', 150).notNullable()
      table.string('cnpj', 20).notNullable()
      table.string('nome_socio', 50).notNullable()
      table.string('cpf_socio', 15).notNullable()
      table.string('rg_socio', 12).notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema

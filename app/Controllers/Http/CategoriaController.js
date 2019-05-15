'use strict'

const Categoria = use('App/Models/Categoria')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */
class CategoriaController {
  /**
   * Show a list of all categorias.
   * GET categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
      const categoria = Categoria.all()

      return categoria
  }


  /**
   * Create/save a new categoria.
   * POST categorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const dados = request.all()

    const categoria = await Categoria.create({usuario_id: auth.user.id, ...dados})

    return categoria
  
  }

  /**
   * Display a single categoria.
   * GET categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const categoria = await Categoria.findOrFail(params.id)
  
    return categoria
  }


  /**
   * Delete a categoria with id.
   * DELETE categorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const categoria = await Categoria.findOrFail(params.id)

    if (categoria.usuario_id !== auth.user.id ){
      return response.status(401).send({ error: 'Não autorizado' })
    }

    await categoria.delete()
  }
}

module.exports = CategoriaController

'use strict'

const Atributo = use('App/Models/Atributo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with atributos
 */
class AtributoController {
  /**
   * Show a list of all atributos.
   * GET atributos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
      const atributos = Atributo.all()

      return atributos
  }

  /**
   * Create/save a new atributo.
   * POST atributos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const dados = request.all()

    atributos = await Atributo.create({usuario_id: auth.user.id, ...dados})
    
    return atributos
  }

  /**
   * Display a single atributo.
   * GET atributos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const atributo = await Atributo.findOrFail(params.id)
  
    return atributo
  }

  /**
   * Update atributo details.
   * PUT or PATCH atributos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a atributo with id.
   * DELETE atributos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const atributo = await Atributo.findOrFail(params.id)

    if (atributo.usuario_id !== auth.user.id ){
      return response.status(401).send({ error: 'Não autorizado' })
    }

    await atributo.delete()
  }
}

module.exports = AtributoController

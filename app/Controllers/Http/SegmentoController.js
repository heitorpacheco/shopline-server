'use strict'

const Segmento = use('App/Models/Segmento')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with segmentos
 */
class SegmentoController {
  /**
   * Show a list of all segmentos.
   * GET segmentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const segmento = Segmento.all()

    return segmento
  }

  /**
   * Create/save a new segmento.
   * POST segmentos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const dados = request.all()

    const segmento = Segmento.create({ usuario_id: auth.user.id, ...dados })

    return segmento
  }

  /**
   * Display a single segmento.
   * GET segmentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const segmento = await Segmento.findOrFail(params.id)

    return segmento
  }

  /**
   * Update segmento details.
   * PUT or PATCH segmentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const segmento = await Segmento.findOrFail(params.id)

    // const data = request.only([
    //   'title',
    //   'address',
    //   'latitude',
    //   'longitude',
    //   'price'
    // ])

    const dados = request.all()

    segmento.merge(dados)

    await segmento.save()

    return segmento
  }

  /**
   * Delete a segmento with id.
   * DELETE segmentos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const segmento = await Segmento.findOrFail(params.id)

    if (segmento.usuario_id !== auth.user.id ){
      return response.status(401).send({ error: 'Não autorizado' })
    }

    await segmento.delete()
  }
}

module.exports = SegmentoController

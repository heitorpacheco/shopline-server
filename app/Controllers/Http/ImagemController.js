'use strict'

const Produto = use('App/Models/Produto')
const Helpers = use('Helpers')

class ImagemController {
    async show ({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }

    async store ({ params, request }) {
        const produto = await Produto.findOrFail(params.id)

        const imagens = request.file('imagem', {
            types: ['image'],
            size: '2mb'
        })

        await imagens.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
          }))
        
          if (!imagens.movedAll()) {
            return imagens.errors()
          }
        
          await Promise.all(
            imagens
              .movedList()
              .map(image => produto.imagem().create({ path: image.fileName }))
          )
    }

    
}

module.exports = ImagemController

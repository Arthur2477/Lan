import Cliente from '#models/cliente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Cliente.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Cliente.query()
                            .where('id', params.id)
                            .preload('sessao')
                            .first()
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['nome', 'email', 'telefone'])
        return await Cliente.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
        const data = request.only(['nome', 'email', 'telefone'])
    
        cliente.merge(data)
        await cliente.save()
        return cliente
    }
    
    async destroy({ params }: HttpContext) {
        const cliente = await Cliente.findOrFail(params.id)
    
        await cliente.delete()
        return { message: 'Cliente deletado com sucesso', cliente }
    }
}

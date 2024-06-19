
import Computado from '#models/computado'
import type { HttpContext } from '@adonisjs/core/http'

export default class ComputadoresController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Computado.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Computado.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['especificacoes', 'status'])
        return await Computado.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const computador = await Computado.findOrFail(params.id)
        const data = request.only(['especificacoes', 'status'])
    
        computador.merge(data)
        await computador.save()
        return computador
    }
    
    async destroy({ params }: HttpContext) {
        const computador = await Computado.findOrFail(params.id)
    
        await computador.delete()
        return { message: 'Computador deletado com sucesso', computador }
    }
}

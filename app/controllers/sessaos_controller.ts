import Sessao from '#models/sessao'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessoesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Sessao.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Sessao.query()
                            .where('id', params.id)
                            .preload('cliente')
                            .preload('computador')
                            .first()
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['id_Cliente', 'idComputador', 'DataHoraInicio', 'DataHoraFim'])
        return await Sessao.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const sessao = await Sessao.findOrFail(params.id)
        const data = request.only(['id_Cliente', 'idComputador', 'DataHoraInicio', 'DataHoraFim'])
    
        console.log(data)
        sessao.merge(data)
        await sessao.save()
        return sessao
    }
    
    async destroy({ params }: HttpContext) {
        const sessao = await Sessao.findOrFail(params.id)
    
        await sessao.delete()
        return { message: 'Sessão deletada com sucesso', sessao }
    }
}

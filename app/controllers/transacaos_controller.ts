import Transacao from '#models/transacao'
import type { HttpContext } from '@adonisjs/core/http'

export default class TransacoesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Transacao.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await Transacao.query()
                                .where('id', params.id)
                                .preload('sessao')
                                .preload('vendaServico')
                                .first()
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['idSessao', 'idVendaServico', 'valorTotal', 'dataHora'])
        return await Transacao.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const transacao = await Transacao.findOrFail(params.id)
        const data = request.only(['idSessao', 'idVendaServico', 'valorTotal', 'dataHora'])
    
        transacao.merge(data)
        await transacao.save()
        return transacao
    }
    
    async destroy({ params }: HttpContext) {
        const transacao = await Transacao.findOrFail(params.id)
    
        await transacao.delete()
        return { message: 'Transação deletada com sucesso', transacao }
    }
}

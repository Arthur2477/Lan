import VendasServico from '#models/vendas_servico'
import type { HttpContext } from '@adonisjs/core/http'

export default class VendasServicosController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await VendasServico.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await VendasServico.query().where('id', params.id).preload('servicoExtra').preload('cliente').firstOrFail()
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['id_Servico', 'id_Cliente', 'data_hora'])
        return await VendasServico.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const vendaServico = await VendasServico.findOrFail(params.id)
        const data = request.only(['id_Servico', 'id_Cliente', 'dataHora'])
    
        vendaServico.merge(data)
        await vendaServico.save()
        return vendaServico
    }
    
    async destroy({ params }: HttpContext) {
        const vendaServico = await VendasServico.findOrFail(params.id)
    
        await vendaServico.delete()
        return { message: 'Venda de serviço deletada com sucesso', vendaServico }
    }
}

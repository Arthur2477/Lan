import ServicosExtra from '#models/servicos_extra'
import type { HttpContext } from '@adonisjs/core/http'

export default class ServicosExtrasController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await ServicosExtra.query().paginate(page, perPage)
    }
    
    async show({ params }: HttpContext) {
        return await ServicosExtra.findOrFail(params.id)
    }
    
    async store({ request }: HttpContext) {
        const data = request.only(['descricao', 'preco'])
        return await ServicosExtra.create(data)
    }
    
    async update({ params, request }: HttpContext) {
        const servicoExtra = await ServicosExtra.findOrFail(params.id)
        const data = request.only(['descricao', 'preco'])
    
        servicoExtra.merge(data)
        await servicoExtra.save()
        return servicoExtra
    }
    
    async destroy({ params }: HttpContext) {
        const servicoExtra = await ServicosExtra.findOrFail(params.id)
    
        await servicoExtra.delete()
        return { message: 'Serviço extra deletado com sucesso', servicoExtra }
    }
}

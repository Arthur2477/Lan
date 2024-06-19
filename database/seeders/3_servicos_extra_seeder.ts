import Servicos_extras from '#models/servicos_extra'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ServicosExtrasSeeder extends BaseSeeder {
  async run() {
    await Servicos_extras.createMany([
      {id: 1, descricao: 'Refrigerente', preco: 50.00},
      {id: 2, descricao: 'Formatação', preco: 100.00},
    ])
  }
}

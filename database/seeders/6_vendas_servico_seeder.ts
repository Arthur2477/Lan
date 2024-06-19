import Vendas_servicos from '#models/vendas_servico'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class VendasServicosSeeder extends BaseSeeder {
  async run() {
    await Vendas_servicos.createMany([
      {
        id: 1,
        id_Servico: 1,
        id_Cliente: 1,
        data_hora: '2024-06-05 14:00:00',
      },
      // Adicione mais registros conforme necessário
    ])
  }
}

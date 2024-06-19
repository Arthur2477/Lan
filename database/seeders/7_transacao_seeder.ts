import Transacao from '#models/transacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class TransacoesSeeder extends BaseSeeder {
  async run() {
    await Transacao.createMany([
      {
        id: 1,
        idSessao: 1,
        idVendaServico: 1,
        valorTotal: 100.00,
        dataHora: '2024-06-05 14:00:00',
      },
      // Adicione mais registros conforme necessário
    ])
  }
}

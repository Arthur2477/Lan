import Sessao from '#models/sessao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class SessaoSeeder extends BaseSeeder {
  public async run() {
    await Sessao.createMany([
      {
        id: 1,
        id_Cliente: 1,
        idComputador: 1,
        DataHoraInicio: '2024-06-05 14:00:00',
        DataHoraFim: '2024-06-05 15:30:00',
      },

      {
        id: 2,
        id_Cliente: 2,
        idComputador: 2,
        DataHoraInicio: '2024-06-05 14:00:00',
        DataHoraFim: '2024-06-05 15:30:00',
      }    ])
  }
}

import Computado from '#models/computado'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ComputadorSeeder extends BaseSeeder {
  async run() {
    await Computado.createMany([
      {id: 1, especificacoes: 'Intel Core i7, 16GB RAM, 1TB HDD', status: 'Disponível'},
      {id: 2, especificacoes: 'AMD Ryzen 5, 8GB RAM, 512GB SSD', status: 'Em uso'},
    ])
  }
}

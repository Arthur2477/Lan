import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class ClientesSeeder extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {id: 1, nome: 'João', email: 'joao@gmail.com', telefone: '(11) 98765-4321'},
      {id: 2, nome: 'Iago', email: 'iago@gmail.com', telefone: '(21) 12345-6789'},
    ])
  }
}

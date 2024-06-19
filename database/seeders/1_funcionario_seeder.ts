import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class FuncionarioSeeder extends BaseSeeder {
  async run() {
    await Funcionario.createMany([
      {id: 1, nome: 'Irineu', cargo: 'Gerente', salario: 5000.00},
      {id: 2, nome: 'Jacinto', cargo: 'Atendente', salario: 4500.00},
    ])
  }
}

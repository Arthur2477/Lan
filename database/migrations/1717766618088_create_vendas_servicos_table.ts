import { BaseSchema } from '@adonisjs/lucid/schema'

export default class VendasServicos extends BaseSchema {
  protected tableName = 'vendas_servicos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_servico').unsigned().references('id').inTable('servicos_extras').notNullable()
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').notNullable()
      table.dateTime('data_hora').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

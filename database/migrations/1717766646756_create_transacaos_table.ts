import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Transacoes extends BaseSchema {
  protected tableName = 'transacaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_sessao').unsigned().references('id').inTable('sessaos').notNullable()
      table.integer('id_venda_servico').unsigned().references('id').inTable('vendas_servicos').notNullable()
      table.decimal('valor_total', 10, 2).notNullable()
      table.dateTime('data_hora').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

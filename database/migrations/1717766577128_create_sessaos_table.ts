import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Sessoes extends BaseSchema {
  protected tableName = 'sessaos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('id_computador').unsigned().references('id').inTable('computadores').notNullable()
      table.dateTime('data_hora_inicio').notNullable()
      table.dateTime('data_hora_fim').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Computados extends BaseSchema {
  protected tableName = 'computados'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('especificacoes', 255).notNullable()
      table.string('status', 50).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

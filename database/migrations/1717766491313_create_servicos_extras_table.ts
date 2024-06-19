import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ServicosExtras extends BaseSchema {
  protected tableName = 'servicos_extras'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 255).notNullable()
      table.decimal('preco', 10, 2).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

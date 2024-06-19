import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import ServicosExtra from './servicos_extra.js'

export default class VendasServico extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_Servico: number

  @column()
  declare id_Cliente: number

  @column()
  declare data_hora: string

  @belongsTo(() => Cliente, { foreignKey: 'id_Cliente' })
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => ServicosExtra, { foreignKey: 'id_Servico' })
  declare servicoExtra: BelongsTo<typeof ServicosExtra>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

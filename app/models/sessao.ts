import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo,  } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cliente from './cliente.js'
import Computado from './computado.js'

export default class Sessao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_Cliente: number

  @column()
  declare idComputador: number

  @column()
  declare DataHoraInicio: string

  @column()
  declare DataHoraFim: string

  @belongsTo(() => Cliente, { foreignKey: 'id_Cliente' })
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Computado, { foreignKey: 'idComputador' })
  declare computador: BelongsTo<typeof Computado>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
}

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Sessao from './sessao.js'
import VendasServico from './vendas_servico.js'

export default class Transacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare idSessao: number

  @column()
  declare idVendaServico: number

  @column()
  declare valorTotal: number

  @column()
  declare dataHora: string

  @belongsTo(() => Sessao, { foreignKey: 'idSessao' })
  declare sessao: BelongsTo<typeof Sessao>

  @belongsTo(() => VendasServico, { foreignKey: 'idVendaServico' })
  declare vendaServico: BelongsTo<typeof VendasServico>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

import FuncionariosController from '#controllers/funcionarios_controller'
import ClientesController from '#controllers/clientes_controller'
import ServicosExtrasController from '#controllers/servicos_extras_controller'
import SessoesController from '#controllers/sessaos_controller'
import VendasServicosController from '#controllers/vendas_servicos_controller'
import TransacoesController from '#controllers/transacaos_controller'
import router from '@adonisjs/core/services/router'
import ComputadoresController from '#controllers/computadores_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/servicosextras', ServicosExtrasController).apiOnly()
router.resource('/computadores', ComputadoresController).apiOnly()
router.resource('/sessoes', SessoesController).apiOnly()
router.resource('/vendasservicos', VendasServicosController).apiOnly()
router.resource('/transacaos', TransacoesController).apiOnly()

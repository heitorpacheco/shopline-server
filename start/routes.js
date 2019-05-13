'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post("/cadastroLogin", "AuthController.cadastroLogin");
Route.post("/login", "AuthController.login");

Route.group(() => {

    Route.resource('empresas', 'EmpresaController')
        .apiOnly()
        .except('update')
    
    Route.resource('segmentos', 'SegmentoController')
        .apiOnly()
        .except('update')

    Route.resource('atributos', 'AtributoController')
        .apiOnly()
        .except('update')

}).middleware('auth')


  
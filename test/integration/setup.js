'use strict'

const { registrar, ioc } = require('@adonisjs/fold')
const { Helpers, setupResolver } = require('@adonisjs/sink')
const path = require('path')

const providers = [
  path.join(__dirname, '../../providers/AppProvider'),
  path.join(__dirname, '../../providers/ViewProvider')
]

module.exports = function () {
  ioc.bind('Adonis/Src/Helpers', function () {
    return new Helpers(path.join(__dirname, './'))
  })
  setupResolver()
  return new Promise((resolve, reject) => {
    registrar
      .providers(providers)
      .registerAndBoot()
      .then(resolve).catch(reject)
  })
}

import fastify from 'fastify'
import { corsPlugin } from './src/plugins/cors.js'
import { schemaLoaderPlugin } from './src/schemas/loader.js'
import { routesPlugin } from './src/routes/routes.js'

export function buildServer() {
  const app = fastify()

  app.register(corsPlugin)
  app.register(schemaLoaderPlugin)
  app.register(routesPlugin, { prefix: '/api' })
  return app
}

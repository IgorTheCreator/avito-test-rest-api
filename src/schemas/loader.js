import fp from 'fastify-plugin'
import { createResponseSchema } from './create-response.js'
import { createBodySchema } from './create-body.js'
import { advQuerySchema } from './adv-query.js'
import { advParamsSchema } from './adv-params.js'
import { advResponseSchema } from './adv-response.js'
import { listAdvResponseSchema } from './list-adv-response.js'
import { listAdvQuerySchema } from './list-adv-query.js'

export const schemaLoaderPlugin = fp(async function (instance) {
  instance.addSchema(createResponseSchema)
  instance.addSchema(createBodySchema)
  instance.addSchema(advQuerySchema)
  instance.addSchema(advParamsSchema)
  instance.addSchema(advResponseSchema)
  instance.addSchema(listAdvResponseSchema)
  instance.addSchema(listAdvQuerySchema)
})

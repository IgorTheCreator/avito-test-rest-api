import { createAdv, getAdvById, getListAdv } from '../handlers/handlers.js'

export const routesPlugin = async function (instance) {
  instance.get(
    '/',
    {
      schema: {
        querystring: instance.getSchema('listAdvQuerySchema'),
        response: {
          200: instance.getSchema('listAdvResponseSchema'),
        },
      },
    },
    getListAdv
  )

  instance.get(
    '/:id',
    {
      schema: {
        params: instance.getSchema('advParamsSchema'),
        querystring: instance.getSchema('advQuerySchema'),
        response: {
          200: instance.getSchema('advResponseSchema'),
        },
      },
    },
    getAdvById
  )

  instance.post(
    '/',
    {
      schema: {
        body: instance.getSchema('createBodySchema'),
        response: {
          201: instance.getSchema('createResponseSchema'),
        },
      },
    },
    createAdv
  )
}

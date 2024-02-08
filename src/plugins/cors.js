import cors from '@fastify/cors'
import fp from 'fastify-plugin'

export const corsPlugin = fp(async function (instance) {
  instance.register(cors, {
    origin: true,
  })
})

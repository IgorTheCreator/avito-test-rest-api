import { buildServer } from './app.js'

const server = buildServer()

const main = async () => {
  try {
    await server.listen({ host: '0.0.0.0', port: 3000 })
    console.log('Server ready at 3000 port')
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()

import t from 'tap'
import { buildServer } from '../app.js'

t.test(`GET '/api' - get list advs`, async (t) => {
  const app = buildServer()

  t.teardown(() => {
    app.close()
  })

  const response = await app.inject({
    method: 'GET',
    url: '/api',
  })

  t.equal(response.statusCode, 200)
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
})

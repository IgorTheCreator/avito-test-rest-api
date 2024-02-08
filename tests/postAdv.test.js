import t from 'tap'
import { buildServer } from '../app.js'
import prisma from '../src/utils/prisma.js'

t.test(`POST '/api' - create adv successfully`, async (t) => {
  const app = buildServer()
  t.teardown(async () => {
    app.close()
    await prisma.adv.deleteMany({})
  })
  const payload = {
    title: 'title',
    description: 'description',
    pictureLinks: ['dsf', 'dsdff', 'ddsfsf'],
    cost: 100,
  }
  const response = await app.inject({
    method: 'POST',
    url: '/api',
    headers: {
      'content-type': 'application/json',
    },
    payload,
  })
  t.equal(response.statusCode, 201)
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8')

  const json = response.json()
  t.type(json.id, 'number')
  t.equal(json.status, 201)
  t.pass('test completed')
})

t.test(`POST '/api' - fail to create adv`, async (t) => {
  const app = buildServer()

  t.teardown(async () => {
    app.close()
    await prisma.adv.deleteMany({})
  })

  const payload = {}

  const response = await app.inject({
    method: 'POST',
    url: '/api',
    headers: {
      'content-type': 'application/json',
    },
    payload,
  })
  t.equal(response.statusCode, 400)
  t.pass('test completed')
})

import t from 'tap'
import { buildServer } from '../app.js'
import prisma from '../src/utils/prisma.js'

t.test(`GET 'api/:id' - get adv by id successfully`, async (t) => {
  const app = buildServer()
  t.teardown(async () => {
    app.close
    await prisma.adv.delete({
      where: {
        id,
      },
    })
  })
  const postResponse = await app.inject({
    method: 'POST',
    url: '/api',
    headers: {
      'content-type': 'application/json',
    },
    payload: {
      title: 'title',
      description: 'description',
      cost: 100,
      pictureLinks: ['1', '2', '3'],
    },
  })
  const id = postResponse.json().id

  const response = await app.inject({
    method: 'GET',
    url: `/api/${id}`,
  })
  t.equal(response.statusCode, 200)
  t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
})

t.test(`GET 'api/:id' - fail to get adv by id`, async (t) => {
  const app = buildServer()
  t.teardown(() => {
    app.close
  })
  const response = await app.inject({
    method: 'GET',
    url: '/api/randomstring',
  })
  t.equal(response.statusCode, 400)
})

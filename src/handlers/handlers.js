import { advService } from '../services/advService.js'

export async function getListAdv(request, reply) {
  const { page, sort, ascending } = request.query
  try {
    const advs = await advService.findAdvs(page, sort, ascending)
    reply.code(200)
    reply.header('Content-Type', 'application/json')
    return JSON.stringify(advs)
  } catch (e) {
    console.error(e)
    return { message: e.message }
  }
}

export async function getAdvById(request, reply) {
  const { id } = request.params
  const { fields } = request.query
  const data = await advService.findById(id, fields)
  reply.code(200)
  reply.header('Content-Type', 'application/json')
  return JSON.stringify(data)
}

export async function createAdv(request, reply) {
  const body = request.body
  const id = await advService.createAdv(body)
  reply.code(201)
  reply.header('Content-Type', 'application/json')
  return { id, status: reply.statusCode }
}

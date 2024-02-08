import { ApiError } from '../utils/ApiError.js'
import prisma from '../utils/prisma.js'

class AdvRepository {
  constructor(db) {
    this.db = db
  }
  async createAdv({ title, description, pictureLinks, cost }) {
    const pictureLinksObj = pictureLinks.map((link) => {
      return { link }
    })
    const { id } = await this.db.adv.create({
      data: {
        title,
        description,
        cost,
        picture: {
          create: pictureLinksObj,
        },
      },
    })
    return id
  }

  async findById(advId, description) {
    const adv = await this.db.adv.findFirst({
      where: {
        id: advId,
      },
      select: {
        title: true,
        cost: true,
        description,
      },
    })
    if (!adv) throw new ApiError('Adv does not exist')
    return adv
  }

  async findAdvs(page) {
    const advs = await this.db.adv.findMany({
      take: 10,
      skip: (page - 1) * 10,
      select: {
        id: true,
        title: true,
        cost: true,
      },
    })
    if (!advs) throw new ApiError('Advs not found', 404)
    return advs
  }

  async findAdvsSorted(page, sort, ascending) {
    const advs = await this.db.adv.findMany({
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        [sort]: ascending ? 'asc' : 'desc',
      },
      select: {
        id: true,
        title: true,
        cost: true,
      },
    })
    return advs
  }
}

const db = prisma
export const advRepository = new AdvRepository(db)

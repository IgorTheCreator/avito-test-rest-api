import { ApiError } from '../utils/ApiError.js'
import prisma from '../utils/prisma.js'

class PictureRepository {
  constructor(db) {
    this.db = db
  }
  async findMainPictureLinkById(advId) {
    const mainPicture = await this.db.picture.findFirst({
      where: {
        advId: advId,
      },
    })
    if (!mainPicture) throw new ApiError('Main Picture not found', 404)
    return mainPicture.link
  }
  async findPictureLinksById(advId) {
    const pictureLinks = await this.db.picture.findMany({
      where: {
        advId: advId,
      },
    })
    if (!pictureLinks) throw new ApiError('Picture Links not found')
    return pictureLinks
  }
}

const db = prisma
export const pictureRepository = new PictureRepository(db)

import { advRepository } from '../models/adv.js'
import { pictureRepository } from '../models/picture.js'

class AdvService {
  constructor(advRepository, pictureRepository) {
    this.advRepository = advRepository
    this.pictureRepository = pictureRepository
  }

  async createAdv(body) {
    const advId = await this.advRepository.createAdv(body)
    return advId
  }

  async findById(advId, fields = '') {
    // Get main picture link
    const mainPictureLink =
      await this.pictureRepository.findMainPictureLinkById(advId)

    // Get description if fields includes it
    let description = false
    if (fields.includes('description')) {
      description = true
    }
    const adv = await this.advRepository.findById(advId, description)

    // Get picture links if fields includes it
    if (fields.includes('pictureLinks')) {
      let pictureLinks = await this.pictureRepository.findPictureLinksById(
        advId
      )

      // Convert an array with picture data to array with link strings
      pictureLinks = pictureLinks.map((pl) => pl.link)

      return { ...adv, mainPictureLink, pictureLinks }
    } else {
      return { ...adv, mainPictureLink }
    }
  }

  async findAdvs(page, sort, ascending) {
    if (sort) {
      let advs = await this.advRepository.findAdvsSorted(page, sort, ascending)
      advs = await this.addMainPictureLinksToAdvs(advs)
      return advs
    } else {
      let advs = await this.advRepository.findAdvs(page)
      advs = await this.addMainPictureLinksToAdvs(advs)
      return advs
    }
  }

  async addMainPictureLinksToAdvs(advs) {
    const advsWithLink = await Promise.all(
      advs.map(async (adv) => {
        const link = await this.pictureRepository.findMainPictureLinkById(
          adv.id
        )
        return { title: adv.title, cost: adv.cost, mainPictureLink: link }
      })
    )
    return advsWithLink
  }
}
export const advService = new AdvService(advRepository, pictureRepository)

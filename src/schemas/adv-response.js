export const advResponseSchema = {
  $id: 'advResponseSchema',
  type: 'object',
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
    },
    cost: {
      type: 'number',
    },
    mainPictureLink: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    picture: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['title', 'cost', 'mainPictureLink'],
}

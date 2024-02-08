export const listAdvResponseSchema = {
  $id: 'listAdvResponseSchema',
  type: 'object',
  additionalProperties: false,
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: {
            type: 'string',
          },
          mainPictureLink: {
            type: 'string',
          },
          cost: {
            type: 'number',
          },
        },
        required: ['title', 'mainPictureLink', 'cost'],
      },
    },
    total: {
      type: 'integer',
    },
  },
}

export const createBodySchema = {
  $id: 'createBodySchema',
  type: 'object',
  additionalProperties: false,
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 200,
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 1000,
    },
    pictureLinks: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true,
    },
    cost: {
      type: 'number',
    },
  },
  required: ['title', 'description', 'pictureLinks', 'cost'],
}

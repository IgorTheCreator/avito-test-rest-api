export const listAdvQuerySchema = {
  $id: 'listAdvQuerySchema',
  type: 'object',
  additionalProperties: false,
  properties: {
    page: {
      type: 'integer',
      default: 1,
      minimum: 1,
    },
    sort: {
      type: 'string',
      enum: ['cost', 'createdAt'],
    },
    ascending: {
      type: 'boolean',
      default: true,
    },
  },
}

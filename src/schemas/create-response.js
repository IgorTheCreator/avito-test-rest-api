export const createResponseSchema = {
  $id: 'createResponseSchema',
  type: 'object',
  additionalProperties: false,
  properties: {
    id: {
      type: 'integer',
    },
    status: {
      type: 'integer',
    },
  },
  required: ['id', 'status'],
}

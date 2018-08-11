import { schema } from 'normalizr'

const agency = new schema.Entity('agencies', {}, { idAttribute: 'logo' })
const property = new schema.Entity('properties', { agency })
const arrayOfProperties = new schema.Array(property)
export const responseSchema = new schema.Values(arrayOfProperties)

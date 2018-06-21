import { normalize, schema } from 'normalizr';

export const property = new schema.Entity('properties');
export const arrayOfProperties = new schema.Array(property);
export const agency = new schema.Entity('agencies');
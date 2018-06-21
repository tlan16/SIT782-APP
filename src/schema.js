import { schema } from 'normalizr';

export const agency = new schema.Entity('agencies');
export const property = new schema.Entity('properties',{ agency: agency});
export const arrayOfProperties = new schema.Array(property);

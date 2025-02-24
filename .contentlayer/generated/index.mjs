// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer2/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import allJavas from './Java/_index.json' with { type: 'json' }
import allReacts from './React/_index.json' with { type: 'json' }
import allOs from './OS/_index.json' with { type: 'json' }

export { allJavas, allReacts, allOs }

export const allDocuments = [...allJavas, ...allReacts, ...allOs]



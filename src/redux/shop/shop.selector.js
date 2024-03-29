import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// convert object to array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParmas =>
   createSelector(
   [ selectCollections ],
//    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParmas] )
// Data Normalizarion - means storing data as obj instead of the array (its an  )    
collections => collections[collectionUrlParmas]
  )
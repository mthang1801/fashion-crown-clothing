import { createSelector } from "reselect";
const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(selectShopCollections, (collections) => {
    return collections[collectionUrlParam];
  });

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollectionsLoading = createSelector(
  [selectShop],
  (shop) => shop.isLoading
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => Object.entries(shop.collections).length > 0
);
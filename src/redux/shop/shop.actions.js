import { shopActionTypes } from "./shop.types";

export const updateCollections = (collections) => ({
  type: shopActionTypes.UDPATE_COLLECTIONS,
  payload: collections,
});

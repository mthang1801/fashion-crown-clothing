import { shopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../utils/firebase.util";
export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (error) => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: error,
});

// export const fetchCollectionsStartAsync = () => (dispatch) => {
//   dispatch(fetchCollectionsStart());

//   const collectionsRef = firestore.collection("collections");
//   collectionsRef
//     .get()
//     .then((snapshot) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot.docs);
//       dispatch(fetchCollectionsSuccess(collectionsMap));
//     })
//     .catch((error) => fetchCollectionsFailure(error.message));
// };

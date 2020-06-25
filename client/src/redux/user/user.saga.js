import { call, put, takeLatest, all } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
  auth,
  GoogleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../utils/firebase.util";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
} from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData = null) {
  const userRef = yield call(
    createUserProfileDocument,
    userAuth,
    additionalData
  );
  const userSnapshot = yield userRef.get();
  yield put(
    signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data(),
    })
  );
}

export function* signUp(userInfo) {
  try {
    const { displayName, email, password } = userInfo.payload;
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield call(getSnapshotFromUserAuth, user, { displayName });
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (userAuth) {
      yield getSnapshotFromUserAuth(userAuth);
    }
    return;
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignup() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignInWithEmailStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignout() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onSignup),
    call(onGoogleSignInStart),
    call(onSignInWithEmailStart),
    call(onCheckUserSession),
    call(onSignout),
  ]);
}

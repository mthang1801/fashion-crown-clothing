import firebase from "firebase/app";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("XmmaLZYbUJZSQOKnaALz")
  .collection("cartItems")
  .doc("hx6RD92lGQO8MNaLNbtt");
firestore.doc("/users/XmmaLZYbUJZSQOKnaALz/cartItems/hx6RD92lGQO8MNaLNbtt");
firestore.collection("/users/XmmaLZYbUJZSQOKnaALz/cartItems");

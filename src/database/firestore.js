/* eslint-disable */

import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

// Database config shit to connect Firestore to our code
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBxqSI3xJlVAHWtOHIASAc7ArADsWfnAJA",
  authDomain: "bruin-byte-6bf3e.firebaseapp.com",
  projectId: "bruin-byte-6bf3e",
});

console.log("Firestore set up successful :)");

export const getStarRating = async (establishment) => {
  var firestore = firebase.firestore();

  var docData = (
    await firestore.collection("establishments").doc(establishment).get()
  ).data();

  // If function param 'establishment' does not exist
  if (!docData) {
    return;
  }

  return docData.star_rating;
};

export const getNumStarRatings = async (establishment) => {
  var firestore = firebase.firestore();

  var docData = (
    await firestore.collection("establishments").doc(establishment).get()
  ).data();

  // If function param 'establishment' does not exist
  if (!docData) {
    return;
  }

  return docData.num_star_ratings;
};

export const addReview = (user, establishment, review) => {
  var firestore = firebase.firestore();
  var dateCreated = firebase.firestore.FieldValue.serverTimestamp();

  const restaurantDocRef = firestore
    .collection("establishments")
    .doc(establishment);

  // Adding review to establishment's "review" collection
  restaurantDocRef
    .collection("reviews")
    .add({
      date_created: dateCreated,
      user: user,
      text: review,
      establishment: establishment,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

  // Adding review to user's "review" collection
  firestore
    .collection("users")
    .doc(user)
    .collection("reviews")
    .add({
      date_created: dateCreated,
      text: review,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

// 0 <= starRating <= 5
export const addStarRating = async (user, establishment, starRating) => {
  var firestore = firebase.firestore();

  const currentRating = parseFloat(
    (
      await firestore.collection("establishments").doc(establishment).get()
    ).data().star_rating
  );
  const currentNumStarRatings = (
    await firestore.collection("establishments").doc(establishment).get()
  ).data().num_star_ratings;
  var newRating = parseFloat(
    (currentRating * currentNumStarRatings + starRating) /
      (currentNumStarRatings + 1)
  );

  firestore
    .collection("establishments")
    .doc(establishment)
    .set({
      star_rating: newRating,
      num_star_ratings: currentNumStarRatings + 1,
    })
    .then(function (docRef) {
      console.log("Added " + starRating + " stars to " + establishment);
    })
    .catch(function (error) {
      console.error("Error adding rating.");
    });
};

export const createEstablishment = async (establishment) => {
  const docRef = firebase
    .firestore()
    .collection("establishments")
    .doc(establishment);
  docRef.set({
    num_star_ratings: 0,
    star_rating: 0,
  });
};

export const createAccount = async (username) => {
  if (firebase.firestore().collection("users").doc(username) == undefined) {
    const docRef = firebase.firestore().collection("users").doc(username);
    docRef.set({
      bio: "",
      display_name: username,
    });
  }
};

export const createBio = async (username, bio) => {
  firebase.firestore().collection("users").doc(username).set(
    {
      username: username,
      bio: bio,
    },
    { merge: true }
  ); // 'Merge: true' prevents the overwriting issue
};

export const createDisplayName = async (username, display_name) => {
  firebase.firestore().collection("users").doc(username).set(
    {
      username: username,
      display_name: display_name,
    },
    { merge: true }
  ); // 'Merge: true' prevents the overwriting issue
};

export const getUserBio = async (username) => {
  const bio = (
    await firebase.firestore().collection("users").doc(username).get()
  ).data().bio;

  return bio;
};

export const getArrayOfReviews = async (establishment) => {
  // route creates a query snapshot of the reviews collection of establishment
  const route = await firebase
    .firestore()
    .collection("establishments")
    .doc(establishment)
    .collection("reviews")
    .get();

  // number of reviews - maybe need to use? just put here in case
  var numberOfReviews = route.size;

  // .docs ==> An array of all the documents in the QuerySnapshot.
  var arrayOfReviews = route.docs.map((doc) => doc.data());
  return arrayOfReviews;
};

// Just copied above function, but for "users" instead of "establishments"
export const getArrayOfReviewsFromUser = async (username) => {
  // route creates a query snapshot of the reviews collection of establishment
  const route = await firebase
    .firestore()
    .collection("users")
    .doc(username)
    .collection("reviews")
    .get();

  // number of reviews - maybe need to use? just put here in case
  var numberOfReviews = route.size;

  // .docs ==> An array of all the documents in the QuerySnapshot.
  var arrayOfReviews = route.docs.map((doc) => doc.data());
  return arrayOfReviews;
};

// WARNING: TAKES IN DISPLAY_NAME, NOT USERNAME, AS THE PARAMETER
// Use this as a "Is this display name taken?" checker
export const userExists = async (display_name) => {
  return (
    (
      await firebase
        .firestore()
        .collection("users")
        .where("display_name", "==", display_name)
        .get()
    ).size != 0
  );
};

// Returns undefined if user doesn't have display name
export const getUserDisplayName = async (username) => {
  const display_name = (
    await firebase.firestore().collection("users").doc(username).get()
  ).data().display_name;

  return display_name;
};

/* Added 12/13/20 */

// Creates or updates the user's bio
export const setUserBio = async (username, bio) => {
  firebase.firestore().collection("users").doc(username).set(
    {
      bio: bio,
    },
    { merge: true }
  );
};

// Creates or updates the user's display name
export const setUserDisplayName = async (username, display_name) => {
  firebase.firestore().collection("users").doc(username).set(
    {
      display_name: display_name,
    },
    { merge: true }
  );
};

// Create new account
export const createNewUser = (username) => {
  firebase.firestore().collection("users").doc(username).set({
    display_name: username,
    bio: "",
  });
};

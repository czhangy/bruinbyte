/* eslint-disable */

import firebase from "firebase";
// Required for side-effects
require("firebase/firestore");

// Database config shit to connect Firestore to our code
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBxqSI3xJlVAHWtOHIASAc7ArADsWfnAJA',
  authDomain: 'bruin-byte-6bf3e.firebaseapp.com',
  projectId: 'bruin-byte-6bf3e',
});

console.log("Firestore set up successful :)");

export const getStarRating = async (establishment) => {
  var firestore = firebase.firestore();

  var docData = (await firestore.collection("establishments")
    .doc(establishment).get())
    .data();
  
  // If function param 'establishment' does not exist
  if (!docData) {
    return;
  }

  return docData.star_rating;
};

export const getNumStarRatings = async (establishment) => {
  var firestore = firebase.firestore();

  var docData = (await firestore.collection("establishments")
    .doc(establishment).get())
    .data();
  
  // If function param 'establishment' does not exist
  if (!docData) {
    return;
  }

  return docData.num_star_ratings;
};

export const addReview = (user, establishment, review) => {
  var firestore = firebase.firestore();
  var dateCreated = firebase.firestore.FieldValue.serverTimestamp();

  const restaurantDocRef = firestore.collection("establishments")
    .doc(establishment);

  restaurantDocRef
    .collection("reviews")
    .add({
      date_created: dateCreated,
      user: user,
      text: review,
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
};

// 0 <= starRating <= 5 
export const addStarRating = async (user, establishment, starRating) => {
  var firestore = firebase.firestore();

  const currentRating = parseFloat(
    (await firestore.collection("establishments")
      .doc(establishment).get())
      .data().star_rating
  );
  const currentNumStarRatings = (await firestore.collection("establishments")
  .doc(establishment).get())
  .data()
  .num_star_ratings;
  var newRating = parseFloat(( (currentRating*currentNumStarRatings) + starRating) / (currentNumStarRatings+1));

  firestore.collection("establishments")
    .doc(establishment)
    .set({
      star_rating: newRating,
      num_star_ratings: currentNumStarRatings+1,
    })
  .then(function(docRef) {
      console.log("Added " + starRating + " stars to " + establishment);
  })
  .catch(function(error) {
      console.error("Error adding rating.");
  });
}

export const createEstablishment = async (establishment) => {
  const docRef = firebase.firestore().collection("establishments").doc(establishment);
  docRef.set({
    num_star_ratings: 0,
    star_rating: 0,
  });
}

export const getUserBio = async (username) => {
  const bio = (await firebase.firestore().collection("users")
  .doc(username).get())
  .data()
  .bio;

  return bio;
}

// export const zeroStars = async (establishment) => {
//   firebase.firestore()
//     .collection("establishments")
//     .doc(establishment)
//     .set({
//       star_rating: 0,
//       num_star_ratings: 0,
//     })
// }

// export const getAllReviewsOf = async (establishment) => {
//   const snapshot = await firebase.firestore().collection("establishments").get();
//   return await snapshot.docs.map(doc => doc.data());
// }

import firebase from "firebase";

var firebconfig = {
  apiKey: "AIzaSyDecqzwpMVajHdH6Tabpc5CyhBZccKXj0M",
  authDomain: "recipe-manager01.firebaseapp.com",
  databaseURL: "https://recipe-manager01.firebaseio.com",
  projectId: "recipe-manager01",
  storageBucket: "x",
  messagingSenderId: "537000331514",
  appId: "1:537000331514:web:5fb5dd14099ef065"
};

try {
  firebase.initializeApp(firebconfig);
} catch {}

export const database = firebase.database();

export { firebase };

// database
//   .ref("recipies")
//   .orderByKey()
//   .on("value", snapShot => {
//     console.log("PREV_VALUE", snapShot.val());
//     const recipies = [];
//     snapShot.forEach(childSnapshot => {
//       recipies.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log("VALUE_CHANGED", recipies);
//   });
//database.ref("recipies").on("child_changed", snapShot => {
//console.log("CHILD_CHANGED", snapShot.key, snapShot.val());
//});
// database.ref("recipies").on("child_removed", snapShot => {
//   console.log("CHILD_REMOVED", snapShot.key, snapShot.val());
// });
//database.ref("recipies/-LmePnWNy1pkPoi8KkDx").update({ title: "vangi bath" });
// database.ref("recipies").push({
//   title: "Biryani",
//   cookTime: 80,
//   ingredients: "all vegtables!"
// });
// database.ref("recipies").push({
//   title: "pav bhaji",
//   cookTime: 30,
//   ingredients: "pavs, potatoes"
// });
// database.ref("recipies").push({
//   title: "coconut pickel",
//   cookTime: 15,
//   ingredients: "coconuts"
// });
// database.ref("recipies").push({
//   title: "coconut pickel3333",
//   cookTime: 15,
//   ingredients: "coconuts"
// });

// firebase
//   .database()
//   .ref()
//   .set({
//     name: "vasu",
//     stressLevel: 1,
//     job: {
//       title: "Software Developer",
//       company: "Velocity"
//     },
//     location: {
//       country: "India",
//       state: "Hyderabad"
//     },
//     age: 38,
//     motherTounge: "telugu"
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("failed to save", e);
//   });

// const valueOnChange = firebase
//   .database()
//   .ref()
//   .on("value", response => {
//     console.log(response.val());
//   });

// setTimeout(() => {
//   firebase
//     .database()
//     .ref("age")
//     .set(49);
// }, 3500);
// setTimeout(() => {
//   firebase
//     .database()
//     .ref()
//     .off(valueOnChange);
// }, 7000);

// setTimeout(() => {
//   firebase
//     .database()
//     .ref("age")
//     .set(69);
// }, 8000);
// firebase
//   .database()
//   .ref("job")
//   .once("value")
//   .then(response => {
//     console.log(response.val());
//   });

// firebase
//   .database()
//   .ref("location/country")
//   .remove()
//   .then(() => {
//     console.log("removed country from location succsfully");
//   })
//   .catch(e => {
//     console.log("unsuccessfull removing country from location");
//   });

// firebase
//   .database()
//   .ref()
//   .update({ stressLevel: 2, "job/company": "Amazon", "location/country": "Germany" })
//   .then(() => {
//     console.log("update is successful");
//   });
// firebase
//   .database()
//   .ref("location/country")
//   .set("India & Germany");
// firebase
//   .database()
//   .ref("age")
//   .set(32);
// firebase
//   .database()
//   .ref("attributes")
//   .set({
//     height: 10,
//     weight: 150
//   });

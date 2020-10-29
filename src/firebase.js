import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP1f0wmElkMp6pKvDoKLs7K6wQYmkCwbc",
  authDomain: "events-board-18276.firebaseapp.com",
  databaseURL: "https://events-board-18276.firebaseio.com",
  projectId: "events-board-18276",
  storageBucket: "events-board-18276.appspot.com",
  messagingSenderId: "314181355347",
  appId: "1:314181355347:web:ab20d9adff83e5efc843a6",
  measurementId: "G-995HQF9L0D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let event = (title, date, desc) => {
  if (title && date && desc) {
    let newPostKey = firebase.database().ref().child("events").push().key;
    let data = {};
    data[newPostKey] = {
      eventTitle: title,
      eventDate: date,
      eventDesc: desc,
    };
    firebase
      .database()
      .ref("events/" + date)
      .update(data);
  }
};

export default {
  submitEvent: event,
  database: firebase.database(),
  auth: firebase.auth(),
  userData: firebase.auth().currentUser,
};

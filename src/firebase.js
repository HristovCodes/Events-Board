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

// const updateHighScore = (num, id, img) => {
//   if (!isNaN(num)) {
//     id = id === "" ? "Jhon" : id;
//     db.ref("highscore/" + img + "/" + id).update(
//       {
//         highscore: num,
//         name: id,
//       },
//       function (error) {
//         if (error) {
//           console.log(error + "\nhere");
//         }
//       }
//     );
//   }
// };

// const getData = async (num) => {
//   if (isNaN(num)) return false;

//   const data = await db
//     .ref("imgs/")
//     .once("value")
//     .then((snapshot) => {
//       return snapshot.val() === null ? {} : snapshot.val();
//     })
//     .catch((err) => {
//       console.log(err);
//       return "";
//     });
//   return data;
// };

// // not tested needs to be mocked because data is
// // always different and bigger every time
// const getHighScore = async () => {
//   let dataHS = await db
//     .ref("highscore/")
//     .once("value")
//     .then((snapshot) => {
//       return snapshot.val() === null ? {} : snapshot.val();
//     })
//     .catch((err) => {
//       console.log(err);
//       return "";
//     });
//   dataHS = Object.values(dataHS);
//   return dataHS;
// };

export default {
  db: firebase.database(),
  app: firebase.app(),
  auth: firebase.auth(),
};

import Firebase from 'firebase'

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBU8OUM4TkAx2lI1de7h53_tML4BziQFKA',
  authDomain: 'airbnbsimplevue.firebaseapp.com',
  databaseURL: 'https://airbnbsimplevue.firebaseio.com',
  projectId: 'airbnbsimplevue',
  storageBucket: 'airbnbsimplevue.appspot.com',
  messagingSenderId: '807717458960'
})

const auth = firebaseApp.auth()
const db = firebaseApp.database()
// const usersRef = firebaseApp.database().ref('users');

export {
  auth,
  db
  // usersRef
}

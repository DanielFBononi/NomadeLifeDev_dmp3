import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import  { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTTdxG3pZuegv2j5LvC3qfvsteH928yOY",
  authDomain: "nomadelife-dj.firebaseapp.com",
  projectId: "nomadelife-dj",
  storageBucket: "nomadelife-dj.appspot.com",
  messagingSenderId: "1097712633023",
  appId: "1:1097712633023:web:f8102155f7d2788134f20a",
  measurementId: "G-75MWPLS5JC"
};


const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db,analytics}
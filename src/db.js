import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const config = {
  apiKey: 'AIzaSyB-RnLD-L-iWwNDFpKo-3cwMPTRmCaHA3U',
  authDomain: 'vuechat-daa8c.firebaseapp.com',
  projectId: 'vuechat-daa8c',
  storageBucket: 'vuechat-daa8c.appspot.com',
  messagingSenderId: '317298213632',
  appId: '1:317298213632:web:5d750a362d01355e2c29e5',
}

const db = firebase.initializeApp(config)
export default db

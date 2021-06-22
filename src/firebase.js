import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDJJMFPx8Kko8KcYOqERULp4JG5lrZc964",
	authDomain: "messenger-913f3.firebaseapp.com",
	projectId: "messenger-913f3",
	storageBucket: "messenger-913f3.appspot.com",
	messagingSenderId: "514137222005",
	appId: "1:514137222005:web:6ace30f0c90d624461013c",
	measurementId: "G-KK42G7YRV7",
});

const db = firebase.firestore();

export default db;

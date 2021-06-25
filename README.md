# messenger
A ReactJS Application with firebase in the backend.

# Usage
  ```
  $ git clone https://github.com/ridamsharma33/messenger.git
  $ cd messenger-master
  $ npm install
  $ npm start
  
  ```
# API key
1. Get your Firebase credentials @ https://firebase.google.com/
2. Copy / paste your Firebase config to Firebase.js file :
```

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  AuthDomain: "YOUR_PROJECT_AUTH_DOMAIN",
  databaseURL: "YOUR_PROJECT_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_STORAGE_BUCKET",
  messagingSenderId: "YOUR_PROJECT_MESSAGING_SENDER_ID",
  appId: "YOUR_PROJECT_APP_ID"
});

```

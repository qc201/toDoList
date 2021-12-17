const firebaseConfig = {
    apiKey: "AIzaSyAK6Ncu_Ee9H-nXNZBa3KPst1kPXVWmLWQ",
    authDomain: "to-do-app--q.firebaseapp.com",
    projectId: "to-do-app--q",
    storageBucket: "to-do-app--q.appspot.com",
    messagingSenderId: "983557075050",
    appId: "1:983557075050:web:a4ade20d3a35746e74da13",
    measurementId: "G-G9VFDVCXPY"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
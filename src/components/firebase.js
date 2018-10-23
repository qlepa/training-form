import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCDs85lHpz0_Kfv0gF0iurQhKUzqFDMl9s",
    authDomain: "trainingform-785ad.firebaseapp.com",
    databaseURL: "https://trainingform-785ad.firebaseio.com",
    projectId: "trainingform-785ad",
    storageBucket: "",
    messagingSenderId: "135868122850",

};

firebase.initializeApp(config);

const fire = firebase.firestore();
fire.settings({ timestampsInSnapshots: true });

export const db = fire;
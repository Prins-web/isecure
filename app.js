// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCg3yrPAlz99LMC9y_2u2qHQey16ug0Km8",
  authDomain: "i-society-d4b84.firebaseapp.com",
  projectId: "i-society-d4b84",
  storageBucket: "i-society-d4b84.firebasestorage.app",
  messagingSenderId: "98425876923",
  appId: "1:98425876923:web:a6e44d0776a8a4ea8c149e",
  measurementId: "G-1PNX0TJQ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Login Function
document.getElementById("googleBtn").addEventListener("click", async () => {

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Welcome ${user.displayName} (${user.email})`);
    console.log(user);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

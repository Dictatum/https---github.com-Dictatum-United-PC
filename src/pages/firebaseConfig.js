// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPVqSki4pot93CMsTMJLyesvZwvFahb1Q",
  authDomain: "unitedpc-722c1.firebaseapp.com",
  projectId: "unitedpc-722c1",
  storageBucket: "unitedpc-722c1.firebasestorage.app",
  messagingSenderId: "445172444285",
  appId: "1:445172444285:web:a79a75faf3ad11aca85514",
  measurementId: "G-56VYVSRRB5"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth(app);

export { auth };

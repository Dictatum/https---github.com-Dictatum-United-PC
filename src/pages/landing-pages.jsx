// LandingPage.jsx
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate for routing
import { auth } from "./firebaseConfig";  // Import the Firebase Auth instance
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  // Firebase auth methods

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and register
  const [email, setEmail] = useState("");  // For email input
  const [password, setPassword] = useState("");  // For password input
  const [confirmPassword, setConfirmPassword] = useState("");  // For confirm password (only in register)
  const [message, setMessage] = useState("");  // For displaying success/error messages

  const navigate = useNavigate();  // Initialize useNavigate for navigation

  // Toggle between login and register form
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage("");  // Clear message when switching forms
  };

  // Handle registration with Firebase Authentication
  const handleRegister = async () => {
    if (email && password && password === confirmPassword) {
      try {
        // Use Firebase Authentication to create a new user
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Registration successful!");
        setIsLogin(true); // Switch to login after successful registration
      } catch (error) {
        setMessage(error.message); // Display Firebase error message
      }
    } else {
      setMessage("Passwords do not match or fields are empty.");
    }
  };

  // Handle login with Firebase Authentication
  const handleLogin = async () => {
    if (email && password) {
      try {
        // Use Firebase Authentication to log in the user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");
        navigate("/home");  // Navigate to home page on successful login
      } catch (error) {
        setMessage(error.message); // Display Firebase error message
      }
    } else {
      setMessage("Please enter both email and password.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#1d1d1d",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2d2d2d",
          color: "white",
          padding: "40px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
            color: "#f44336",
          }}
        >
          {isLogin ? "Log In" : "Register"}
        </Typography>

        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#bbb" } }}
          />
          {!isLogin && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#bbb" } }}
            />
          )}

          <Button
            variant="contained"
            fullWidth
            onClick={isLogin ? handleLogin : handleRegister}
            sx={{
              marginTop: "20px",
              backgroundColor: "#f44336",
              color: "white",
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            {isLogin ? "Log In" : "Register"}
          </Button>
        </form>

        {message && (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              marginTop: "20px",
              color: message.includes("success") ? "#4caf50" : "#f44336",
            }}
          >
            {message}
          </Typography>
        )}

        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: "20px", color: "#bbb" }}
        >
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Button
            variant="text"
            onClick={toggleForm}
            sx={{ color: "#f44336", fontWeight: "bold" }}
          >
            {isLogin ? "Register" : "Log In"}
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;

"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "../../Styles/page.module.css";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    alert("Signup successful!");
    window.location.href = "/Home";
  };

  const handleGoogleSignup = async () => {
    await signIn("google", { callbackUrl: "/Home" });
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assests/bg.jpg')",
      }}
    >
      <div className={`${styles.formContainer} ${styles.animateGlow}`}>
        <h1 className={`${styles.fontArcade} ${styles.textNeonPink} text-3xl text-center mb-8 tracking-wide`}>
          Arcade Signup
        </h1>

        <form onSubmit={handleSubmit}>
        

          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.formInput}`}
            />
          </div>

          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.formInput}`}
            />
          </div>

          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${styles.formInput}`}
            />
          </div>

          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}

          <button type="submit" className={`${styles.formButton}`}>
            Signup
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignup}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign up with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <a href="/Login" className="text-blue-500 hover:underline">
            Already have an account? Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;

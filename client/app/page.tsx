"use client";
import React, { useState } from "react";
import styles from "../Styles/page.module.css";

const Home: React.FC = () => {
  const staticUsername = "admin";
  const staticPassword = "admin";
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username === staticUsername && password === staticPassword) {
      window.location.href = "/Home";
    } else {
      const audio = new Audio('./gameover.mp3');
      audio.play();
      setIsPasswordCorrect(false);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const getMaskedPassword = (password: string) => {
    return password.split("").map((_, index) => {
      return index % 2 === 0 ? "X" : "O";
    }).join("");
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
          Arcade Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className={`${styles.formLabel}`} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={handlePasswordChange}
              className={`${styles.formInput}`}
            />
            {password && (
              <div className="mt-2 text-sm text-gray-500">
                {getMaskedPassword(password)}
              </div>
            )}
          </div>

          {!isPasswordCorrect && (
            <div className="text-red-500 text-center mt-4">Game Over! Try again.</div>
          )}

          <button type="submit" className={`${styles.formButton}`}>
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/Signup" className="text-blue-500 hover:underline">Dont have an account? Sign up here</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

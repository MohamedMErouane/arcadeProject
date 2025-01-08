import React from "react";
import styles from "../Styles/page.module.css"; 

const Home: React.FC = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/assests/arcade.jpg')", 
      }}
    >
      <div className={`${styles.formContainer} ${styles.animateGlow}`}>
        <h1 className={`${styles.fontArcade} ${styles.textNeonPink} text-3xl text-center mb-8 tracking-wide`}>
          Arcade Login
        </h1>

        <form>
          <div className="mb-6">
            <label
              className={`${styles.formLabel}`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className={`${styles.formInput}`}
            />
          </div>

          <div className="mb-6">
            <label
              className={`${styles.formLabel}`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`${styles.formInput}`}
            />
          </div>

          <button
            type="submit"
            className={`${styles.formButton}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

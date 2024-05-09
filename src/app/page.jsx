"use client"
import Head from 'next/head';
import styles from "./globals.css";
import { FaFacebookF, FaGithub, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";




export default function Home() {
  const handleRegister = () => {
    const container = document.getElementById('container');
    container.classList.add("active");
  };

  const handleLogin = () => {
    const container = document.getElementById('container');
    container.classList.remove("active");
  };

  return (
    <div className='body'>
    <div className={styles.container}>
      <Head>
        <title>Modern Login Page</title>
        <meta name="description" content="Modern Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
              <a href="#" className="icon"><FaGithub /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
              <a href="#" className="icon"><FaGithub /></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Please input your personal details to unlock full access to all site features.</p>
              <button className="hidden" id="login" onClick={handleLogin}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, There!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" id="register" onClick={handleRegister}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

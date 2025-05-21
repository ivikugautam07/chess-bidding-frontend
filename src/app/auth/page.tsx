'use client';


import React, { useState } from 'react';
import './auth.css';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formType, setFormType] = useState<'login' | 'register' | null>(null);
  const handleOpen = (type: 'login' | 'register') => setFormType(type);
  const handleClose = () => setFormType(null);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    try {
      await login(email, password);  // This sets token + user
      router.push('/');              // Redirect to homepage
    } catch (err) {
      console.error('Login failed:', err);
    }
  };
  return (
    <div className="auth-page">
      {/* === NAVBAR === */}
      <nav className="navbar">
        <div className="navbar-left">
          {/* <img src="/chess-logo.svg" className="navbar-logo" alt="Logo" /> */}
          <span className="navbar-title"> ♟️Chess Bid</span>
        </div>
        <div className="navbar-right">
          <button className="navbar-btn outline" onClick={() => handleOpen('login')}>Login</button>
          <button className="navbar-btn" onClick={() => handleOpen('register')}>Register</button>
        </div>
      </nav>

      {/* === HERO BANNER === */}
      <section className="auth-banner">
        <h1>Welcome to the Chess Bidding Arena</h1>
        <p>Place bids. Make moves. Predict the outcome.</p>
      </section>

      {/* === AUTH CONTAINER === */}
      <div className="auth-container">
        {/* === AUTH CARD === */}
        {formType && (
          <div className="auth-card-glass">
            <div className="auth-card-image" style={{ backgroundImage: "url('/auth-bg.jpg')" }} />
            <div className="auth-card-content">
              <h2>{formType === 'login' ? 'Login' : 'Register'}</h2>
              <form className="auth-form" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>

              <div className="auth-divider">or continue with</div>
              <div className="social-buttons">
                <button className="social-btn">Google</button>
                <button className="social-btn">GitHub</button>
              </div>
              <div className="auth-toggle">
                {formType === 'login' ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={() => setFormType(formType === 'login' ? 'register' : 'login')}>
                  {formType === 'login' ? 'Register' : 'Login'}
                </button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button className="navbar-btn outline" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === FEATURES SECTION === */}
      <div className="feature-grid top-row">
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/play.jpg')" }}>
          <div className="feature-content">
            <h3>Play Online</h3>
            <p>Challenge players from around the world in real-time games.</p>
          </div>
        </div>
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/tactics.jpg')" }}>
          <div className="feature-content">
            <h3>Tactics Trainer</h3>
            <p>Sharpen your skills with puzzles and pattern recognition.</p>
          </div>
        </div>
      </div>

      <div className="feature-grid">
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/lessons.jpg')" }}>
          <div className="feature-content">
            <h3>Chess Lessons</h3>
            <p>Learn from interactive videos and tutorials.</p>
          </div>
        </div>
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/leaderboard.jpg')" }}>
          <div className="feature-content">
            <h3>Leaderboards</h3>
            <p>Track your progress and compete globally.</p>
          </div>
        </div>
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/tournament.jpg')" }}>
          <div className="feature-content">
            <h3>Join Tournaments</h3>
            <p>Compete in rapid, blitz, bullet, and daily events.</p>
          </div>
        </div>
        <div className="feature-tile with-image" style={{ backgroundImage: "url('/community.jpg')" }}>
          <div className="feature-content">
            <h3>Community Forums</h3>
            <p>Connect, chat, and learn with other players.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

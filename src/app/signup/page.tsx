'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push('/'); // Redirect to home after signup
    } catch (err) {
      setError('Signup failed. Try a different email.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

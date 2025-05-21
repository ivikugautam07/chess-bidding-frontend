'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const { user, token, logout , loading } = useAuth();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true); // 🔄 new state

  
  useEffect(() => {
  if (!loading) {
    if (token === null) {
      router.push('/auth');
    } else {
      setCheckingAuth(false);
    }
  }
}, [token, loading]);



  if (checkingAuth) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>Loading...</p>
        <div className="spinner" />
        <style jsx>{`
          .spinner {
            margin: 20px auto;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-top-color: #000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome, {user?.email}</h1>
      <p>This is a protected page only visible to logged-in users.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

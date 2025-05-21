'use client';

'use client';

import { createContext, useState, useContext, useEffect } from 'react';
// rest of your code
import { useRouter } from 'next/navigation'; // ✅ Import router

// Define the shape of the user object
type User = {
  username: any;
  id: number;
  email: string;
};

// Define the shape of the AuthContext
type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provide the AuthContext to children
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // ✅ Initialize router

  // Load token and fetch user on app start
  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    const initAuth = async () => {
      if (storedToken) {
        setToken(storedToken);
        await fetchUser(storedToken);
      }
      setLoading(false); // done whether token exists or not
    };

    initAuth();
  }, []);

  // Fetch user details using JWT
  const fetchUser = async (jwt: string) => {
    try {
      const res = await fetch('http://localhost:3000/auth/me', {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.error('Failed to fetch user:', err);
    }
  };

  // Login function with redirect to homepage
  const login = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      setToken(data.access_token);
      await fetchUser(data.access_token);
      router.push('/'); // ✅ Redirect to homepage instead of auth
    } else {
      throw new Error('Login failed');
    }
  };

  // Signup function (calls login after creating account)
  const signup = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      await login(email, password); // Automatically logs in and redirects
    } else {
      throw new Error('Signup failed');
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    router.push('/auth'); // ✅ Send user back to auth page on logout
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

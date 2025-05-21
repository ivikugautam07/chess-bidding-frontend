'use client';

import { useAuth } from '@/context/AuthContext'; // ✅ ensure casing matches the file
import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css'; // ✅ ensure file name is lowercase

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>♟️ CheckMate</div>

        <nav className={styles.nav}>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Download</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Contact</Link>
        </nav>

        <div className={styles.actions}>
          {!user ? (
            <Link href="/login">
              <button className={styles.primary}>Sign In</button>
            </Link>
          ) : (
            <div className={styles.profileWrapper}>
              <div className={styles.avatar} onClick={() => setMenuOpen(!menuOpen)}>
                {user.email.charAt(0).toUpperCase()}
              </div>
              {menuOpen && (
                <div className={styles.dropdown}>
                  <div><strong>{user.username}</strong></div>
                  <div>{user.email}</div>
                  <button onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

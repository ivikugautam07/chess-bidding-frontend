'use client';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <span style={styles.logo}>♟ ChessBid</span>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Terms</a>
          <a href="#" style={styles.link}>Privacy</a>
          <a href="https://github.com/vikash865/chess-bidding" style={styles.link} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p style={styles.credit}>© {new Date().getFullYear()} ChessBid. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#0d0d0d',
    color: '#aaa',
    padding: '2rem 1rem',
    textAlign: 'center',
  },
  content: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '1rem',
    color: '#fff',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  credit: {
    fontSize: '0.8rem',
    color: '#666',
  },
};

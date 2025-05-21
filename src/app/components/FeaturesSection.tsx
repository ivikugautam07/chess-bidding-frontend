'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: '♟',
      title: 'Bidding-Based Game Mechanics',
      description: 'Players bid to decide who gets to move next. Outsmart your opponent with strategy and economy.',
    },
    {
      icon: '⚡',
      title: 'Real-Time Move Validation',
      description: 'Moves are validated instantly using chess engine logic, ensuring fair and fast gameplay.',
    },
    {
      icon: '🔒',
      title: 'Secure Login & Fair Play System',
      description: 'All games are protected with JWT-authenticated sessions to prevent cheating and spoofing.',
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>✨ Platform Features</h2>

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{feature.icon}</div>
            <h3 style={styles.title}>{feature.title}</h3>
            <p style={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '3rem 2rem',
    backgroundColor: '#121212',
    color: 'white',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  },
  card: {
    width: '300px',
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  description: {
    color: '#ccc',
  },
};

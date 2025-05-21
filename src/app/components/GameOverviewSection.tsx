'use client';

import React from 'react';

export default function GameOverviewSection() {
  // Placeholder mock data
  const ongoingGames = [
    { id: 1, opponent: 'alice', status: 'In Progress' },
    { id: 2, opponent: 'bob', status: 'Your Turn' },
  ];

  const openGames = [
    { id: 3, creator: 'charlie', timeControl: '5+0' },
    { id: 4, creator: 'david', timeControl: '3+2' },
  ];

  const completedGames = [
    { id: 5, opponent: 'emma', result: 'Won' },
    { id: 6, opponent: 'frank', result: 'Lost' },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>🎮 Your Games</h2>

      <div style={styles.section}>
        <h3>Ongoing Games</h3>
        {ongoingGames.map((game) => (
          <div key={game.id} style={styles.card}>
            <p>vs {game.opponent}</p>
            <p>Status: {game.status}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h3>Open Games</h3>
        {openGames.map((game) => (
          <div key={game.id} style={styles.card}>
            <p>Host: {game.creator}</p>
            <p>Time: {game.timeControl}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h3>Completed Games</h3>
        {completedGames.map((game) => (
          <div key={game.id} style={styles.card}>
            <p>vs {game.opponent}</p>
            <p>Result: {game.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    backgroundColor: '#1e1e1e',
    color: 'white',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  section: {
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#2c2c2c',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  },
};

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import styles from './styles/hero.module.css';
import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  const router = useRouter();
  const { user, token, logout, loading } = useAuth();

  // 🔒 Redirect to /auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading]);

  // 🕗 Show loading while checking auth
  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  // 🔐 After loading, if not logged in, don't render UI
  if (!user) return null;

  return (
    <div className={styles.hero}>
      <div className={styles.pageWrapper}>
        <Header />

        <main className={styles.mainContent}>
          {/* Hero Section */}
          {/* <div className={styles.heroWrapper}>
            <div className={styles.sectionWrapper}>
            <div className={styles.textContent}>
              <h1>
                Where <span className={styles.highlight}>chess minds</span> bid & battle
              </h1>
              <p>
                Stream competitive chess games, bid on outcomes, and engage in real-time with your community — all on one platform.
              </p>
              <div className={styles.buttons}>
                <button className={styles.primaryBtn}>Join a Game</button>
                <button className={styles.secondaryBtn}>Watch Demo</button>
              </div>
            </div>

            <div className={styles.videoMockup}>
              <Image
                src="/chess1.png"
                alt="Chess Visual"
                width={400}
                height={400}
                className={styles.mockupImage}
              />
            </div>
          </div> */}

          {/* <div className={styles.sectionWrapper}>
            <div className={styles.heroContainer}>
              <h1>
                Welcome back, <span className={styles.high}>{user?.username || 'Player'}</span>!
              </h1>
              <p>
                Stream competitive chess games, bid on outcomes, and engage in real-time with your community — all on one platform.
              </p>
              <div className={styles.btn}>
                <button className={styles.joinBtn}>Join a Game</button>
                <button className={styles.watchBtn}>Watch Demo</button>
              </div>
            </div>

            <div className={styles.heroImage}>
              <img src="/chess2.png" alt="Chess" width={400} height={400} />
            </div>
          </div>
          </div> */}
          {/* <div className={styles.heroSection}>
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
              <div className={styles.textArea}>
                <h1>
                  Where <span className={styles.highlight}>chess minds</span> bid & battle
                </h1>
                <p>
                  Bid on live games. Predict moves. Earn glory.<br />A new era of interactive chess begins here.
                </p>
                <div className={styles.ctaButtons}>
                  <button className={styles.ctaPrimary}>Join a Game</button>
                  <button className={styles.ctaSecondary}>Watch Demo</button>
                </div>
              </div>

              <div className={styles.visualArea}>
                <Image
                  src="/chess1.png"
                  alt="Chess Visual"
                  width={500}
                  height={500}
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div> */}
          <div className={styles.heroContainer}>
            <div className={styles.leftContent}>
              {/* <h1>
                Where<br />
                <span className={styles.highlight}>chess minds</span><br />
                bid & battle
              </h1> */}
              <h1 className={styles.heroTitle}>
                Where <br />
                <span className={styles.highlightGroup}>
                  <span className={styles.chess}>chess</span> 
                  <span className={styles.minds}>minds</span>
                </span> 
                <br />
                bid & battle
              </h1>

              <p className={styles.subtext}>
                Step into the arena — place your bids, make your move, dominate the board.
              </p>
              <div className={styles.buttonGroup}>
                <button className={styles.primaryBtn}>Wanna Bid?</button>
                <button className={styles.secondaryBtn}>See It In Action</button>
              </div>
            </div>

            <div className={styles.rightFrame}>
              <div className={styles.frame}>
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src="/chess-vdo-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>
          </div>


          {/* Leaderboard Section */}
          <section className={styles.leaderboardSection}>
            <h2>Bidding Leaderboard</h2>
            <div className={styles.leaderboardGrid}>
              {[
                { name: 'AlphaKnight', wins: 24, joined: 30 },
                { name: 'RookSlayer', wins: 19, joined: 25 },
                { name: 'EndgameBoss', wins: 16, joined: 20 },
                { name: 'PawnStorm', wins: 13, joined: 18 },
                { name: 'BlitzWizard', wins: 11, joined: 15 },
                { name: 'TaticMaster', wins: 16, joined: 20 },
                { name: 'OPeningQueen', wins: 13, joined: 18 },
                { name: 'KnightKing', wins: 11, joined: 15 },
              ].map((player, index) => (
                <div key={index} className={styles.leaderboardCard}>
                  <h3>#{index + 1} {player.name}</h3>
                  <p>Games Joined: {player.joined}</p>
                  <p>Wins: {player.wins}</p>
                  <p>Win Rate: {Math.round((player.wins / player.joined) * 100)}%</p>
                </div>
              ))}
            </div>
          </section>
          {/* Battles Section */}
          <section className={styles.battlesSection}>
            <h2>Your Current Battles</h2>
            <div className={styles.battlesGrid}>
              <div className={styles.battleCard}>
                <h3>vs Magnus Carlsen</h3>
                <p>Status: In Progress — You’re Black</p>
                <button className={styles.resumeBtn}>Resume</button>
              </div>
              <div className={styles.battleCard}>
                <h3>vs Hikaru Nakamura</h3>
                <p>Status: Waiting for Opponent</p>
                <button className={styles.resumeBtn}>Resume</button>
              </div>
              <div className={styles.battleCard}>
                <h3>vs AlphaZero</h3>
                <p>Status: You’re White — Your Move</p>
                <button className={styles.resumeBtn}>Resume</button>
              </div>
            </div>
          </section>
          {/* Replays Section */}
          <section className={styles.replaysSection}>
            <h2>Top Game Replays</h2>
            <div className={styles.replaysGrid}>
              {[
                { players: 'AlphaKnight vs RookSlayer', result: '1-0', id: 1 },
                { players: 'PawnStorm vs BlitzWizard', result: '0-1', id: 2 },
                { players: 'EndgameBoss vs DarkHorse', result: '½-½', id: 3 },
                { players: 'KnightHunter vs CheckGuru', result: '1-0', id: 4 },
                { players: 'QueenTrap vs ForkMaster', result: '0-1', id: 5 },
                { players: 'CastleCrush vs CenterFile', result: '1-0', id: 6 },
              ].map((game, index) => (
                <div key={index} className={styles.replayCard}>
                  <h3>{game.players}</h3>
                  <p>Result: {game.result}</p>
                  <button className={styles.watchReplayBtn}>Watch Replay</button>
                </div>
              ))}
            </div>
          </section>
          {/* How It Works Section */}
          <section className={styles.howItWorksSection}>
            <h2>How It Works</h2>
            <div className={styles.stepsGrid}>
              {[
                {
                  title: '1. Join a Live Game',
                  desc: 'Browse upcoming or live games and pick one to follow in real-time.',
                },
                {
                  title: '2. Place Your Bids',
                  desc: 'Predict key moments like moves, outcomes, or player decisions using virtual tokens.',
                },
                {
                  title: '3. Win & Earn XP',
                  desc: 'If your predictions are right, earn rewards, climb the leaderboard, and unlock replays!',
                },
              ].map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Testimonials */}
          <section className={styles.testimonialSection}>
            <h2>What Our Community Says</h2>
            <div className={styles.testimonialGrid}>
              {[
                {
                  name: 'Adarsh',
                  quote: 'This platform changed the way I watch chess. Bidding adds so much excitement!',
                },
                {
                  name: 'Keshav',
                  quote: 'Finally, a place where chess meets strategy, prediction, and fun. Love the leaderboard!',
                },
                {
                  name: 'Rohit',
                  quote: 'I joined casually, now I’m bidding daily and climbing the rankings. Addicted!',
                },
                {
                  name: 'Ritik',
                  quote: 'My friends and I now compete daily. It’s like fantasy sports but for chess.',
                },
                {
                  name: 'Himanshu',
                  quote: 'Clean UI, smooth experience, and finally a fresh take on chess watching.',
                },
                {
                  name: 'Jatin',
                  quote: 'The bidding feature makes every game unpredictable — I love the thrill!',
                },
              ].map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className={styles.quote}>"{testimonial.quote}"</p>
                  <p className={styles.name}>– {testimonial.name}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h4>♟️ Chess Zones</h4>
              <a href="#">Live Games</a>
              <a href="#">Blitz Battles</a>
              <a href="#">Tournaments</a>
              <a href="#">Game Replays</a>
              <a href="#">Analysis Room</a>
              <a href="#">Chess Engine</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>🎯 Bidding</h4>
              <a href="#">Ongoing Bids</a>
              <a href="#">Bid History</a>
              <a href="#">Bid Rules</a>
              <a href="#">My Bids</a>
              <a href="#">How to Bid</a>
              <a href="#">Payouts</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>💡 Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Report a Bug</a>
              <a href="#">Contact Team</a>
              <a href="#">Feedback</a>
              <a href="#">Fair Play Policy</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>🏢 About</h4>
              <a href="#">Our Vision</a>
              <a href="#">Meet the Team</a>
              <a href="#">Blog</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>💳 Payments</h4>
              <a href="#">Deposit Guide</a>
              <a href="#">Withdrawal Policy</a>
              <a href="#">Supported Wallets</a>
              <a href="#">Crypto Bidding</a>
              <a href="#">Vault System</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>📘 Guides</h4>
              <a href="#">How Bidding Works</a>
              <a href="#">Strategy Guide</a>
              <a href="#">New User Walkthrough</a>
              <a href="#">Chess Openings</a>
              <a href="#">Fairness & Verification</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className={styles.socialRow}>
            <a href="#"><img src="/twitter.png" alt="X" /></a>
            <a href="#"><img src="/discord.png" className={styles.whiteLogo} /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
            <a href="#"><img src="/twitch.png" alt="Twitch" /></a>
            <a href="#"><img src="/github.png" alt="GitHub" /></a>
          </div>

          {/* Payment Logos */}
          <div className={styles.paymentLogos}>
            <img src="/bitcoin.png" alt="Bitcoin" />
            <img src="/etherium.png" alt="Ethereum" />
            <img src="/digital.png" alt="USDT" />
            <img src="/solana.png" alt="Solana" />
            <img src="/bitcoin.png" alt="MetaMask" />
            <img src="/phone.png" alt="WalletConnect" />
            <img src="/stripe.png" alt="Stripe" />
          </div>
          {/* Legal & Footer Bar */}
          <div className={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} CheckMate. All rights reserved.</p>
            <p>♟️ Built for Chess Lovers | 18+ | Fair Play Guaranteed</p>
          </div>
        </footer>

      </div>
    </div>
  );
}


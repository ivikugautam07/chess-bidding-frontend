// 'use client';

// import React from 'react';
// import styles from './HeroSection.module.css';

// type Props = {
//   username: string;
// };

// export default function HeroSection({ username }: Props) {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.overlay} />
//       <div className={styles.content}>
//         <h1 className={styles.title}>
//           Welcome back, <span className={styles.username}>{username}</span>
//         </h1>
//         <p className={styles.subtitle}>
//           Predict chess outcomes. Bid. Win. Make every move count.
//         </p>
//         <a href="#games" className={styles.cta}>
//           Explore Live Games
//         </a>
//       </div>
//     </section>
//   );
// }
'use client';
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      {/* LEFT TEXT SECTION */}
      <div className={styles.textSection}>
        <h1>
          Where <span className={styles.highlight}>chess minds</span><br />
          <span className={styles.highlight}>collaborate</span>
        </h1>
        <p>
          Experience high-stakes chess bidding games live. Compete, bid, and strategize
          with players worldwide—all in one seamless platform.
        </p>
        <div className={styles.buttons}>
          <button className={styles.playBtn}>PLAY VIDEO</button>
          <button className={styles.demoBtn}>BOOK LIVE DEMO</button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className={styles.imageSection}>
        <Image
          src="/video-placeholder.jpg" // Use a relevant image here
          alt="Demo call"
          width={600}
          height={340}
          className={styles.videoFrame}
        />
      </div>
    </div>
  );
}

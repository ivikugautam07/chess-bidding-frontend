// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import Header from '../components/Header';
// import HeroSection from '../components/HeroSection';
// import GameOverviewSection from '../components/GameOverviewSection';
// import FeaturesSection from '../components/FeaturesSection';
// import Footer from '../components/Footer';

// export default function HomePage() {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!user) {
//       router.push('/login');
//     }
//   }, [user]);

//   if (!user) return null;

//   return (
//     <div>
//       <Header />
//       <HeroSection username={user.username} />
//       <GameOverviewSection />
//       <FeaturesSection />
//       <Footer />
//     </div>
//   );
// }

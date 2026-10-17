import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import EssentialConversations from '../components/EssentialConversations';
import ProudToHave from '../components/ProudToHave';
import WhereToStart from '../components/WhereToStart';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <IntroSection />
      {/* <EssentialConversations /> */}
      <ProudToHave />
      <WhereToStart />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

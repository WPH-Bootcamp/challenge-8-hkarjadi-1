import Navbar from '../components/layout/Navbar';

import HeroSection from '../components/sections/HeroSection';
import TrustedSection from '../components/sections/TrustedSection';
import EndtoEndSection from '../components/sections/EndtoEndSection';
import OurProcessSection from '../components/sections/OurProcessSection';
import SmartITSection from '../components/sections/SmartITSection';
import BuiltSection from '../components/sections/BuiltSection';
import PortofolioSection from '../components/sections/PortofolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className='min-h-screen font-sand text-base bg-white text-black dark:bg-black dark:text-white'>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedSection />
        <EndtoEndSection />
        <OurProcessSection />
        <SmartITSection />
        <BuiltSection />
        <PortofolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

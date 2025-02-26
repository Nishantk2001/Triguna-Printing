import AboutUs from '../../Components/AboutUs/AboutUs';
import Contact from '../../Components/Contact/Contact';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
}

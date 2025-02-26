import AboutUs from '../../Components/AboutUs/AboutUs';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <Footer/>
    </div>
  );
}

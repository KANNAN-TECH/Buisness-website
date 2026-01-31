import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <Pricing />
            <Testimonials />
            <Contact />
            <WhatsAppButton />
        </>
    );
}

export default Home;

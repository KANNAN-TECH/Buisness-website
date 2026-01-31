import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Pricing />
                <Testimonials />
                <Contact />
            </main>
            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;

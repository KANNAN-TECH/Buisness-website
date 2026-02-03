import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import CTASection from "./components/CTASection";

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <WhyChooseUs />
                <Pricing />
                <Testimonials />
                <CTASection />
                <Contact />
            </main>
            <WhatsAppButton />
            <Footer />
        </ThemeProvider>
    );
}

export default App;

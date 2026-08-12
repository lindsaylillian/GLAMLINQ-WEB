import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutStory from "../components/AboutStory";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Booking from "./Booking";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MeetArtist from "../components/MeetArtist";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutStory />
      <Services />
      <MeetArtist />
      <Portfolio />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
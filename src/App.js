import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/hero-section';
import Highlights from './components/highlights';
import Testimonials from './components/testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Highlights />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

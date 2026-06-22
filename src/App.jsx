import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Specializations from './components/Specializations';
import HandiwaveCaseStudy from './pages/HandiwaveCaseStudy';

function App() {
  const isHandiwaveCaseStudy = window.location.pathname === '/projects/handiwave';

  return (
    <div className="min-h-screen bg-[#05050A] text-white">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-black"
        href="#main-content"
      >
        Skip to content
      </a>
      {isHandiwaveCaseStudy ? (
        <HandiwaveCaseStudy />
      ) : (
        <>
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Specializations />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;

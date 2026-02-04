import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CustomSoftware from './pages/CustomSoftware';
import { CaseStudiesList, CaseStudyDetail } from './pages/CaseStudies';
import ServiceTemplate from './pages/ServiceTemplate';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/:slug" element={<ServiceTemplate />} />
          <Route path="/case-studies" element={<CaseStudiesList />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

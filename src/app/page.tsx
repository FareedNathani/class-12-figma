// pages/index.tsx
import Navbar from './component/Navbar'; // Corrected path
import Hero from './component/Hero'; // Corrected path
import Features from './component/Features'; // Corrected path
import Footer from './component/Footer'; // Corrected path
import ProjectManagement from './component/ProjectManagement'; // Corrected path

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectManagement />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;

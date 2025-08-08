import "./App.css";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/About/AboutUs";
import Ourcourses from "./Pages/Courses/Ourcourses";
import BranchesSection from "./Pages/Contact/BranchesSection";
import HeroCarousel from "./Pages/Home/HeroCarousel";
import ContactSection from "./Pages/Contact/ContactUs";

function App() {
  return (
    <>
      <HeroCarousel />
      <div style={{ position: "relative", top: "-100px" }}>
        <AboutUs />
        <Ourcourses />
        <ContactSection />
        <BranchesSection />
      </div>

      <Footer />
    </>
  );
}

export default App;

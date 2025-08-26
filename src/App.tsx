import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/About/AboutUs";
import Ourcourses from "./Pages/Courses/Ourcourses";
import BranchesSection from "./Pages/Contact/BranchesSection";
import HeroCarousel from "./Pages/Home/HeroCarousel";
import ContactSection from "./Pages/Contact/ContactUs";
import Classpage from "./Pages/Home/Classpage";
import Blog from "./Pages/Blog/Blog";
import WhatsappMessage from "./Pages/whatsapp.tsx/WhatsappMessage";
import BeginnerCourse from "./Pages/Courses/BeginnerCourse";
import IntermediateCourse from "./Pages/Courses/IntermediateCourse";
import AdvancedCourse from "./Pages/Courses/AdvancedChessCourse";
import ScrollToTop from "./Components/ScrollToTop";
// import TawkChat from "./Pages/whatsapp.tsx/TawkChat";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel />
              <div id="about" style={{ position: "relative", top: "-70px" }}>
                <AboutUs />
              </div>
              <div id="courses">
                <Ourcourses />
              </div>
              <div id="classes">
                <Classpage />
              </div>
              <div id="blog">
                <Blog />
              </div>
              <div id="contact">
                <ContactSection />
              </div>
              <div id="branches">
                <BranchesSection />
              </div>
              <div>
                {/* <TawkChat /> */}
              </div>
              <div>
                <WhatsappMessage />
              </div>
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Ourcourses />} />
        <Route path="/classes" element={<Classpage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/branches" element={<BranchesSection />} />
        <Route path="/courses/beginner" element={<BeginnerCourse />} />
        <Route path="/courses/intermediate" element={<IntermediateCourse />} />
        <Route path="/courses/advanced" element={<AdvancedCourse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

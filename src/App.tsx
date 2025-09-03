import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import HeroCarousel from "./Pages/Home/HeroCarousel";
import ScrollToTop from "./Components/ScrollToTop";
import { lazy, Suspense } from "react";
import WhatsappMessage from "./Pages/whatsapp.tsx/WhatsappMessage";

const AboutUs = lazy(() => import("./Pages/About/AboutUs"));
const Ourcourses = lazy(() => import("./Pages/Courses/Ourcourses"));
const BranchesSection = lazy(() => import("./Pages/Contact/BranchesSection"));
const ContactSection = lazy(() => import("./Pages/Contact/ContactUs"));
const Classpage = lazy(() => import("./Pages/Home/Classpage"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const BeginnerCourse = lazy(() => import("./Pages/Courses/BeginnerCourse"));
const IntermediateCourse = lazy(
  () => import("./Pages/Courses/IntermediateCourse")
);
const AdvancedCourse = lazy(
  () => import("./Pages/Courses/AdvancedChessCourse")
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
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
                <div>{/* <TawkChat /> */}</div>
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
          <Route
            path="/courses/intermediate"
            element={<IntermediateCourse />}
          />
          <Route path="/courses/advanced" element={<AdvancedCourse />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

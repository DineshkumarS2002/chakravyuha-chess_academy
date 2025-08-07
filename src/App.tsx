import "./App.css";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/About/AboutUs";
// import Navbar from "./Components/Navbar";
import HeroCarousel from "./Pages/Home/HeroCarousel";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCarousel />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;

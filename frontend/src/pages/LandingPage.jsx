import "../App.css";
import Footer from "../components/Footer";
import LandingPageContent from "../components/LandingPageContent";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="h-full w-full font-sora">
      <Navbar />
      <LandingPageContent />
      <Footer />
    </div>
  );
};

export default LandingPage;

import "../App.css";
import Footer from "../components/Footer";
import LandingPageContent from "../components/LandingPageContent";
import Navbar from "../components/Navbar";
import OurCustomers from "./OurCustomers";

const LandingPage = () => {
  return (
    <div className="h-full w-full ">
      <Navbar/>
      <LandingPageContent/>
      <OurCustomers />
      <Footer/>
    </div>
  );
};

export default LandingPage;

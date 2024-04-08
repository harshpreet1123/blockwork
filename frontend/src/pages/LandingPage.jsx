import "../App.css";
import Footer from "../components/Footer";
import LandingPageContent from "../components/LandingPageContent";
import Navbar from "../components/Navbar";
import OurCustomers from "./OurCustomers";
import Ourproducts from "./Ourproducts";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar/>
      <LandingPageContent/>
      <OurCustomers />
      <Ourproducts />
      <Footer/>
    </div>
  );
};

export default LandingPage;

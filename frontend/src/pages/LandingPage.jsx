import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
};

export default LandingPage;

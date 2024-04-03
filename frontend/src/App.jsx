import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Exchange from "./pages/Exchange";
import Category from "./pages/Category";
import Loginpage from "./pages/Login";
import SignUp from "./pages/Register";
import WelcomeAnimation from "./pages/animations/WelcomeAnimation";
import RegisterAnimation from "./pages/animations/RegisterAnimation";
import AddProfileFreelancer from "./pages/freelancer/AddProfileFreelancer";
import AddProfileClient from "./pages/client/AddProfileClient";
import FreelancerHome from "./pages/freelancer/FreelancerHome";
import ClientHome from "./pages/client/ClientHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/category" element={<Category />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/welcome" element={<WelcomeAnimation />} />
          <Route path="/register-animation" element={<RegisterAnimation/>} />
          <Route path="/fr/add-profile" element={<AddProfileFreelancer />} />
          <Route path="/cl/add-profile" element={<AddProfileClient />} />
          <Route path="/cl/home" element={<ClientHome />} />
          <Route path="/fr/home" element={<FreelancerHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

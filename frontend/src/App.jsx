import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Exchange from "./pages/Exchange";
import Category from "./pages/Category";
import Loginpage from "./pages/Loginpage";
import SignUp from "./pages/SignupPage";
import Animation from "./components/AnimationFull";
import AnimationAndContent from "./components/AnimationAndContent";
import AddProfileFreelancer from "./pages/freelancer/AddProfileFreelancer";
import AddProfileClient from "./pages/client/AddProfileClient";
import Home from "./pages/client/Home";
import Home from "./pages/freelancer/Home";

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
          <Route path="/animation1" element={<Animation />} />
          <Route path="/animation2" element={<AnimationAndContent />} />
          <Route path="/fr/add-profile" element={<AddProfileFreelancer />} />
          <Route path="/cl/add-profile" element={<AddProfileClient />} />
          <Route path="/cl/home" element={<Home />} />
          <Route path="/fr/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

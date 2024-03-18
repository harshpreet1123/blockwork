import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Exchange from "./pages/Exchange";
import Category from "./pages/Category";
import Loginpage from "./pages/Loginpage";
import FreelancerPage from "./pages/FreelancerPage";
import SignUp from "./pages/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/category" element={<Category/>}/>
          <Route path="/Loginpage" element={<Loginpage/>}/>
          <Route path="/FreelancerPage" element={<FreelancerPage/>}/>
          <Route path="/SignupPage" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

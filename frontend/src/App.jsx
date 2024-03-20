import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Exchange from "./pages/Exchange";
import Category from "./pages/Category";
import Loginpage from "./pages/Loginpage";
import SignUp from "./pages/SignupPage";
import Animation from "./components/Animation";

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
          <Route path="/animation" element={<Animation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

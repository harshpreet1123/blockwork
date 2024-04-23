import {
  BrowserRouter,
  useNavigate,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import News from "./pages/News";
import Exchange from "./pages/Exchange";
import Team from "./pages/Team";
import Category from "./pages/Category";
import Loginpage from "./pages/Login";
import SignUp from "./pages/Register";
import WelcomeAnimation from "./pages/extra/WelcomeAnimation";
import RegisterAnimation from "./pages/extra/RegisterAnimation";
import AddProfileFreelancer from "./pages/freelancer/AddProfileFreelancer";
import AddProfileClient from "./pages/client/AddProfileClient";
import FreelancerSideBar from "./pages/freelancer/FreelancerSideBar";
import ClientSideBar from "./pages/client/ClientSideBar";
import ViewProfileClient from "./pages/client/ViewProfile";
import Cookies from "js-cookie";
import { useEffect } from "react";
import ViewProfileFreelancer from "./pages/freelancer/ViewProfile";
import CreateJob from "./pages/client/CreateJob";

function App() {
  const token = Cookies.get("token");
  const userType = Cookies.get("userType");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (token && location.pathname === "/") {
      navigate(`/${userType}/home`);
    }
  }, [token, location, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route index element={<LandingPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/team" element={<Team />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/welcome" element={<WelcomeAnimation />} />
        <Route path="/register-animation" element={<RegisterAnimation />} />
        <Route path="/fr/add-profile" element={<AddProfileFreelancer />} />
        <Route path="/cl/add-profile" element={<AddProfileClient />} />
        <Route path="/cl/home" element={<ClientSideBar />} />
        <Route path="/fr/home" element={<FreelancerSideBar />} />
        <Route path="/cl/profile" element={<ViewProfileClient />} />
        <Route path="/fr/profile" element={<ViewProfileFreelancer />} />
        <Route path="/cl/create-job" element={<CreateJob />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

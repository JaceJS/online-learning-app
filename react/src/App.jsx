import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./styles/style.css";
import Navbar from "./components/common/AppNavbar";
import Footer from "./components/common/AppFooter";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;

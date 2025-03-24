import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
import Launches from "./pages/Launches";
import LaunchDetails from "./pages/LaunchDetails";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Launches />} />
                <Route path="/launch/:id" element={<LaunchDetails />} />
            </Routes>
        </Router>
    );
}
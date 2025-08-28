import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import SignIn from "./pages/Auth/SignIn.jsx";
import BuyerPage from "./pages/BuyerSection/BuyerPage.jsx";
import OwnerPage from "./pages/OwnerSection/OwnerPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/owner" element={<OwnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

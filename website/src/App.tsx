import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ItemPage from "./pages/ItemPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import MessagePanel from "./components/MessagePanel";
import MessagePage from "./pages/MessagePage";
import LogoutPage from "./pages/LogoutPage";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <div className="min-h-screen">
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Item Routes */}
              <Route path="/item/:itemID" element={<ItemPage />} />

              {/* Message Routes */}
              <Route path="/messages" element={<MessagePage />} />

              {/* Authentication Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./layouts/navbar";
import { HomePage } from "./pages/Home/Home";
import { Footer } from "./layouts/footer";
import { LoginPage } from "./pages/Auth/Login";

function App() {
  const location = useLocation();

  // Define routes where you want to HIDE Navbar & Footer
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;

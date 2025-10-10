import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./layouts/navbar";
import { HomePage } from "./pages/Home/Home";
import { Footer } from "./layouts/footer";
import { LoginPage } from "./pages/Auth/Login";
import { ComingSoon } from "./pages/Soon/ComingSoon";

function App() {
  const location = useLocation();

  // normalize current path (lowercase, remove trailing slash)
  const currentPath = (location && location.pathname)
    ? location.pathname.toLowerCase().replace(/\/$/, "")
    : "";

  // routes where we want to hide the NavBar and Footer
  const hideOn = ["/login", "/soon"];

  // hide when exact match OR when path starts with the route (covers nested routes)
  const hideLayout = hideOn.some(route => currentPath === route || currentPath.startsWith(route + "/"));

  return (
    <>
      {!hideLayout && <NavBar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/soon" element={<ComingSoon />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;

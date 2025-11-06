import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Auth/Login";

function App() {

  return (
    <>
      {/* {!hideLayout && <NavBar />} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* {!hideLayout && <Footer />} */}
    </>
  );
}

export default App;

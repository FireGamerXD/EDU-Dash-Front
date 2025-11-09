import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Auth/Login";
// import Preloader from "./pages/PreLoader";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading && <Preloader onLoaded={() => setLoading(false)} />}
      {!loading && <HomePage />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

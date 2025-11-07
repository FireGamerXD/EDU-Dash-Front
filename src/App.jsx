import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Auth/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

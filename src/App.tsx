import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/loginForm";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
  );
}

export default App;

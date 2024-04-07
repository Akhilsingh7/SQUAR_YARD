import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/sign-in" element={<SignIn />} />
        <Route to="/sign-out" element={<SignOut />} />
        <Route to="/about" element={<About />} />
        <Route to="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop, Navbar } from "./components";
import ProjectOnePage from "./pages/ProjectOnePage";
import ProjectTwoPage from "./pages/ProjectTwoPage";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects">
          <Route index element="" />
          <Route path=":banking-website" element={<ProjectOnePage />} />
          <Route path=":portfolio-webapp" element={<ProjectTwoPage />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;

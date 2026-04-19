import { Routes, Route } from "react-router-dom";
import { betaniaGlobalStyles } from "./theme/betaniaTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MinistryDetailPage from "./pages/MinistryDetailPage";

betaniaGlobalStyles();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ministerios/:slug" element={<MinistryDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

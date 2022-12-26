import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homepage/Home";
import Team from "./pages/winterschool/winterschool";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ws" element={<WinterSchool />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

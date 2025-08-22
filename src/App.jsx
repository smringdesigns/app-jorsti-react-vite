import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import logo from "./assets/logo.png";
import navItems from "./components/navItems";
import Content from "./components/content";
import ComponenteCustonHook from "./components/components-ejemplo";
import Footer from "./components/footer";

const Home = () => (
  <>
    <h1>Bienvenido a la página principal</h1>
    <Content />
  </>
);

const CustomHookPage = () => (
  <>
    <h1>Ejemplo de Hook personalizado</h1>
    <ComponenteCustonHook />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar logo={logo} navItems={navItems} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-hook" element={<CustomHookPage />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
// app-jorsti/src/App.jsx --- IGNORE ---
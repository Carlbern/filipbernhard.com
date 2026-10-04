import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/home.tsx";
import Projects from "./pages/projects.tsx";
import About from "./pages/about.tsx";
import { Header } from "./components/header.tsx";
import { Footer } from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <title>Filip Bernhard</title>
    <meta name="Author" content="Filip Bernhard" />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);

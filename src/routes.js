import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

export const routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Year_one" element={<FirstYear />} />
    <Route path="/Year_two" element={<SecondYear />} />
    <Route path="/Year_three" element={<ThirdYear />} />
    <Route path="/Year_four" element={<FourtYear />} />
  </Routes>
);

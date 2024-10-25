"use client";
import HomePage from "@/pages/home"
import Contact from "@/pages/contact"
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <main className="main_page">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

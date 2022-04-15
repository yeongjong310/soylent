import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Header, TopBanner } from 'components';
import { Landing } from 'pages';
import Footer from 'components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <TopBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './components/Products';
import Aboutus from './pages/Aboutus';
import Conus from './pages/conus';
import Application from './pages/Application';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/**
 * LayoutWrapper will wrap the content with Navbar and Footer
 */
function LayoutWrapper({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes without Layout */}
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes with Navbar/Footer */}
        <Route
          path="/home"
          element={
            <LayoutWrapper>
              <Home />
            </LayoutWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <LayoutWrapper>
              <Products />
            </LayoutWrapper>
          }
        />
        <Route
          path="/aboutus"
          element={
            <LayoutWrapper>
              <Aboutus />
            </LayoutWrapper>
          }
        />
        <Route
          path="/conus"
          element={
            <LayoutWrapper>
              <Conus />
            </LayoutWrapper>
          }
        />
        <Route
          path="/application"
          element={
            <LayoutWrapper>
              <Application />
            </LayoutWrapper>
          }
        />
      </Routes>


    </Router>
  );
}

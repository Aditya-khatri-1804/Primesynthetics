// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleProductClick = (path) => {
//     navigate(path);
//     setDropdownOpen(false); // ड्रॉपडाउन बंद करें
//   };

//   return (
//     <div>
//       {/* 🔹 Top Bar */}
//       <div className="top-bar">
//         <div className="logo">
//           <img src={logo} alt="Logo" />
//           <h2>𝐏𝐫𝐢𝐦𝐞 𝐒𝐲𝐧𝐭𝐡𝐞𝐭𝐢𝐜𝐬</h2>
//         </div>
//         <div className="contact">
//           <div>📞 +91 932-853-8214</div>
//           <div>✉ info@Primsynthetics.com</div>
//         </div>
//         <a href="#" className="btn-brochure">📄 Brochure</a>
//       </div>

//       {/* 🔹 Bottom Navbar */}
//       <div className="navbar">
//         <Link to="/home">Home</Link>

//         {/* 🔽 Products Dropdown */}
//         <div className="dropdown">
//           <span
//             className="nav-link"
//             onClick={toggleDropdown}
//             style={{ cursor: "pointer" }}
//           >
//             Products ▾
//           </span>

//           {dropdownOpen && (
//             <div className="dropdown-menu">
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/spun-bond")}
//               >
//                 Spun Bond Non Woven Fabrics
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/laminated")}
//               >
//                 Laminated Non Woven Fabrics
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/agricultural")}
//               >
//                 Non Woven Agricultural Products
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/medical")}
//               >
//                 Non Woven Medical Disposables
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/bags")}
//               >
//                 Non Woven Bags
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/specially-treated")}
//               >
//                 Specially Treated Non Woven Fabrics
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/home-furnishing")}
//               >
//                 Home Furnishing Products
//               </Link>
//               <Link
//                 className="dropdown-item"
//                 onClick={() => handleProductClick("/products/hygiene")}
//               >
//                 Hygiene & Sanitary Products
//               </Link>
//             </div>
//           )}
//         </div>

//         <Link to="/application">Application</Link>
//         <Link to="/aboutus">About Us</Link>
//         <Link to="/conus">Contact Us</Link>
//         <Link to="/login">Log Out</Link>

//         <div className="cart">🛒 <span>0</span></div>
//       </div>
//     </div>
//   );
// }
// ✅ File: src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProductClick = (selectedCategory) => {
    navigate("/products", { state: { selected: selectedCategory } });
    setDropdownOpen(false);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Prime Synthetics Logo" />
          <h2>𝐏𝐫𝐢𝐦𝐞 𝐒𝐲𝐧𝐭𝐡𝐞𝐭𝐢𝐜𝐬</h2>
        </div>
        <div className="contact">
          <div>📞 +91 932-853-8214</div>
          <div>✉ info@Primsynthetics.com</div>
        </div>
        <a href="#" className="btn-brochure" aria-label="Download Brochure">
          📄 Brochure
        </a>
      </div>

      {/* Bottom Navbar */}
      <nav className="navbar" role="navigation" aria-label="Primary Navigation">
        <Link to="/home" className="nav-link">
          Home
        </Link>

        {/* Products Dropdown */}
        <div
          className="dropdown"
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="nav-link dropdown-toggle"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((prev) => !prev)}
            type="button"
          >
            Products 
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu" role="menu">
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() => handleProductClick("Spun Bond Non Woven Fabrics")}
              >
                Spun Bond Non Woven Fabrics
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() =>
                  handleProductClick("Specially Treated Non Woven Fabrics")
                }
              >
                Specially Treated Non Woven Fabrics
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() =>
                  handleProductClick("Non Woven Medical Disposable")
                }
              >
                Non Woven Medical Disposable
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() =>
                  handleProductClick("Non Woven Hygiene & Sanitary Products")
                }
              >
                Non Woven Hygiene & Sanitary Products
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() => handleProductClick("Non Woven Garment Applications")}
              >
                Non Woven Garment Applications
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() => handleProductClick("Non Woven Airline Applications")}
              >
                Non Woven Airline Applications
              </button>
              <button
                type="button"
                className="dropdown-item"
                role="menuitem"
                onClick={() => handleProductClick("Non Woven Packaging Cover")}
              >
                Non Woven Packaging Cover
              </button>
            </div>
          )}
        </div>

        <Link to="/application" className="nav-link">
          Application
        </Link>
        <Link to="/aboutus" className="nav-link">
          About Us
        </Link>
        <Link to="/conus" className="nav-link">
          Contact Us
        </Link>
        <Link to="/login" className="nav-link">
          Log Out
        </Link>

        <div className="cart" aria-label="Shopping cart with 0 items">
          🛒 <span>0</span>
        </div>
      </nav>
    </header>
  );
}

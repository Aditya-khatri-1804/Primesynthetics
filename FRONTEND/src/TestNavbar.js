import React, { useState } from "react";

export default function TestNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#080a1a", padding: "10px 20px", color: "#ccc" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
        <li>Home</li>

        <li
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          Products ▾
          {isOpen && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "#222",
                padding: "10px",
                borderRadius: "4px",
                listStyle: "none",
                margin: 0,
                minWidth: "150px",
              }}
            >
              <li style={{ padding: "5px 10px", color: "#fff" }}>Product 1</li>
              <li style={{ padding: "5px 10px", color: "#fff" }}>Product 2</li>
              <li style={{ padding: "5px 10px", color: "#fff" }}>Product 3</li>
            </ul>
          )}
        </li>

        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

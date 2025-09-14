import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Products.css";

export default function Products() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  useEffect(() => {
    if (location.state?.selected) {
      setSelectedSubcategory(location.state.selected);
    }
  }, [location.state]);

  const categories = [
    {
      name: "Spun Bond Non Woven Fabrics",
      subcategories: [
        "Printed Non Woven Fabrics",
        "Colorful Non Woven Fabrics",
      ],
    },
    { name: "Specially Treated Non Woven Fabrics" },
    { name: "Non Woven Agricultural Products" },
    { name: "Non Woven Medical Disposable" },
    { name: "Non Woven Hygiene & Sanitary Products" },
    { name: "Non Woven Garment Applications" },
    { name: "Non Woven Airline Applications" },
    { name: "Non Woven Packaging Cover" },
  ];

  // Product details with multiple and single products
  const productDetails = {
    "Non Woven Medical Disposable": [
      {
        title: "Face Mask",
        description: "Protective surgical face masks for medical staff.",
        price: "₹80 per piece",
      },
      {
        title: "Bouffant Cap",
        description: "Comfortable and hygienic disposable cap for medical use.",
        price: "₹50 per piece",
      },
      {
        title: "Medical Gown",
        description: "Disposable gown for hospital use and safety.",
        price: "₹180 per piece",
      },
    ],
    "Printed Non Woven Fabrics": {
      title: "Printed Non Woven Fabrics",
      description: "High-quality printed non woven fabrics with vibrant designs.",
      price: "₹120 per meter",
    },
    "Colorful Non Woven Fabrics": {
      title: "Colorful Non Woven Fabrics",
      description: "Available in multiple colors and suitable for packaging.",
      price: "₹100 per meter",
    },
    "Specially Treated Non Woven Fabrics": {
      title: "Specially Treated Non Woven Fabrics",
      description: "Treated for water resistance and durability.",
      price: "₹140 per meter",
    },
  };

  // Helper: Check if a category or subcategory is currently selected
  const isSelected = (name) => selectedSubcategory === name;

  return (
    <div className="products-container" style={{ display: "flex" }}>
      {/* Sidebar */}
      <nav
        className="sidebar-menu"
        style={{
          width: "220px",
          borderRight: "1px solid #ddd",
          padding: "10px 0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {categories.map((cat, index) => (
            <li
              key={index}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{
                padding: "10px 20px",
                cursor: cat.subcategories ? "default" : "pointer",
                backgroundColor: isSelected(cat.name) ? "#ffe6e6" : "transparent",
                color: isSelected(cat.name) ? "#c81b14" : "#000",
                fontWeight: isSelected(cat.name) ? "bold" : "normal",
                borderLeft: isSelected(cat.name) ? "4px solid #c81b14" : "4px solid transparent",
                transition: "background-color 0.3s, color 0.3s, border-left 0.3s",
                position: "relative",
              }}
            >
              <span
                onClick={() => {
                  if (!cat.subcategories) setSelectedSubcategory(cat.name);
                }}
                style={{ display: "block" }}
              >
                {cat.name}
              </span>

              {/* Submenu */}
              {cat.subcategories && activeCategory === index && (
                <ul
                  className="submenu"
                  style={{
                    listStyle: "none",
                    paddingLeft: "15px",
                    marginTop: "8px",
                    borderLeft: "1px solid #ddd",
                  }}
                >
                  {cat.subcategories.map((sub, i) => (
                    <li
                      key={i}
                      onClick={() => setSelectedSubcategory(sub)}
                      style={{
                        padding: "8px 15px",
                        cursor: "pointer",
                        backgroundColor: isSelected(sub) ? "#ffe6e6" : "transparent",
                        color: isSelected(sub) ? "#c81b14" : "#000",
                        fontWeight: isSelected(sub) ? "bold" : "normal",
                        borderLeft: isSelected(sub) ? "4px solid #c81b14" : "4px solid transparent",
                        transition: "background-color 0.3s, color 0.3s, border-left 0.3s",
                      }}
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main
        className="products-content"
        style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f7f7f9" }}
      >
        {selectedSubcategory ? (
          <>
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
              {selectedSubcategory}
            </h2>

            {productDetails[selectedSubcategory] ? (
              Array.isArray(productDetails[selectedSubcategory]) ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {productDetails[selectedSubcategory].map((product, index) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "8px",
                        width: "300px",
                        backgroundColor: "#fff",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                      }}
                    >
                      <h4>{product.title}</h4>
                      <p>
                        <strong>Description:</strong> {product.description}
                      </p>
                      <p>
                        <strong>Price:</strong> {product.price}
                      </p>
                      <button
                        style={{
                          padding: "10px 15px",
                          backgroundColor: "#c81b14",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          marginTop: "10px",
                          cursor: "pointer",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "8px",
                    maxWidth: "500px",
                    backgroundColor: "#fff",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <p>
                    <strong>Description:</strong>{" "}
                    {productDetails[selectedSubcategory].description}
                  </p>
                  <p>
                    <strong>Price:</strong> {productDetails[selectedSubcategory].price}
                  </p>
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#c81b14",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      marginTop: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              )
            ) : (
              <p>No detailed info available yet for this category.</p>
            )}
          </>
        ) : (
          <>
            <h2>Welcome to Our Product Section</h2>
            <p>Select a category from the sidebar to view more.</p>
          </>
        )}
      </main>
    </div>
  );
}

import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../assets/1.1.webp';
import img2 from '../assets/2.2.webp';
import img3 from '../assets/3.1.web.avif';  // Fixed typo here
import homepage from '../assets/homepage.png';
import { useNavigate } from 'react-router-dom';

// Product images
import product1 from '../assets/Product-cap.jpg';
import product2 from '../assets/Product-cuts.jpg';
import product3 from '../assets/Product-roll.jpg';
import product4 from '../assets/Product-mask.jpg';
import product5 from '../assets/Product-sheets.jpg';
import product6 from '../assets/Product-dress.jpg';

const products = [
  { name: 'Bouffant Cap', img: product1 },
  { name: 'Colored Non-Woven Fabric', img: product2 },
  { name: 'Spunbond Roll', img: product3 },
  { name: 'Face Mask', img: product4 },
  { name: 'Black Non-Woven Fabric', img: product5 },
  { name: 'Medical Gown', img: product6 },
];

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate('/login');
    }

    axios.get('http://localhost:5000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, [navigate]);

  return (
    <>
      {/* CAROUSEL SECTION */}
      <div
        id="carouselExample"
        data-bs-interval="500"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: '100vw',
          marginTop: '0px',
          overflow: 'hidden',
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img2}
              alt="Slide 1"
              className="d-block w-100"
              style={{
                height: '100vh',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              alt="Slide 2"
              className="d-block w-100"
              style={{
                height: '100vh',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              alt="Slide 3"
              className="d-block w-100"
              style={{
                height: '100vh',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Feature Bar Section */}
      <div
        style={{
          display: 'flex',
          borderTop: '3px solid #d25564',
          borderBottom: '1px solid #ddd',
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        {[
          { label: 'Innovation', icon: '💡' },
          { label: 'Customer Satisfaction', icon: '⭐️' },
          { label: 'Teamwork', icon: '👥' },
          { label: 'Adaptability to change', icon: '🔄' },
          { label: 'Trust', icon: '🤝' },
        ].map(({ label, icon }, index, arr) => (
          <div
            key={label}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '30px 10px',
              borderRight: index !== arr.length - 1 ? '1px solid #ddd' : 'none',
              cursor: 'default',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const iconDiv = e.currentTarget.querySelector('.feature-icon');
              iconDiv.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              const iconDiv = e.currentTarget.querySelector('.feature-icon');
              iconDiv.style.transform = 'scale(1)';
            }}
          >
            <div
              className="feature-icon"
              style={{
                fontSize: '30px',
                color: '#d25564',
                marginBottom: '10px',
                transition: 'transform 0.3s ease',
                userSelect: 'none',
              }}
            >
              {icon}
            </div>
            <div
              style={{
                fontWeight: '600',
                fontSize: '16px',
                userSelect: 'none',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ABOUT SECTION */}
      <section
        style={{
          padding: "60px 40px",
          background: "#fff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Left Image Box */}
          <div style={{ flex: "1 1 45%", minWidth: "300px" }}>
            <img
              src={homepage}
              alt="Vishal Synthetics Factory"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right Content Box */}
          <div style={{ flex: "1 1 50%", color: "#333" }}>
            <h5
              style={{
                color: "#c81b14",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              ABOUT US
            </h5>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                margin: "0 0 10px",
              }}
            >
              Welcome to Prime Synthetics
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                backgroundColor: "#c81b14",
                margin: "16px 0",
              }}
            ></div>

            <p style={{ lineHeight: 1.7, fontSize: "15px", marginBottom: "16px", textAlign: "justify" }}>
              Prime Synthetics is one of the most reliable producers of Modern Non Woven Fabrics and consumable products.
              It has created a niche by constantly innovating its product range to cater the requirement of new age industrial needs
              be it Agriculture, Medical, Water Purification, material handling and packaging.
            </p>

            <p style={{ lineHeight: 1.7, fontSize: "15px", marginBottom: "16px", textAlign: "justify" }}>
              It has earned a respectable name among its domestic and International buyer through its Brand Promise of{' '}
              <strong>100% Quality else 100% Return*</strong>.
            </p>

            <p style={{ lineHeight: 1.7, fontSize: "15px", marginBottom: "24px", textAlign: "justify" }}>
              Prime Synthetics manufacturing and business operation is spread in the 2200 Sq Meters area which houses imported
              machines, R&D lab, Corporate Office and a warehouse. It has a capacity of producing 2000 MT/year of Non-Woven Fabric and
              its allied products. We are constantly supplying to ASEAN countries apart from other European and African countries.
              With a support of 50 passionate professional team members we live up to the values and dream of Make in India and Serving the whole World.
            </p>




            <button
              onClick={() => navigate('/Aboutus')}
              style={{
                padding: "10px 20px",
                border: "2px solid black",
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section style={{ background: '#f4f4f4', padding: '60px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Our Products</h2>
          <div
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#c81b14',
              margin: '10px auto',
            }}
          ></div>
        </div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => {
                let selectedCategory = product.name;
                // Agar Cap, Mask, ya Gown hai, to Non Woven Medical Disposable par route karenge
                if (
                  product.name === "Bouffant Cap" ||
                  product.name === "Face Mask" ||
                  product.name === "Medical Gown"
                ) {
                  selectedCategory = "Non Woven Medical Disposable";
                }
                navigate("/products", { state: { selected: selectedCategory } });
              }}
              style={{
                background: '#fff',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid #ddd',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <h5 style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                {product.name}
              </h5>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}

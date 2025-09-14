// import "../styles/aboutus.css";
// export default function Aboutus() {
//   return (
//     <div className="page-container">
//       <h2>AboutUS Page.!! </h2>
//       <p>AboutUs page here.!!</p>
//     </div>
//   );
// }

// // export default function Aboutus() {
// //   return (
// //     <div className="page-container" style={{  color: "white  ", padding: "30px" }}>
// //       <h2>AboutUS Page.!!</h2>
// //       <p>AboutUs page here.!!</p>
// //     </div>
// //   );
// // }
import React from "react";
import homepage from "../assets/homepage.png"; 

function About() {
  return (
    <section
      style={{
        padding: "50px 60px",
        background: "#f6f6f6",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap", 
        }}
      >
        <div
          style={{
            position: "relative",
            width: "460px",
            flexShrink: 0,
            background: "#fff",
            padding: "24px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            borderRadius: "2px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "-18px",
              top: "-18px",
              width: "120px",
              height: "12px",
              background: "#c81b14",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "-18px",
              top: "-18px",
              width: "12px",
              height: "120px",
              background: "#c81b14",
            }}
          />

          <img
            src={homepage}
            alt="Factory machine"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>

        <div style={{ flex: 1, color: "#333" }}>
          <h3
            style={{
              color: "#c81b14",
              fontSize: "13px",
              letterSpacing: "1px",
              fontWeight: 700,
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            ABOUT VISHAL SYNTHETICS
          </h3>

          <h2
            style={{
              fontSize: "28px",
              margin: "8px 0 14px",
              fontWeight: 700,
              position: "relative",
            }}
          >
            Infrastructure
            <span
              style={{
                display: "block",
                width: "60px",
                height: "4px",
                background: "#c81b14",
                marginTop: "10px",
              }}
            />
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "20px",
              color: "#4a4a4a",
              fontSize: "15px",
              textAlign: "justify", 
              paddingRight: "10px",
            }}
          >
            Prime Synthetics manufacturing and business operation is spread in
            the 2200 Sq Meters area which houses imported machines, R&D lab,
            Corporate Office and a warehouse. It has a capacity of producing
            2000 MT/year of Non-Woven Fabric and its allied products. We are
            constantly supplying to ASEAN countries apart from other European
            and African countries. With a support of 50 passionate professional
            team members we live up to the values and dream of Make in India and
            Serving the World.
          </p>

          <h2
            style={{
              fontSize: "28px",
              margin: "8px 0 14px",
              fontWeight: 700,
              position: "relative",
            }}
          >
            History
            <span
              style={{
                display: "block",
                width: "60px",
                height: "4px",
                background: "#c81b14",
                marginTop: "10px",
              }}
            />
          </h2>
          <p
            style={{
              lineHeight: 1.7,
              marginBottom: "20px",
              color: "#4a4a4a",
              fontSize: "15px",
              textAlign: "justify", 
              paddingRight: "10px", 
            }}
          >
            Prime Synthetics is a brain Child of Mr. Mahesh Patel who has guided
            the company from its inception in 1989 to grow it to a well known
            entity in the Non Woven Fabric Industry. As a part of “COT Group” it
            has crossed US$ 5 Million Mark and is still growing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; // ✅ corrected

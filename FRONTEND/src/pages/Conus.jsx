// import React from "react";

// function Contact() {
//   return (
//     <React.Fragment>
//       <div
//         style={{
//           width: "100%",
//           padding: "20px",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         {/* Contact Info Section */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             marginBottom: "30px",
//             flexWrap: "wrap",
//           }}
//         >
//           <div
//             style={{
//               flex: 1,
//               minWidth: "250px",
//               background: "#fff",
//               border: "1px solid #eee",
//               padding: "15px",
//               margin: "10px",
//               borderRadius: "8px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📞 Phone</h4>
//             <p>+91 2764 – 263072</p>
//             <p>+91 99250 45488</p>
//             <p>+91 97270 88488</p>
//             <p>+91 98256 14275</p>
//           </div>

//           <div
//             style={{
//               flex: 1,
//               minWidth: "250px",
//               background: "#fff",
//               border: "1px solid #eee",
//               padding: "15px",
//               margin: "10px",
//               borderRadius: "8px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📧 Email Us</h4>
//             <p>vsnonwoven@yahoo.com</p>
//           </div>

//           <div
//             style={{
//               flex: 1,
//               minWidth: "250px",
//               background: "#fff",
//               border: "1px solid #eee",
//               padding: "15px",
//               margin: "10px",
//               borderRadius: "8px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📍 Address</h4>
//             <p>
//               Plot No. 68, G.I.D.C, Kadi - 382715,<br />
//               Dist – Mehsana, Gujarat, India.
//             </p>
//           </div>
//         </div>

//         {/* Inquiry Form & Map */}
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           {/* Form */}
//           <div
//             style={{
//               flex: 1,
//               minWidth: "300px",
//               background: "#fafafa",
//               padding: "20px",
//               borderRadius: "8px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <h3 style={{ marginBottom: "15px" }}>Inquire Us</h3>
//             <form>
//               <input
//                 type="text"
//                 placeholder="Full Name *"
//                 required
//                 style={{
//                   width: "100%",
//                   marginBottom: "15px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "5px",
//                 }}
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number *"
//                 required
//                 style={{
//                   width: "100%",
//                   marginBottom: "15px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "5px",
//                 }}
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address *"
//                 required
//                 style={{
//                   width: "100%",
//                   marginBottom: "15px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "5px",
//                 }}
//               />
//               <textarea
//                 placeholder="Write A Message..."
//                 required
//                 style={{
//                   width: "100%",
//                   marginBottom: "15px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "5px",
//                   height: "100px",
//                   resize: "none",
//                 }}
//               ></textarea>

//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "10px" }}
//               >
//                 <input
//                   type="text"
//                   placeholder="Security Code *"
//                   required
//                   style={{
//                     flex: 1,
//                     padding: "10px",
//                     border: "1px solid #ddd",
//                     borderRadius: "5px",
//                   }}
//                 />
//                 <span
//                   style={{
//                     background: "#f4f4f4",
//                     padding: "10px 15px",
//                     borderRadius: "5px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   63dd4
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   background: "#111",
//                   color: "white",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   marginTop: "15px",
//                 }}
//                 onMouseOver={(e) => (e.target.style.background = "#c0392b")}
//                 onMouseOut={(e) => (e.target.style.background = "#111")}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Google Map */}
//           <div style={{ flex: 1, minWidth: "300px" }}>
//             <iframe
//               title="Google Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.750385611222!2d72.33490257505491!3d23.6033607950031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c436bdcf9a6e3%3A0x6f1d4e441ba3a7a7!2sVishal%20Synthetics%20%7C%20Non%20Woven%20Fabric!5e0!3m2!1sen!2sin!4v1693113600000!5m2!1sen!2sin"
//               width="100%"
//               height="300"
//               style={{ border: "0" }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Contact;
import React from "react";

function Contact() {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Contact Info Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#fff",
              border: "1px solid #eee",
              padding: "15px",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📞 Phone</h4>
            <p>+91 83201 – 38133</p>
            <p>+91 93285 –38214</p>
            <p>+91 99748 –11242</p>
            
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#fff",
              border: "1px solid #eee",
              padding: "15px",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📧 Email Us</h4>
            <p>Adikhatri1804@gmail.com</p>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "250px",
              background: "#fff",
              border: "1px solid #eee",
              padding: "15px",
              margin: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h4 style={{ marginBottom: "10px", color: "#c0392b" }}>📍 Address</h4>
            <p>
              Plot No. E5, G.I.D.C, Ahmedabad - 382715,<br />
              Dist – Ahmedadbad, Gujarat, India.
            </p>
          </div>
        </div>

        {/* Inquiry Form & Map */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* Form */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              background: "#fafafa",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Inquire Us</h3>
            <form>
              <input
                type="text"
                placeholder="Full Name *"
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <input
                type="text"
                placeholder="Phone Number *"
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              />
              <textarea
                placeholder="Write A Message..."
                required
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  height: "100px",
                  resize: "none",
                }}
              ></textarea>

              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <input
                  type="text"
                  placeholder="Security Code *"
                  required
                  style={{
                    flex: 1,
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                />
                <span
                  style={{
                    background: "#f4f4f4",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  63dd4
                </span>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#111",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "15px",
                }}
                onMouseOver={(e) => (e.target.style.background = "#c0392b")}
                onMouseOut={(e) => (e.target.style.background = "#111")}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              background: "#fafafa",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.750385611222!2d72.33490257505491!3d23.6033607950031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c436bdcf9a6e3%3A0x6f1d4e441ba3a7a7!2sVishal%20Synthetics%20%7C%20Non%20Woven%20Fabric!5e0!3m2!1sen!2sin!4v1693113600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;

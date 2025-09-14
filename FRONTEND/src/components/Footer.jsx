import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#222",
    color: "white",
    padding: "40px 30px 30px 30px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    position: "relative",
    marginTop: "50px",   // add this line
  zIndex: 1,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "auto",
    gap: "25px",           // gap कम किया है
  };

  const columnStyle = {
    flex: "1",
    minWidth: "180px",
  };

  const sectionTitleStyle = {
    color: "#ff4500",
    fontWeight: "bold",
    borderLeft: "4px solid #ff4500",
    paddingLeft: "10px",
    marginBottom: "15px",  // margin-bottom कम किया है
    fontSize: "18px",
  };

  const paragraphStyle = {
    lineHeight: "1.5",
    color: "#ccc",
    marginBottom: "10px",  // paragraph के नीचे थोड़ा space दिया है
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: "8px",  // margin-bottom कम किया है
    cursor: "pointer",
    color: "#eee",
  };

  const contactItemStyle = {
    marginBottom: "8px",
    color: "#bbb",
  };

  const footerBottomStyle = {
    textAlign: "center",
    marginTop: "25px",    // margin-top कम किया है
    fontSize: "13px",
    color: "#888",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Us */}
        <div style={columnStyle}>
          <h3 style={sectionTitleStyle}>About Us</h3>
          <p style={paragraphStyle}>
            Vishal Synthetics is one of the reliable Non Woven Products
            Manufacturers, Exporters and Suppliers in Kadi city of Gujarat.
            Incepted in the year 1989, the company is well managed by the CEO
            Mr. Mahesh Patel. He has rich experience of over 23 Years and
            excellent guidance skills that have helped us scale new heights of
            success.
          </p>
        </div>

        {/* Our Products - Left List */}
        <div style={columnStyle}>
          <h3 style={sectionTitleStyle}>Our Products</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>➤ Spun Bond Non Woven Fabrics</li>
            <li style={listItemStyle}>➤ Laminated Non Woven Fabrics</li>
            <li style={listItemStyle}>➤ Non Woven Agricultural Products</li>
            <li style={listItemStyle}>➤ Non Woven Medical Disposables</li>
            <li style={listItemStyle}>➤ Non Woven Bags</li>
            <li style={listItemStyle}>➤ Specially Treated Non Woven Fabrics</li>
          </ul>
        </div>

        {/* Our Products - Right List */}
        <div style={columnStyle}>
          <h3 style={{ ...sectionTitleStyle, visibility: "hidden" }}>
            Hidden
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>➤ Non Woven Home Furnishing Products</li>
            <li style={listItemStyle}>➤ Non Woven Hygiene & Sanitary Products</li>
            <li style={listItemStyle}>➤ Non Woven Garment Applications</li>
            <li style={listItemStyle}>➤ Non Woven Airline Applications</li>
            <li style={listItemStyle}>➤ Non Woven Packaging Cover</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div style={columnStyle}>
          <h3 style={sectionTitleStyle}>Get In Touch</h3>
          <p style={contactItemStyle}>
            📍 Plot No. E5, G.I.D.C, Ahmedabad - 382715, Dist – Ahmedabd, Gujarat, India.
          </p>
          <p style={contactItemStyle}>
            📞  <br />
            +91 83201 38133 <br />
            +91 932853 8214 <br />
            +91 99748 11242
          </p>
          <p style={contactItemStyle}>✉ Adikhatri1804@gmail.com</p>
        </div>
      </div>

      <div style={footerBottomStyle}>
        © 2020 All Right Reserved | Developed by Best Digital Marketing Company - ARE
        InfoTech
      </div>
    </footer>
  );
}

export default Footer;

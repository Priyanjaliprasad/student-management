import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* 🧭 Navbar */}
      <nav style={navStyle}>
        <h3 style={{ margin: 0 }}>🎓 CBIT Student Portal</h3>
        <div style={navLinksStyle}>
          <Link to="/" style={linkStyle}>🏠 Home</Link>
          <Link to="/add" style={linkStyle}>➕ Add Student</Link>
          <Link to="/list" style={linkStyle}>📋 Student List</Link>
        </div>
      </nav>

      {/* 🏠 Home Content */}
      <div style={homeContentStyle}>
        {/* 🔷 CBIT Logo and Name */}
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="cbitlogo1.jpeg" 
            alt="CBIT Logo" 
            style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }} 
          />
          <h2 style={{ fontSize: '1.5rem', color: '#2c3e50', marginTop: '10px' }}>
            Chaitanya Bharathi Institute of Technology
          </h2>
        </div>

        {/* 🔷 Title & Description */}
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '10px' }}>
          🎓 Welcome to Student Management System
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
          Use the buttons below to manage student records.
        </p>

        {/* 🔷 Buttons */}
        <Link to="/add">
          <button style={buttonStyle('#3498db', '#2980b9', 'marginRight: 15px')}>
            ➕ Add New Student
          </button>
        </Link>

        <Link to="/list">
          <button style={buttonStyle('#2ecc71', '#27ae60')}>
            📋 View Student List
          </button>
        </Link>
      </div>

      


      {/* 📌 Footer */}
      <footer style={footerStyle}>
        <div style={footerContent}>
          <img
            src="cbitlogo1.jpeg"
            alt="CBIT Logo"
            style={footerLogoStyle}
          />
          <div style={footerTextStyle}>
            <h3 style={collegeNameStyle}>CHAITANYA BHARATHI <br />INSTITUTE OF TECHNOLOGY</h3>
            <p style={affiliatedStyle}>Autonomous Institute | Affiliated to Osmania University</p>
            <p><strong>College Contact Info</strong></p>
            <p>Gandipet, Hyderabad, Telangana,<br />PIN: 500075</p>
            <p>Phone: 040-24193276</p>
            <p>Mobile: 8466997201</p>
            <p>For Admissions Enquiry: 8466997216</p>
            <p>Email: <a href="mailto:principal@cbit.ac.in" style={{ color: '#000' }}>principal@cbit.ac.in</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ✨ Styles
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#2c3e50',
  color: '#fff',
  padding: '10px 20px',
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
};

const homeContentStyle = {
  textAlign: 'center',
  padding: '50px',
  background: 'linear-gradient(to right, #f0f4f8, #d9e2ec)',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const buttonStyle = (bgColor, hoverColor, custom = '') => ({
  backgroundColor: bgColor,
  color: '#fff',
  padding: '12px 25px',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  ...(custom.includes('marginRight') && { marginRight: '15px' }),
});

// 📦 Footer Styles
const footerStyle = {
  backgroundColor: '#dcd7d6',
  padding: '30px 20px',
};

const footerContent = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'start',
  flexWrap: 'wrap',
};

const footerLogoStyle = {
  width: '120px',
  height: 'auto',
  marginRight: '30px',
};

const footerTextStyle = {
  fontFamily: 'Georgia, serif',
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#2c3e50',
};

const collegeNameStyle = {
  margin: 0,
  color: '#b31b1b',
  fontWeight: 'bold',
  fontSize: '20px',
};

const affiliatedStyle = {
  color: 'green',
  marginBottom: '20px',
};

export default Home;
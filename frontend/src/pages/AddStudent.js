import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AddStudent = () => {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    if (res.ok) {
      alert('Student added successfully!');
      navigate('/');
    } else {
      const data = await res.json();
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      {/* 🔹 Navbar */}
      <div style={navbarStyle}>
        <Link to="/" style={navLinkStyle}>🏠 Home</Link>
        <Link to="/add" style={navLinkStyle}>➕ Add Student</Link>
        <Link to="/list" style={navLinkStyle}>📋 Student List</Link>
      </div>

      {/* 🔸 Form Container */}
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>📥 Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Student ID:
            <input type="text" name="studentId" value={student.studentId} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            First Name:
            <input type="text" name="firstName" value={student.firstName} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            Last Name:
            <input type="text" name="lastName" value={student.lastName} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            Email:
            <input type="email" name="email" value={student.email} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            Date of Birth:
            <input type="date" name="dob" value={student.dob} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            Department:
            <input type="text" name="department" value={student.department} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            Enrollment Year:
            <input type="number" name="enrollmentYear" value={student.enrollmentYear} onChange={handleChange} required style={inputStyle} />
          </label>

          <label style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" name="isActive" checked={student.isActive} onChange={handleChange} style={{ marginRight: '10px' }} />
            Active
          </label>

          <button type="submit" style={buttonStyle}>✅ Add Student</button>
        </form>
      </div>
    </div>
  );
};

/* 🔷 Styles */
const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#2c3e50',
  padding: '12px',
  marginBottom: '30px',
};

const navLinkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  margin: '0 20px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
};

const formContainerStyle = {
  maxWidth: '500px',
  margin: '50px auto',
  padding: '30px',
  borderRadius: '12px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  fontFamily: 'Segoe UI, sans-serif',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '5px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#34495e',
  fontWeight: 'bold',
};

const buttonStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '12px',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

export default AddStudent;

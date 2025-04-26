import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await fetch(`https://student-management-w6c4.onrender.com/${id}`);
      const data = await res.json();
      setStudent(data);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://student-management-w6c4.onrender.com/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    });

    if (res.ok) {
      alert('✅ Student updated!');
      navigate('/');
    } else {
      const data = await res.json();
      alert(`❌ Error: ${data.error}`);
    }
  };

  return (
    <div style={backgroundStyle}>
      {/* 🔹 Navbar */}
      <div style={navbarStyle}>
        <Link to="/" style={navLinkStyle}>🏠 Home</Link>
        <Link to="/add" style={navLinkStyle}>➕ Add Student</Link>
        <Link to="/list" style={navLinkStyle}>📋 Student List</Link>
      </div>

      <div style={formContainer}>
        <h2 style={headerStyle}>✏️ Edit Student</h2>
        <form onSubmit={handleSubmit} style={formGridStyle}>
          <div style={formItem}>
            <label style={labelStyle}>Student ID:</label>
            <input type="text" name="studentId" value={student.studentId} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>First Name:</label>
            <input type="text" name="firstName" value={student.firstName} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>Last Name:</label>
            <input type="text" name="lastName" value={student.lastName} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>Email:</label>
            <input type="email" name="email" value={student.email} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>Date of Birth:</label>
            <input type="date" name="dob" value={student.dob} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>Department:</label>
            <input type="text" name="department" value={student.department} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={formItem}>
            <label style={labelStyle}>Enrollment Year:</label>
            <input type="number" name="enrollmentYear" value={student.enrollmentYear} onChange={handleChange} required style={inputStyle} />
          </div>

          <div style={{ ...formItem, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <label style={labelStyle}>Active:</label>
            <input type="checkbox" name="isActive" checked={student.isActive} onChange={handleChange} />
          </div>

          {/* Full width for button */}
          <div style={{ gridColumn: '1 / -1' }}>
            <button type="submit" style={buttonStyle}>💾 Update Student</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 🔷 STYLES
const backgroundStyle = {
  background: 'linear-gradient(135deg, #f8f8ff 0%, #e0f7fa 100%)',
  minHeight: '100vh',
  padding: '30px',
  fontFamily: 'Segoe UI, sans-serif',
};

const navbarStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#2c3e50',
  padding: '12px',
  marginBottom: '40px',
};

const navLinkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  margin: '0 20px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
};

const formContainer = {
  maxWidth: '700px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 0 15px rgba(0,0,0,0.1)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  color: '#2c3e50',
};

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
};

const formItem = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '6px',
  color: '#34495e',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#2980b9',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
};

export default EditStudent;

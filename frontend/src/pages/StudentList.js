import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('http://localhost:5000/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
      });
      alert('Student deleted!');
      fetchStudents();
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

      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={{ color: '#2c3e50' }}>📋 Student List</h2>
          <Link to="/add">
            <button style={addButtonStyle}>➕ Add New Student</button>
          </Link>
        </div>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Department</th>
              <th>Enrollment Year</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu._id}>
                <td>{stu.studentId}</td>
                <td>{stu.firstName} {stu.lastName}</td>
                <td>{stu.email}</td>
                <td>{new Date(stu.dob).toLocaleDateString()}</td>
                <td>{stu.department}</td>
                <td>{stu.enrollmentYear}</td>
                <td>{stu.isActive ? 'Yes' : 'No'}</td>
                <td>
                  <Link to={`/edit/${stu._id}`}>
                    <button style={editButtonStyle}>✏️ Edit</button>
                  </Link>
                  &nbsp;
                  <button style={deleteButtonStyle} onClick={() => handleDelete(stu._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 🔷 Navbar styles
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

// 📸 Background and main layout
const backgroundStyle = {
  backgroundImage: 'url("https://gyaanarth.com/wp-content/uploads/2022/05/cbit3.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '150vh',
  padding: '20px',
};

const containerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  padding: '20px',
  maxWidth: '95%',
  margin: '0 auto',
  boxShadow: '0 0 12px rgba(0,0,0,0.3)',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const addButtonStyle = {
  padding: '10px 16px',
  fontSize: '1rem',
  backgroundColor: '#2ecc71',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const editButtonStyle = {
  backgroundColor: '#3498db',
  border: 'none',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  backgroundColor: '#e74c3c',
  border: 'none',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default StudentList;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import StudentList from './pages/StudentList';
import EditStudent from './pages/EditStudent';

function App() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/list" element={<StudentList />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    
  );
}

export default App;

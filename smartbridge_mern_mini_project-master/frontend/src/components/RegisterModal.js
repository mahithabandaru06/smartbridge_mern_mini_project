import React, { useState } from "react";

const RegisterModal = ({ course, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    courseName: course.title,
    duration: course.duration,
    amount: course.amount,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add backend API integration if needed
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000); // Auto-close after 2 seconds
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeBtn} onClick={onClose}>X</button>
        <h3>Register for {course.title}</h3>

        {submitted ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            You have successfully registered for <strong>{course.title}</strong>!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>Username:</label><br />
            <input name="username" value={formData.username} onChange={handleChange} required style={inputStyle} /><br />

            <label>Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} /><br />

            <label>Course Name:</label><br />
            <input value={formData.courseName} disabled style={inputStyle} /><br />

            <label>Duration:</label><br />
            <input value={formData.duration} disabled style={inputStyle} /><br />

            <label>Amount (₹):</label><br />
            <input value={formData.amount} disabled style={inputStyle} /><br />

            <button type="submit" style={submitBtn}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "25px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "400px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  position: "relative"
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "15px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  cursor: "pointer",
  fontWeight: "bold"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "5px 0 15px 0",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

const submitBtn = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer"
};

export default RegisterModal;

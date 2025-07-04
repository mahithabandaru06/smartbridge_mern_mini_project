import React, { useState } from "react";

const CourseRegister = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    courseName: "",
    courseDuration: "",
    courseAmount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/courses/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting registration");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded">
      <h2 className="text-xl font-bold mb-4">Course Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="courseDuration"
          placeholder="Course Duration"
          value={form.courseDuration}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="courseAmount"
          placeholder="Course Amount"
          value={form.courseAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default CourseRegister;

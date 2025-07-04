import React, { useState } from "react";
import RegisterModal from "./RegisterModal";
import "./Courses.css";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 1, title: "Web Development", description: "HTML, CSS, JS, React & Node.js.", duration: "8 weeks", amount: 2999 },
    { id: 2, title: "Cybersecurity", description: "Secure systems from attacks.", duration: "6 weeks", amount: 2599 },
    { id: 3, title: "AI", description: "Explore Artificial Intelligence.", duration: "10 weeks", amount: 3499 },
    { id: 4, title: "Machine Learning", description: "Supervised and unsupervised learning.", duration: "8 weeks", amount: 3299 },
    { id: 5, title: "Data Science", description: "Big data, analytics, Python.", duration: "9 weeks", amount: 3199 },
    { id: 6, title: "Cloud Computing", description: "AWS, Azure, DevOps tools.", duration: "6 weeks", amount: 2899 },
    { id: 7, title: "Blockchain", description: "Ethereum, smart contracts.", duration: "5 weeks", amount: 2799 },
    { id: 8, title: "Mobile Apps", description: "Flutter for iOS & Android.", duration: "7 weeks", amount: 2999 },
    { id: 9, title: "UI/UX Design", description: "Figma, prototyping, testing.", duration: "6 weeks", amount: 2699 },
    { id: 10, title: "Python", description: "Beginner to advanced.", duration: "5 weeks", amount: 2199 },
    { id: 11, title: "Java", description: "OOP and real-world apps.", duration: "6 weeks", amount: 2399 },
    { id: 12, title: "C/C++", description: "Pointers, OOP in C++.", duration: "5 weeks", amount: 2199 },
    { id: 13, title: "Ethical Hacking", description: "Kali Linux, tools & testing.", duration: "6 weeks", amount: 2799 },
    { id: 14, title: "DevOps", description: "CI/CD, Docker, Kubernetes.", duration: "7 weeks", amount: 2999 },
    { id: 15, title: "Frontend", description: "HTML/CSS/JS + React.", duration: "6 weeks", amount: 2699 },
    { id: 16, title: "Backend", description: "Node, Express, MongoDB.", duration: "7 weeks", amount: 2899 },
    { id: 17, title: "Deep Learning", description: "Neural nets, CNNs, RNNs.", duration: "10 weeks", amount: 3599 },
    { id: 18, title: "Databases", description: "SQL, NoSQL, MongoDB.", duration: "5 weeks", amount: 2499 },
    { id: 19, title: "Big Data", description: "Hadoop, Spark, analytics.", duration: "8 weeks", amount: 3399 },
    { id: 20, title: "NLP", description: "Chatbots, transformers.", duration: "7 weeks", amount: 3299 },
  ];

  // Filter logic
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      <h2 className="courses-title">Explore Our Courses</h2>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search by course title..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="courses-grid">
        {filteredCourses.length === 0 ? (
          <p style={{ marginTop: "20px", color: "gray" }}>No courses found.</p>
        ) : (
          filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-details"><strong>Duration:</strong> {course.duration}</p>
              <p className="course-details"><strong>Amount:</strong> ₹{course.amount}</p>
              <button
                className="course-button"
                onClick={() => setSelectedCourse(course)}
              >
                Register
              </button>
            </div>
          ))
        )}
      </div>

      {selectedCourse && (
        <RegisterModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
};

export default Courses;

import React from "react";
import "./Progress.css";

const Progress = () => {
  const learners = [
    {
      name: "Ananya Sharma",
      course: "Web Development",
      progress: 85,
      status: "In Progress",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Ravi Kumar",
      course: "Data Science",
      progress: 100,
      status: "Completed",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Meena Patel",
      course: "Cybersecurity",
      progress: 60,
      status: "In Progress",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Arjun Reddy",
      course: "Machine Learning",
      progress: 45,
      status: "In Progress",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Kavya Das",
      course: "AI",
      progress: 100,
      status: "Completed",
      image: "https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
      name: "Sanjay Verma",
      course: "Python Programming",
      progress: 75,
      status: "In Progress",
      image: "https://randomuser.me/api/portraits/men/53.jpg"
    }
  ];

  return (
    <div className="progress-container">
      <h2 className="progress-title">Learner Progress</h2>
      <div className="progress-grid">
        {learners.map((learner, index) => (
          <div key={index} className="progress-card">
            <img src={learner.image} alt={learner.name} className="profile-img" />
            <h3 className="learner-name">{learner.name}</h3>
            <p className="course-name">{learner.course}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${learner.progress}%` }}
              ></div>
            </div>
            <p className="progress-percent">{learner.progress}%</p>
            <p
              className={`status ${
                learner.status === "Completed" ? "completed" : "in-progress"
              }`}
            >
              {learner.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;

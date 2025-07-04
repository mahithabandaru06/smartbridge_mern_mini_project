import React, { useState } from "react";
import DemoVideoModal from "./DemoVideoModal";

const Home = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <h1>Welcome to LearnHub</h1>
      <h2>UpSkill YourSelf with us.</h2>

      <img 
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
        alt="LearnHub" 
        style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "20px" }} 
      />

      <button 
        style={btnStyle} 
        onClick={() => alert("Let's get started with courses!")}
      >
        Get Started
      </button>

      <button 
        style={{...btnStyle, marginLeft: "15px"}} 
        onClick={() => setShowDemo(true)}
      >
        Watch Demo Video
      </button>

      {showDemo && <DemoVideoModal onClose={() => setShowDemo(false)} />}
    </div>
  );
};

const btnStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "white",
  marginTop: "15px"
};

export default Home;

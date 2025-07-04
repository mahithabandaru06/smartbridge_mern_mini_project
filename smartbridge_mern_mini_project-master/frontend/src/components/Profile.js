import React from "react";

const Profile = ({ userName }) => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> example@example.com</p>
      <p>This is your profile page.</p>
    </div>
  );
};

export default Profile;

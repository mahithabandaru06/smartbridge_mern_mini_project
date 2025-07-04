import React from "react";

const DemoVideoModal = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtnStyle}>X</button>
        <video width="100%" height="auto" controls autoPlay>
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "white",
  borderRadius: "10px",
  maxWidth: "600px",
  width: "90%",
  padding: "10px",
  position: "relative",
};

const closeBtnStyle = {
  position: "absolute",
  top: "10px",
  right: "15px",
  cursor: "pointer",
  background: "red",
  border: "none",
  color: "white",
  fontWeight: "bold",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  fontSize: "16px",
};

export default DemoVideoModal;

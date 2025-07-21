import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="success-page" style={styles.container}>
      <FaCheckCircle style={styles.icon} />
      <h1 style={styles.heading}>Reservation Successful!</h1>
      <p style={styles.message}>
        Thank you for your reservation. We look forward to seeing you!
      </p>
      <button onClick={handleBack} style={styles.button}>
        Back to Home
      </button>
    </section>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    padding: "2rem",
  },
  icon: {
    color: "#28a745",
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#333",
  },
  message: {
    fontSize: "1.2rem",
    margin: "1rem 0",
    color: "#555",
  },
  button: {
    padding: "0.7rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Success;

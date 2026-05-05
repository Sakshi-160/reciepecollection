import React from "react";

function Profile(props) {
  return (
    <div style={styles.card}>
      <img src={props.image} alt={props.dishname} style={styles.image} />
      <h2>{props.dishname}</h2>
      <p>{props.description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  },
  image: {
    width: "100%",
    height: "150px",
    borderRadius: "10px",
    objectFit: "cover",
  },
};

export default Profile;
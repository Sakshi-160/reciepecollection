import React from "react";
import Profile from "./Profile";

// import images
import paneer from "./img/paneer.jpg";
import biriyani from "./img/biriyani.jpg";
import dosa from "./img/dosa.jpg";

function Gallery() {
  return (
    <div>
      <h1>🍽️ Today's Featured Recipes</h1>

      <div style={styles.container}>
        <Profile
          dishname="Paneer Butter Masala"
          image={paneer}
          description="A rich and creamy North Indian curry made with paneer."
        />

        <Profile
          dishname=" Biriyani"
          image={biriyani}
          description="Aromatic basmati rice cooked with spices and vegiess."
        />

        <Profile
          dishname="Masala Dosa"
          image={dosa}
          description="Crispy dosa filled with spiced potato mixture."
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default Gallery;
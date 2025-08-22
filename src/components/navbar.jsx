<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, navItems }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.link} style={styles.navItem}>
            <Link to={item.link} style={styles.navLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "90px",
    height: "auto",
    marginRight: "20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },
  navItem: {
    // Aquí el estilo de color y padding queda para el <li> o lo puedes mover al Link
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

=======
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logo, navItems }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>

      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.link} style={styles.navItem}>
            <Link to={item.link} style={styles.navLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "90px",
    height: "auto",
    marginRight: "20px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: 0,
    margin: 0,
  },
  navItem: {
    // Aquí el estilo de color y padding queda para el <li> o lo puedes mover al Link
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

>>>>>>> 60c8b5e (Primer commit git)
export default Navbar;
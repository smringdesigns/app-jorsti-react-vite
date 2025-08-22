<<<<<<< HEAD
import React from "react";

// Componente Footer que acepta un nombre y un logo
const Footer = ({ name = "JorSti Tech", logo }) => {
  return (
    <>
      <footer style={styles.footer}>
        <p>&copy; 2025 Inversiones {name}. Todos los derechos reservados.</p>
      </footer>
      {logo && <img src={logo} className="App-logo" alt="logo" style={styles.logo} />}
    </>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",  // Fondo oscuro
    color: "white",           // Color de texto blanco
    padding: "20px",          // Espacio interno alrededor del texto
    textAlign: "center",      // Alineación del texto al centro
  },
  logo: {
    marginTop: "20px",        // Espacio encima del logo
    width: "50px",            // Tamaño del logo
    height: "auto",           // Mantener proporción del logo
  },
};

export default Footer;
=======
import React from "react";

// Componente Footer que acepta un nombre y un logo
const Footer = ({ name = "JorSti Tech", logo }) => {
  return (
    <>
      <footer style={styles.footer}>
        <p>&copy; 2025 Inversiones {name}. Todos los derechos reservados.</p>
      </footer>
      {logo && <img src={logo} className="App-logo" alt="logo" style={styles.logo} />}
    </>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",  // Fondo oscuro
    color: "white",           // Color de texto blanco
    padding: "20px",          // Espacio interno alrededor del texto
    textAlign: "center",      // Alineación del texto al centro
  },
  logo: {
    marginTop: "20px",        // Espacio encima del logo
    width: "50px",            // Tamaño del logo
    height: "auto",           // Mantener proporción del logo
  },
};

export default Footer;
>>>>>>> 60c8b5e (Primer commit git)

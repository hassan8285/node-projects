import React from 'react';

const NavbarWithBoxes = () => {
  // Inline styling for the navbar and boxes
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0 15px',
  };

  const boxesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div>My Website</div>
        <div>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* 4 Boxes */}
      <div style={boxesContainerStyle}>
        <div style={boxStyle}>Box 1</div>
        <div style={boxStyle}>Box 2</div>
        <div style={boxStyle}>Box 3</div>
        <div style={boxStyle}>Box 4</div>
      </div>
    </div>
  );
};

export default NavbarWithBoxes;

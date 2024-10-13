import React from 'react';
import './all.css'
import '../Styles/top.css'

const Top = () => {

  const handleButtonClick = () => {
    window.open("http://127.0.0.1:8000/", "_blank"); // Opens in a new tab
    // If you want to open in the same tab, use: window.location.href = "http://127.0.0.1:8000/";
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>MyAI</h1>
          <h3>Find solutions. Spark ideas. Boost efficiency.</h3>
          <button className="btn btn-primary" onClick={handleButtonClick}>
           {/* Launch<i className="fas fa-arrow-right" style={{ marginLeft: '8px' ,color:'black'}}></i>
            */}
           Launch<i className="fas fa-arrow-right" style={{ marginLeft: '8px' ,color:'black'}}></i>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;

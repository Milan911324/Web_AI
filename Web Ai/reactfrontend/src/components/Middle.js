import React from 'react';
import backgroundImage from '../images/back6.jpeg'; // Adjust the path
// import '../Style/middle.css'

const Middle = ({ title, ais }) => {
  return (
    <div style={{
      backgroundColor: 'black', // Set background color to black
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      color: 'white',
      textAlign: 'center',
    }}>
      <h3 style={{ margin: '0', padding: '20px' }}><i>AI Terms and Conditions</i></h3> {/* Header with margin and padding */}
      <div style={{ margin: '20px 0' }} /> {/* Line gap */}
      <div style={{
        display: 'flex', // Change to flex for horizontal layout
        flexDirection: 'row', // Arrange terms horizontally
        alignItems: 'flex-start', // Align items to the top
        gap: '20px', // Space between the terms
        justifyContent: 'center', // Center items horizontally
        width: '100%' // Ensure it takes the full width
      }}>
        <h6 style={{ margin: '0', maxWidth: '500px' }}> {/* Set a max width for better readability */}
          Welcome to MyAI. By using our AI services,
          including chatbots, text generation, data analysis, and other machine learning-powered 
          applications, you agree to comply with and be bound by the following terms and conditions.
        </h6>
        <h6 style={{ margin: '0', maxWidth: '500px' }}>
          We take data privacy seriously. By using our services, you agree to our Privacy Policy,
          which governs how we collect, use, and protect your data. Our AI may process data entered by users,
          but we do not store personal identifiable information unless explicitly consented by the user.
        </h6>
        
        
      </div>
      <br/>
      <div style={{ margin: '20px 0' }} /> {/* Line gap */}
      <div style={{
        display: 'flex', // Change to flex for horizontal layout
        flexDirection: 'row', // Arrange terms horizontally
        alignItems: 'flex-start', // Align items to the top
        gap: '20px', // Space between the terms
        justifyContent: 'center', // Center items horizontally
        width: '100%' // Ensure it takes the full width
      }}>
        <h6 style={{ margin: '0', maxWidth: '500px' }}>
          These Terms and Conditions are governed by and construed in accordance with the laws of Indian Constitude.
           Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Ganthinagar.</h6>
        <h6 style={{ margin: '0', maxWidth: '500px' }}>
        You are granted a limited, non-exclusive, non-transferable, and revocable license to use our AI services. You agree to use the services for lawful purposes only and agree not to:
          
        </h6>
        
        
      </div>
      
    </div>
  );
};

export default Middle;

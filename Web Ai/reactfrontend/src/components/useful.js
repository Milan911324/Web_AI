import React from 'react';
import Gemini from '../images/Gemini.png';
import Audiopen from '../images/audiopen.png';
import Auris from '../images/auris.png';
import Beingcreate from '../images/beingcreate.png';
import Canva from '../images/canva.png';
import Chatgpt4 from '../images/chatgpt4.png';
import Claude from '../images/claude.png';
import Copilot from '../images/Copilot.png';
import Firefiles from '../images/firefiles.png';
import Fotor from '../images/fotor.png';
import Laxis from '../images/laxis.png';
import microD from '../images/microsoftdesigner.png';
import Midjourny from '../images/midjourny.png';
import Opusclip from '../images/opusclip.png';
import Picalabs from '../images/picalabs.png';
import Podium from '../images/podium.png';
import Runway from '../images/runway.png';
import Synthesia from '../images/synthesia.png';
import Trint from '../images/trint.png';
import Writesonic from '../images/writesonic.png';
import '../Styles/useful.css'
import Footer from './Footer';

function Usefulai() {
    const images = [
        { name: "OpusClip", title: 'Opusclip', imageUrl: Opusclip },
        { name: "Writesonic", title: 'Writesonic', imageUrl: Writesonic },
        { name: "Trint", title: 'Trint', imageUrl: Trint },
        { name: "Synthesia", title: 'Synthesia', imageUrl: Synthesia },
        { name: "Runway", title: 'Runway', imageUrl: Runway },
        { name: "Podium", title: 'Podium', imageUrl: Podium },
        { name: "PicaLabs", title: 'Picalabs', imageUrl: Picalabs },
        { name: "Midjourney", title: 'MidJourney', imageUrl: Midjourny },
        { name: "Microsoft Designer", title: 'Microsoft Designer', imageUrl: microD },
        { name: "Laxis", title: 'Laxis', imageUrl: Laxis },
        { name: "Gemini", title: 'Google Gemini', imageUrl: Gemini },
        { name: "Fotor AI", title: 'Fotor', imageUrl: Fotor },
        { name: "Firefiles AI", title: 'FireFiles', imageUrl: Firefiles },
        { name: "GitHub Copilot", title: 'Copilot', imageUrl: Copilot },
        { name: "Claude AI", title: 'Claude', imageUrl: Claude },
        { name: "ChatGPT", title: 'ChatGPT4', imageUrl: Chatgpt4 },
        { name: "Canva AI", title: 'Canva', imageUrl: Canva },
        { name: "Audiopen", title: 'Audiopen', imageUrl: Audiopen },
        { name: "Auirs", title: 'Aurs', imageUrl: Auris },
        { name: "BeingCreate", title: 'Being Create', imageUrl: Beingcreate }
    ];

    return (
        <div>
            <div className="useful-ai">
            <h1 className="title">Useful AI Tools</h1>
            <div className="topai">
                <div className="ai-grid">
                    {images.map((ai, index) => (
                        <div key={index} className="ai-card">
                            <a href={"/AiInfo/" + ai.name} className="ai-link">
                                <img src={ai.imageUrl} alt={ai.title} className="ai-image" />
                                <div className="image-name">
                                    <b className="ai-title">{ai.title}</b>
                                    <button className="ai-button">Details</button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
             <Footer />
        </div>
        
    );
}

export default Usefulai;






//next
/* General Styles */


//next
/* General Styles */

//next
/* General Styles */
// body {
//     font-family: 'Arial', sans-serif;
//     background: linear-gradient(to right, #eef2f3, #8e9eab);
//     margin: 0;
//     padding: 0;
//     overflow-x: hidden;
// }

// /* Container for AI tools */
// .useful-ai {
//     padding: 40px;
//     max-width: 1200px;
//     margin: auto;
// }

// /* Header */
// .useful-ai h1 {
//     text-align: center;
//     margin: 20px 0;
//     color: #333;
//     font-size: 2.5em;
//     text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
//     animation: fadeIn 1s ease;
// }

// /* Keyframes for fade-in */
// @keyframes fadeIn {
//     from {
//         opacity: 0;
//         transform: translateY(-20px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// /* Grid for AI cards */
// .ai-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 30px;
// }

// /* Individual AI card styles */
// .ai-card {
//     background: white;
//     border-radius: 20px;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s;
//     padding: 20px;
//     text-align: center;
//     position: relative;
//     overflow: hidden;
// }

// /* Hover effects on AI cards */
// .ai-card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
//     border: 2px solid #007bff; /* Border on hover */
//     animation: pulse 0.5s infinite; /* Card pulse effect */
// }

// /* Keyframes for pulse effect */
// @keyframes pulse {
//     0% {
//         transform: scale(1);
//     }
//     50% {
//         transform: scale(1.05);
//     }
//     100% {
//         transform: scale(1);
//     }
// }

// /* Image styles */
// .ai-image {
//     width: 100%;
//     height: auto;
//     border-radius: 10px;
//     transition: transform 0.5s ease, filter 0.5s; 
//     filter: grayscale(100%);
// }

// /* Hover effect for images */
// .ai-card:hover .ai-image {
//     transform: scale(1.1);
//     filter: grayscale(0);
// }

// /* Title styles */
// .ai-title {
//     margin: 15px 0;
//     font-size: 1.6em;
//     color: #333;
//     transition: color 0.3s ease;
// }

// /* Change title color on card hover */
// .ai-card:hover .ai-title {
//     color: #007bff; 
// }

// /* Button styles */
// .ai-button {
//     padding: 10px 15px;
//     border: none;
//     border-radius: 25px;
//     background-color: #007bff;
//     color: white;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s, transform 0.3s;
//     position: relative;
// }

// /* Button hover effect */
// .ai-button:hover {
//     background-color: #0056b3;
//     transform: scale(1.05);
// }

// /* Glow effect on button */
// .ai-button::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 25px;
//     opacity: 0;
//     transition: opacity 0.3s;
// }

// /* Show glow effect on button hover */
// .ai-button:hover::after {
//     opacity: 1;
// }

// /* Responsive text size */
// @media (max-width: 768px) {
//     .ai-title {
//         font-size: 1.4em;
//     }

//     .ai-button {
//         font-size: 0.9em;
//         padding: 8px 12px;
//     }

//     .useful-ai h1 {
//         font-size: 2em;
//     }
// }

// /* Card overlay effect */
// .ai-card::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.1);
//     opacity: 0;
//     transition: opacity 0.3s ease;
// }

// /* Overlay visibility on hover */
// .ai-card:hover::after {
//     opacity: 1;
// }

// /* Custom scrollbar */
// ::-webkit-scrollbar {
//     width: 8px;
// }

// ::-webkit-scrollbar-thumb {
//     background: #007bff;
//     border-radius: 10px;
// }

// ::-webkit-scrollbar-thumb:hover {
//     background: #0056b3;
// }

// /* Animated background gradient */
// @keyframes gradientAnimation {
//     0% {
//         background-position: 0% 50%;
//     }
//     50% {
//         background-position: 100% 50%;
//     }
//     100% {
//         background-position: 0% 50%;
//     }
// }

// body {
//     background: linear-gradient(270deg, #8e44ad, #3498db, #2ecc71);
//     background-size: 600% 600%;
//     animation: gradientAnimation 15s ease infinite;
// }

//next
/* General Styles */
// body {
//     font-family: 'Arial', sans-serif;
//     background: linear-gradient(to right, #f0f4f8, #cfd9df);
//     margin: 0;
//     padding: 0;
//     overflow-x: hidden;
// }

// /* Container for AI tools */
// .useful-ai {
//     padding: 50px 20px;
//     max-width: 1200px;
//     margin: auto;
// }

// /* Header */
// .useful-ai h1 {
//     text-align: center;
//     margin: 20px 0;
//     color: #2c3e50;
//     font-size: 2.5em;
//     text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
//     animation: fadeIn 1s ease;
// }

// /* Keyframes for fade-in */
// @keyframes fadeIn {
//     from {
//         opacity: 0;
//         transform: translateY(-30px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// /* Grid for AI cards */
// .ai-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 30px;
//     margin-top: 20px;
// }

// /* Individual AI card styles */
// .ai-card {
//     background: white;
//     border-radius: 20px;
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s;
//     padding: 20px;
//     text-align: center;
//     position: relative;
//     overflow: hidden;
//     cursor: pointer;
// }

// /* Hover effects on AI cards */
// .ai-card:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
//     border: 2px solid #2980b9; /* Border on hover */
// }

// /* Image styles */
// .ai-image {
//     width: 100%;
//     height: auto;
//     border-radius: 15px;
//     transition: transform 0.5s ease, filter 0.5s; 
//     filter: grayscale(100%);
// }

// /* Hover effect for images */
// .ai-card:hover .ai-image {
//     transform: scale(1.1);
//     filter: grayscale(0);
// }

// /* Title styles */
// .ai-title {
//     margin: 15px 0;
//     font-size: 1.8em;
//     color: #34495e;
//     transition: color 0.3s ease;
// }

// /* Change title color on card hover */
// .ai-card:hover .ai-title {
//     color: #2980b9; 
// }

// /* Button styles */
// .ai-button {
//     padding: 10px 20px;
//     border: none;
//     border-radius: 25px;
//     background-color: #2980b9;
//     color: white;
//     font-weight: bold;
//     cursor: pointer;
//     transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
// }

// /* Button hover effect */
// .ai-button:hover {
//     background-color: #1c6691;
//     transform: scale(1.05);
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
// }

// /* Glow effect on button */
// .ai-button::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(255, 255, 255, 0.1);
//     border-radius: 25px;
//     opacity: 0;
//     transition: opacity 0.3s;
// }

// /* Show glow effect on button hover */
// .ai-button:hover::after {
//     opacity: 1;
// }

// /* Card overlay effect */
// .ai-card::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.1);
//     opacity: 0;
//     transition: opacity 0.3s ease;
// }

// /* Overlay visibility on hover */
// .ai-card:hover::after {
//     opacity: 0.5;
// }

// /* Responsive text size */
// @media (max-width: 768px) {
//     .ai-title {
//         font-size: 1.4em;
//     }

//     .ai-button {
//         font-size: 0.9em;
//         padding: 8px 15px;
//     }

//     .useful-ai h1 {
//         font-size: 2em;
//     }
// }

// /* Custom scrollbar */
// ::-webkit-scrollbar {
//     width: 8px;
// }

// ::-webkit-scrollbar-thumb {
//     background: #2980b9;
//     border-radius: 10px;
// }

// ::-webkit-scrollbar-thumb:hover {
//     background: #1c6691;
// }

// /* Animated background gradient */
// @keyframes gradientAnimation {
//     0% {
//         background-position: 0% 50%;
//     }
//     50% {
//         background-position: 100% 50%;
//     }
//     100% {
//         background-position: 0% 50%;
//     }
// }

// body {
//     background: linear-gradient(270deg, #3498db, #2ecc71);
//     background-size: 600% 600%;
//     animation: gradientAnimation 15s ease infinite;
// }

// /* Additional animations */
// @keyframes bounce {
//     0%, 20%, 50%, 80%, 100% {
//         transform: translateY(0);
//     }
//     40% {
//         transform: translateY(-10px);
//     }
//     60% {
//         transform: translateY(-5px);
//     }
// }

// .ai-card {
//     animation: bounce 1s ease infinite;
// }

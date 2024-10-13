// import React from "react";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
import Gemini from '../images/Gemini.png'
import Audiopen from '../images/audiopen.png'
import Auris from '../images/auris.png'
import Beingcreate from '../images/beingcreate.png'
import Canva from '../images/canva.png'
import Chatgpt4 from '../images/chatgpt4.png'
import Claude from '../images/claude.png'
import Copilot from '../images/Copilot.png'
import Firefiles from '../images/firefiles.png'
import Fotor from '../images/fotor.png'
import Laxis from '../images/laxis.png'
import microD from '../images/microsoftdesigner.png'
import Midjourny from '../images/midjourny.png'
import Opusclip from '../images/opusclip.png'
import Picalabs from '../images/picalabs.png'
import Podium from '../images/podium.png'
import Runway from '../images/runway.png'
import Synthesia from '../images/synthesia.png'
import Trint from '../images/trint.png'
import Writesonic from '../images/writesonic.png'
// import ''
import '../Styles/Topai.css'
// import Footer from './Footer';
function Topai(){
    const image = [
        
        
        { name: "synthesia", title: 'Synthesia', imageUrl: Synthesia },
        
        { name: "Midjourney", title: 'MidJourny', imageUrl: Midjourny },
        { name: "Microsoft Designer", title: 'Microsoft Designer', imageUrl: microD },
        
        { name: "Gemini", title: 'Google Gemini', imageUrl: Gemini },
        { name: "Firefiles AI", title: 'FireFiles', imageUrl: Firefiles },
        { name: "GitHub Copilot", title: 'Copilot', imageUrl: Copilot },
        { name: "Claude AI", title: 'Claude', imageUrl: Claude },
        { name: "ChatGPT", title: 'ChatGPT4', imageUrl: Chatgpt4 },
        { name: "Canva AI", title: 'Canva', imageUrl: Canva },
        
        { name: "BeingCreate", title: 'Being Create', imageUrl: Beingcreate }
    ];
    return (
        <div>
            <div className="topai">
            <div className="ai-grid">
                {image.map((ai, index) => (
                    <div key={index} className="ai-card">
                        <a href={"/AiInfo/" + ai.name} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <img src={ai.imageUrl} alt={ai.title} style={{ width: '100px', height: '100px', marginRight: '10px',marginLeft:'20px' }} /> {/* Adjust size as needed */}
                            <div className="image-name" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                                <b style={{marginLeft:'40px'}}>{ai.title}</b>
                                <button style={{
                                    marginTop: '5px',
                                    padding: '5px 10px',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    marginLeft:'40px',
                                }}>
                                    Details
                                </button>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            
        </div>
        <div>
            <Footer/>
        </div>

    </div>
        
        
    );
    
    
}

export default Topai
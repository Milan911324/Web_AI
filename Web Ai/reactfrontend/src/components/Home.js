import React from "react";
import './scroll.css';
import Top from "./Top";
import Footer from "./Footer";
import Middle from './Middle'
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

function Home() {
  // Function to handle button click and open the specified URL
  const audiopen={name:"Audiopen",title: 'Audiopen', imageUrl: Audiopen}
  const auris={name:"Auirs",title: 'Aurs', imageUrl: Auris}
  const beingcreate={name:"BeingCreate",title: 'Being Create', imageUrl: Beingcreate}
  const canva={name:"Canva AI",title: 'Canva', imageUrl: Canva}
  const chatgpt4={name:"ChatGPT",title: 'ChatGPT4', imageUrl: Chatgpt4}
  const claude={name:"Claude AI",title: 'Claude', imageUrl: Claude}
  const copilot={name:"GitHub Copilot",title: 'Copilot', imageUrl: Copilot}
  const firefiles={name:"Firefiles AI",title: 'FireFiles', imageUrl: Firefiles}
  const fotor={name:"Fotor AI",title: 'Fotor', imageUrl: Fotor}
  const gemini={name:"Gemini",title: 'Google Gemini', imageUrl: Gemini}
  const laxis={name:"Laxis",title: 'Laxis', imageUrl: Laxis}
  const microd={name:"Microsoft Designer",title: 'Microsoft Designer', imageUrl: microD}
  const midjourny={name:"Midjourney",title: 'MidJourny', imageUrl: Midjourny}
  const picalabs={name:"PicaLabs",title: 'Picalabs', imageUrl: Picalabs}
  const podium={name:"podium",title: 'Podium', imageUrl: Podium}
  const runway={name:"runway",title: 'Runway', imageUrl: Runway}
  const synthesia={name:"synthesia",title: 'Synthesia', imageUrl: Synthesia}
  const trint={name:"Trint",title: 'Trint', imageUrl: Trint}
  const writesonic={name:"Writesonic",title: 'Writesonic', imageUrl: Writesonic}
  const opusclip={name:"OpusClip",title: 'Opusclip', imageUrl: Opusclip}

  
  const popular = [chatgpt4,synthesia,firefiles,gemini];
  const Designer=[runway,midjourny,fotor,canva]
  const bestforstudents = [beingcreate,claude,copilot,opusclip];
  const other1=[audiopen,auris,laxis,microd]
  const other2=[picalabs,podium,trint,writesonic]

  return (
    <div>
      <Top/>
      <Middle title="Best For Students" ais={bestforstudents}/>
      {/* <Middle title="Popular" ais={popular}/>
      <Middle title="Best For Designer" ais={Designer}/>
      <Middle title="Others" ais={other1}/>
      <Middle title="" ais={other2}/> */}
      <Footer/>
    </div>
  );
}
// document.body.style.backgroundColor = 'black';
export default Home;

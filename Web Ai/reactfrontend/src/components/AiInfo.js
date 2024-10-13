// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Footer from './Footer';
// import Gemini from '../images/Gemini.png'
// import Audiopen from '../images/audiopen.png'
// import Auris from '../images/auris.png'
// import Beingcreate from '../images/beingcreate.png'
// import Canva from '../images/canva.png'
// import Chatgpt4 from '../images/chatgpt4.png'
// import Claude from '../images/claude.png'
// import Copilot from '../images/Copilot.png'
// import Firefiles from '../images/firefiles.png'
// import Fotor from '../images/fotor.png'
// import Laxis from '../images/laxis.png'
// import microD from '../images/microsoftdesigner.png'
// import Midjourny from '../images/midjourny.png'
// import Opusclip from '../images/opusclip.png'
// import Picalabs from '../images/picalabs.png'
// import Podium from '../images/podium.png'
// import Runway from '../images/runway.png'
// import Synthesia from '../images/synthesia.png'
// import Trint from '../images/trint.png'
// import Writesonic from '../images/writesonic.png'


// const AIInfo = () => {
//     const [aiData, setAIData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { name } = useParams();
//     const image = [
//         { name: "OpusClip", title: 'Opusclip', imageUrl: Opusclip },
//         { name: "Writesonic", title: 'Writesonic', imageUrl: Writesonic },
//         { name: "Trint", title: 'Trint', imageUrl: Trint },
//         { name: "synthesia", title: 'Synthesia', imageUrl: Synthesia },
//         { name: "runway", title: 'Runway', imageUrl: Runway },
//         { name: "podium", title: 'Podium', imageUrl: Podium },
//         { name: "PicaLabs", title: 'Picalabs', imageUrl: Picalabs },
//         { name: "Midjourney", title: 'MidJourny', imageUrl: Midjourny },
//         { name: "Microsoft Designer", title: 'Microsoft Designer', imageUrl: microD },
//         { name: "Laxis", title: 'Laxis', imageUrl: Laxis },
//         { name: "Gemini", title: 'Google Gemini', imageUrl: Gemini },
//         { name: "Fotor AI", title: 'Fotor', imageUrl: Fotor },
//         { name: "Firefiles AI", title: 'FireFiles', imageUrl: Firefiles },
//         { name: "GitHub Copilot", title: 'Copilot', imageUrl: Copilot },
//         { name: "Claude AI", title: 'Claude', imageUrl: Claude },
//         { name: "ChatGPT", title: 'ChatGPT4', imageUrl: Chatgpt4 },
//         { name: "Canva AI", title: 'Canva', imageUrl: Canva },
//         { name: "Audiopen", title: 'Audiopen', imageUrl: Audiopen },
//         { name: "Auirs", title: 'Aurs', imageUrl: Auris },
//         { name: "BeingCreate", title: 'Being Create', imageUrl: Beingcreate }
//     ];
//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/aiinformation/')
//             .then((response) => {
//                 if (response.data) {
//                     setAIData(response.data);
//                 } else {
//                     setError(new Error("Data format is incorrect"));
//                 }
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err);
//                 setLoading(false);
//             });
//     }, [name]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error fetching data: {error.message}</div>;

//     const selectedAI = aiData.find(item => item.name === name);
//     const imgurl = image.find(item => item.name === name);

//     if (!selectedAI) return <div>No AI information found</div>;

//     return (<>
//         <div style={styles.container}>
//             <div style={styles.header}>
//                 <img src={imgurl.imageUrl || "default-logo.png"} alt={`${selectedAI.name} logo`} style={styles.logo} />
//                 <h1 style={styles.title}>{selectedAI.name}</h1>
//             </div>
//             <table style={styles.table}>
//                 <tbody>
//                     <tr>
//                         <th style={styles.tableHeader}>Field</th>
//                         <th style={styles.tableHeader}>Information</th>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Type</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.type}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Usage</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.usage}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Model of AI</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.modelofai}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Popularity</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.popularity}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Link</strong></td>
//                         <td style={styles.tableCell}>
//                             <a href={selectedAI.linktodetail} target="_blank" rel="noopener noreferrer">{selectedAI.linktodetail}</a>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Company</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.company}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Launch Year</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.launchyear}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Support Language</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.supportlang}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>API Access</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.apiaccess}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Customization</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.custmization}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Speed</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.speed}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Training Data</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.trainingdata}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Realtime Capabilities</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.realtimecapabilities}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Ethical Considerations</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.ethicalconsiderations}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Integration</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.integration}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>User Base</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.userbase}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Training Methodology</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.trainingmethodology}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Data Size</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.datasize}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Hardware Required</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.hardwerrequired}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Energy Consumption</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.energyconsumption}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Maintenance Updates</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.maintenanceupdates}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Security Features</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.securityfeatures}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Open Source</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.opensource}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Scalability</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.scalability}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>User Feedback</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.userfeedback}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Limitations</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.limitations}</td>
//                     </tr>
//                     <tr>
//                         <td style={styles.tableCell}><strong>Cost</strong></td>
//                         <td style={styles.tableCell}>{selectedAI.costofmonth}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//         <Footer />
//     </>
//     );
// };

// const styles = {
//     container: {
//         maxWidth: '800px',
//         margin: '0 auto',
//         padding: '20px',
//         fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
//     header: {
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: '20px',
//     },
//     logo: {
//         width: '150px',
//         height: '150px',
//         marginRight: '20px',
//         borderRadius: '10px',
//         objectFit: 'cover',
//     },
//     title: {
//         fontSize: '32px',
//         fontWeight: '600',
//         color: '#333',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//         marginTop: '20px',
//     },
//     tableHeader: {
//         border: '1px solid #ddd',
//         padding: '10px',
//         backgroundColor: '#f2f2f2',
//         textAlign: 'left',
//     },
//     tableCell: {
//         border: '1px solid #ddd',
//         padding: '10px',
//     },
// };


// export default AIInfo;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
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

const AIInfo = () => {
    const [aiData, setAIData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { name } = useParams();

    // Array of image objects
    const imageArray = [
        { name: "OpusClip", title: 'Opusclip', imageUrl: Opusclip },
        { name: "Writesonic", title: 'Writesonic', imageUrl: Writesonic },
        { name: "Trint", title: 'Trint', imageUrl: Trint },
        { name: "Synthesia", title: 'Synthesia', imageUrl: Synthesia },
        { name: "Runway", title: 'Runway', imageUrl: Runway },
        { name: "Podium", title: 'Podium', imageUrl: Podium },
        { name: "PicaLabs", title: 'Picalabs', imageUrl: Picalabs },
        { name: "Midjourney", title: 'MidJourny', imageUrl: Midjourny },
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
        { name: "Auris", title: 'Auris', imageUrl: Auris },
        { name: "BeingCreate", title: 'Being Create', imageUrl: Beingcreate },
    ];

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/aiinformation/')
            .then((response) => {
                setAIData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [name]);

    if (loading) return <div style={styles.loading}>Loading...</div>;
    if (error) return <div style={styles.error}>Error fetching data: {error.message}</div>;

    const selectedAI = aiData.find(item => item.name === name);

    if (!selectedAI) return <div style={styles.error}>No AI information found</div>;

    // Find the image for the selected AI
    const aiImage = imageArray.find(img => img.name.toLowerCase() === selectedAI.name.toLowerCase());

    return (
        <>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>{selectedAI.name}</h1>
                </div>
                <div style={styles.content}>
                    <div style={styles.imageContainer}>
                        {aiImage ? (
                            <img src={aiImage.imageUrl} alt={`${selectedAI.name} logo`} style={styles.image} />
                        ) : (
                            <div>No image available</div>
                        )}
                    </div>
                    <table style={styles.table}>
                        <tbody>
                            {Object.entries(selectedAI).map(([key, value], index) => (
                                <tr key={index}>
                                    <td style={styles.tableHeader}>{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                                    <td style={styles.tableCell}>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

const styles = {
    container: {
        margin: '0 auto',
        padding: '40px',
        maxWidth: '1000px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    title: {
        fontSize: '36px',
        fontWeight: '700',
        color: '#333',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    imageContainer: {
        flex: '0 0 40%',
    },
    image: {
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    table: {
        flex: '1',
        marginLeft: '20px',
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        padding: '10px',
        backgroundColor: '#f7f7f7',
        border: '1px solid #ddd',
    },
    tableCell: {
        padding: '10px',
        border: '1px solid #ddd',
    },
    loading: {
        textAlign: 'center',
        fontSize: '24px',
        padding: '20px',
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
};

export default AIInfo;

import React from 'react';

function App() {
    let dataUrl = process.env.REACT_APP_API_URL;
    let dataKey = process.env.REACT_APP_API_KEY;
    let dataMode = process.env.REACT_APP_MODE;

    return (
        <div>
            <h1>Environment Based Configuration in React</h1>
            <p>API URL: {dataUrl}</p>
            <p>API Key: {dataKey}</p>
            <p>Mode: {dataMode}</p>
        </div>
    )
}

export default App;
import React, { useState } from 'react';
import './App.css';
import logo from './assets/security.gif';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit

    if (inputValue) {
      try {
        // Make the POST request to the backend
        const response = await fetch('http://localhost:5002/api/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: inputValue }),  // Sending URL data to the backend
        });

        // Parse the response from backend
        const data = await response.json();

        console.log(data);  // Log the response to check the value

        // Check the response and set the prediction state
        if (data.isPhishing !== undefined) {
          setPrediction(data.isPhishing);  // Set the prediction to true or false
        } else {
          setPrediction("Error: No prediction found");
        }
      } catch (error) {
        console.error('Error:', error);
        setPrediction('Error detecting URL');
      }
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Security Shield" className='logo' />
      <h1>Phishing Detection Tool</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter URL to check for phishing"
        />
        <button type="submit">Check URL</button>
      </form>

      {prediction !== null && (
        <div className={`result ${prediction === true ? 'phishing' : prediction === false ? 'safe' : 'error'}`}>
          {prediction === true && <p>⚠️ This is likely a phishing attempt!</p>}
          {prediction === false && <p>✔️ This URL appears to be safe.</p>}
          {typeof prediction === 'string' && <p>❌ {prediction}</p>}
        </div>
      )}
    </div>
  );
}

export default App;

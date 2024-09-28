import React from 'react';
import './App.css'; // Ensure this file exists and is linked to your styles

function App() {
  const personalInfo = {
    name: 'John Doe',
    occupation: 'Software Engineer',
    location: 'Waterloo, ON',
    bio: 'I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.'
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Page</h1>
        <p><strong>Name:</strong> {personalInfo.name}</p>
        <p><strong>Occupation:</strong> {personalInfo.occupation}</p>
        <p><strong>Location:</strong> {personalInfo.location}</p>
        <p><strong>Bio:</strong> {personalInfo.bio}</p>
      </header>
    </div>
  );
}

export default App;

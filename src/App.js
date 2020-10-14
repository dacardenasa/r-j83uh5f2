import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <textarea rows="3" onChange={ e => setText(e.target.value)}></textarea>
      <div className="counter">{text.length}</div>
    </div>
  );
}

export default App;

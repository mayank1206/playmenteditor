import React from 'react';
import '../App.css';

const Output = ({ runcode }) => {
 
  return (
    <div className="output">
      <iframe className="output-frame" title="Output screen" srcdoc={runcode}></iframe>
    </div>
  )
}

export default Output

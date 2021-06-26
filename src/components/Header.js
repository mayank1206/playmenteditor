import React from 'react';

const Header = ({darkMode,downloadFile,runFile}) => {
 
  return (
    <ul className="horizontal">
      <li><a href="javascript:void(0);" onClick={darkMode}>Dark Mode</a></li>
      <li><a href="javascript:void(0);" onClick={downloadFile}>Save</a></li>
      <li><a href="javascript:void(0);" onClick={runFile}>Run >></a></li>
    </ul>
  )
}

export default Header
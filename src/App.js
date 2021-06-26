import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Header from './components/Header'
import Editor from './components/Editor';
import Output from './components/Output';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const downloadFile = () => {
    var filename = "download.txt";
    download(filename, code);
  };

  const runFile = () => {
    runCode(code);
  };

  function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  const [code, setCode] = useState('')
  const [runcode, runCode] = useState('')
  function onCodeChange(newValue) {
    setCode(newValue);
  }
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Header darkMode={themeToggler} downloadFile={downloadFile} runFile={runFile}/>
          <div id="editorcontainer">
            <Editor onCodeChange={onCodeChange} />
            <Output runcode={runcode} />
          </div>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;






      
    


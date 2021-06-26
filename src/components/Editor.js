import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import '../App.css';

const Editor = ({ onCodeChange }) => {
 
  function onChange(newValue) {
    onCodeChange(newValue);
  }

  return (
    <div className="editor">
      <AceEditor
        placeholder="//write your code here"
        width="100%"
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
      />
    </div>
  )
}

export default Editor
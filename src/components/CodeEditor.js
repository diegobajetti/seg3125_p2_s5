import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";
import "./CodeEditor.css";
import { Button } from "./Button";

const CodeEditor = () => {
  const [code, _] = useState("");
  const [testCaseResults, setTestCaseResults] = useState([]);

  const checkCode = () => {
    const randomResults = Array.from({ length: 3 }, () => Math.random() < 0.5);
    setTestCaseResults(randomResults);
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="container">
      <h2>Create a function to add two numbers</h2>
      <div className="test-case-container">
        {testCaseResults.map((res, i) => {
          return (
            <div key={i} className="test-case">
              <div>{res ? "✅ passed" : "❌ failed"}</div>
            </div>
          );
        })}
      </div>
      <CodeMirror value={code} onChange={onChange} className="code-editor" />
      <Button
        onClick={() => checkCode()}
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        Submit Code
      </Button>
    </div>
  );
};

export default CodeEditor;

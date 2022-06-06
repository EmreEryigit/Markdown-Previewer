import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState("Enter Your Text Here");
  return (
    <div className="mt-5">
    <div className="App-header">
      Markdown Previewer
    </div>
      <div className=" col-md-6 d-inline-block">
        <Form text={text} setText={setText}/>
      </div>
      <div className="d-inline-block">
        <Preview text={text} setText={setText} />
      </div>
    </div>
  );
}

export default App;

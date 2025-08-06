import { useState } from "react";

export default function HelloMyNamePage() {
  const [name,setName] = useState("");
  const[result, setResult] = useState("Name Please");
  const [isGreetOk,setGreetOk] = useState(false);

  const nameInput = (event:any) => {
    setName(event.target.value);
  };
  const addName = () => {
      if(name === ""){
        setResult("Name Please");
        setGreetOk(false);
      }
      else {
        setResult(`What's up ${name}`);
        setGreetOk(true);
      }
  };

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value = {name}
      />
      <button className="btn btn-primary" onClick = {addName}>Greet Me</button>
      {/* Result Text */}
      <p className = {isGreetOk ? "" : "text-danger"}>{result}</p>
    </div>
  );
}

import { useState } from "react";
import "./App.css";
import Input from "./shared/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello !</p>
      <Input />
    </div>
  );
}

export default App;

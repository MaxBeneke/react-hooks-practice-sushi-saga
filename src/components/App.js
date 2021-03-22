import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(100)
  const [plates, setPlates] = useState([])
  const addEmptyPlate = () => {
    setPlates([...plates, plates.length + 1])
  }
  

  return (
    <div className="app">
      <SushiContainer addEmptyPlate={addEmptyPlate} setBudget={setBudget} budget={budget}/>
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;

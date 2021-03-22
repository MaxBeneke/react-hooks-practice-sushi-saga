import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({addEmptyPlate, setBudget, budget}) {
  const [sushi, setSushi] = useState([])
  const [sushiWindow, setSushiWindow] = useState([0, 1, 2, 3])

  const moreSushi = () => {
    const newWindow = sushiWindow.map(idNum => {
     return idNum + 4
    })
    setSushiWindow(newWindow)
  }

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then(r => r.json())
      .then(sushiArr => {
        setSushi(sushiArr)
      })
  }, []);


  return (
    <div className="belt">
      {sushi.map((sushi, index) => {
      return sushiWindow.includes(index) && <Sushi 
       key={sushi.id} 
       name={sushi.name} 
       img={sushi.img_url} 
       price={sushi.price}
       addEmptyPlate={addEmptyPlate}
       setBudget={setBudget}
       budget={budget}
       />
      })}
      <MoreButton 
      moreSushi={moreSushi}
      />
    </div>
  );
}

export default SushiContainer;

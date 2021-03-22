import React, {useState } from "react";

function Sushi({name, img, price, addEmptyPlate, setBudget, budget}) {
  const [isEaten, setIsEaten] = useState(false);

  const eatSushi = () => {
    if (budget - price >= 0) {
      addEmptyPlate()
      setIsEaten(true)
      setBudget(budget - price)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {!isEaten && 
          <img
            src={img}
            alt={name}
            width="100%"
          />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

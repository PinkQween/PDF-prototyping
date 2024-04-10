import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

const Size = () => {
  const navigate = useNavigate();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleXChange = (e) => {
    const newX = parseFloat(e.target.value);
    if (!isNaN(newX) && newX > 0) {
      setX(newX);
    }
  };

  const handleYChange = (e) => {
    const newY = parseFloat(e.target.value);
    if (!isNaN(newY) && newY > 0) {
      setY(newY);
    }
  };

  return (
    <>
      <p>Enter PDF size (in):</p>
      <input type="number" onChange={handleXChange} />
      <input type="number" onChange={handleYChange} />
      <button type="submit" onClick={() => {
        navigate(`/app?x=${x}&y=${y}`);
      }}>Enter</button>
    </>
  )
}

export default Size

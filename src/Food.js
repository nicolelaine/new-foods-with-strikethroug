import React, { useState } from "react";

const Food = ({ name }) => {
  const [tried, setTried] = useState(false);

  const handleItemClick = () => {
    setTried(!tried);
  };

  return (
    <li className={tried ? "strike" : ""} onClick={handleItemClick}>
      {name}
    </li>
  );
};

export default Food;

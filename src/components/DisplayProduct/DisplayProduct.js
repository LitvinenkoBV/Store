import React, { useContext } from "react";
import { SwitcherContext } from "../App/App";

const DisplayProduct = () => {
  const { switchDisplay } = useContext(SwitcherContext);

  return (
    <div>
      <div style={{ textAlign: "right", marginRight: "20px" }}>
        <button onClick={() => switchDisplay("cards")}>
          <img style={{ width: "20px" }} src="./img/17.png" />
        </button>
        <button onClick={() => switchDisplay("table")}>
          <img style={{ width: "24px" }} src="./img/table.png" />
        </button>
      </div>
    </div>
  );
};

export default DisplayProduct;

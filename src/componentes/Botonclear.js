import React from "react";
import "../styles/BotonClear.css";

const Botonclear = (props) => {
  return (
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};

export default Botonclear;

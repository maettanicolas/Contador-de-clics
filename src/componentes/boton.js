import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      type="button"
      class="btn btn-light"
      className={esBotonDeClic ? "btn btn-light" : "btn btn-light"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
export default Boton;

import React from "react";

export default function Component4() {
  return (
    <div>
      <h1>Componente 4</h1>
      <h6>Componente para barras de carga o de progresos:</h6>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar w-50" ></div>
      </div>
    </div>
  );
}

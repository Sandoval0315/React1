import React from "react";

export default function Component9() {
  return (
    <div>
      <h1>Componente 9</h1>
      <h6>Componente que nos ayuda a desplegar informacion con botones:</h6>
      <p class="d-inline-flex gap-1">
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button para mostrar info
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button para mostrar info
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">Informacion a mostrar</div>
      </div>
      <div class="collapse" id="collapseExample2">
        <div class="card card-body">Informacion a mostrar adicional</div>
      </div>
    </div>
  );
}

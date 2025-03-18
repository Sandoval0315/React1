import React from "react";

export default function Component10() {
  return (
    <div>
      <h1>Componente 10</h1>
      <h6>Este componente nos ayuda para hacer listas con checkbox:</h6>
      <ul class="list-group">
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            id="firstCheckboxStretched"
          />
          <label
            class="form-check-label stretched-link"
            for="firstCheckboxStretched"
          >
            Primer checkbox
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            id="secondCheckboxStretched"
          />
          <label
            class="form-check-label stretched-link"
            for="secondCheckboxStretched"
          >
            Segundo checkbox
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            id="thirdCheckboxStretched"
          />
          <label
            class="form-check-label stretched-link"
            for="thirdCheckboxStretched"
          >
            Tercer checkbox
          </label>
        </li>
      </ul>
    </div>
  );
}

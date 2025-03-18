import React from "react";

export default function Component5() {
  return (
    <div>
        <h1>Componente 5</h1>
        <h6>Menu desplegable:</h6>
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <button type="button" class="btn btn-primary">
          1
        </button>
        <button type="button" class="btn btn-primary">
          2
        </button>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Redes
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="https://instagram.com" target="_bank">
                instagram
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="https://facebook.com" target="_bank">
                facebook
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="https://snapchat.com" target="_bank">
                snapchat
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="https://vs.co" target="_bank">
                vsco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

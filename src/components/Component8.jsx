
import React from "react";

export default function Component8() {
  return (
    <div>
      <h1>Componente 8</h1>
      <h6>Este componente nos proporciona un carrusel de imagenes:</h6>
      <br>
      </br>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://static.bershka.net/assets/public/a1d8/34bb/af8d4ee69aef/20c7487e1d1b/02231190462-a4o/02231190462-a4o.jpg?ts=1733413055947&w=320"
              class="d-block w-100"
              alt="messi"
            />{" "}
          </div>
          <div class="carousel-item">
            <img
              src="https://static.bershka.net/assets/public/b26b/2066/5ac44e96bcb6/c2330467ca99/07051498594-a4o/07051498594-a4o.jpg?ts=1726748790422&w=320"
              class="d-block w-100"
              alt="messi"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static.bershka.net/assets/public/3412/ba14/9c7945c3a36a/d1b793814a8d/00351352800-p/00351352800-p.jpg?ts=1737114486092&w=320"
              class="d-block w-100"
              alt="messi"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
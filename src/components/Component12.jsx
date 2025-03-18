import React from 'react'

export default function Component12() {
  return (
    <div>
      <h1>Componente 12</h1>
      <h6>Componente para barras de navegacion:</h6>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Titulo del navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#Component12">Inicio</a>
        <a class="nav-link" href="#Component12">Contactanos</a>
        <a class="nav-link" href="#Component12">Acerca de</a>
        <a class="nav-link disabled" aria-disabled="false" href='#Component12'>Perfil</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

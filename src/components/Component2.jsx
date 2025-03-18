import React, { useState } from "react";

export default function Component2() {
  const [text, setText] = useState();
  const [updated, setUpdated] = useState();

  const textOnChange = (event) => {
    setText(event.target.value);
  };
  const buttonOnClick = () => {
    setUpdated(text);
  };
  return (
    <div>
      <h1>Componente 2</h1>
      <h6>con este componente podemos usar inputs eh imprimir:</h6>
        <input type="text" value={text} onChange={textOnChange} />
        <button onClick={buttonOnClick}>Enviar</button>
        <h6>Edad del usuario: {text}</h6>
        <h6>Edad Actualizada: {updated}</h6>
    </div>
  );
}

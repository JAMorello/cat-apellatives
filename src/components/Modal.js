import { useState } from 'react';
import Notificacion from './Notificacion.js';
import Form from './Form';

function Modal() {

  let [isOk, setIsOk] = useState(false);
  let [isAlert, setIsAlert] = useState(false);

  function addWords(word1, word2) {

    let message;
    // Crear un json con las palabras nuevas
    // Tal vez hacer un GET, hacer validación, agregar, ¿borrar el viejo?.
    // enviar el nuevo listado

    fetch('https://cat-apellatives-default-rtdb.firebaseio.com/XXXXXX', 
    {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className="modal">
      <Notificacion OK={isOk} ALERT={isAlert}/>
      <p>Agregar palabras</p>
      <small>Los apelativos siguen la siguente estructura:</small>
      <small>
        <b><em>palabra 1</em> con <em>palabra 2</em></b>
      </small>
      <Form onAddWords={addWords} />
    </div>
    )
};

export default Modal;
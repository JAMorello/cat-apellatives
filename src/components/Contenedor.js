import { useState } from "react";
import Generador from "./Generador";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Contenedor() {
  let apodo = "Apodo";
  //    [ variable,     function ]
  let [showModal, setShowModal] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  let [gotData, setGotData] = useState(false);

  function generateText() {}
  // GET METHOD
  // Buscar adjetivos y sustantivos
  fetch("https://cat-apellatives-default-rtdb.firebaseio.com/XXXXXXXX")
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      let palabras = []

      for (let key in data) {
        let palabra1 = {
          id: key,
          ...data[key]
        };
        palabras.push(palabra1)
      };

      setIsLoading(false);
      setGotData(true);
    });

  function addWords() {
    setShowModal(true);
  }

  function cancelAction() {
    setShowModal(false);
  }

  return (
    <div className="container">
      <Generador text={apodo} />
      <div className="container__actions">
        <button className="btn" onClick={generateText}>
          Apodo random!
        </button>
        <button className="btn btn--alt" onClick={addWords} text={apodo}>
          Añadir palabras
        </button>
      </div>
      {showModal && <Modal />}
      {showModal && <Backdrop onClick={cancelAction} />}
    </div>
  );
}

export default Contenedor;

import { useRef } from 'react';

function Form(props) {

  let word1InputRef = useRef();
  let word2InputRef = useRef()

  function submitHandler(event) {
    event.preventDefault();

    let enteredWord1 = word1InputRef.current.value;
    let enteredWord2 = word2InputRef.current.value;

    props.addWords(enteredWord1, enteredWord2);
  };

  return (
    <form className="form" onSubmit={submitHandler}>

      <div className="item">
        <label htmlFor="word1">Palabra 1</label>
        <input type="text" id="word1" ref={word1InputRef}/>
        <small></small>
      </div>

      <div className="item">
        <label htmlFor="word1">Palabra 2</label>
        <input type="text" id="word2" ref={word2InputRef}/>
        <small></small>
      </div>

      <div className="item">
        <button className="btn">Guardar</button>
      </div>

    </form>
  );
}

export default Form;

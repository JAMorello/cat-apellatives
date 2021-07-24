function Notificacion(props) {

  if (props.OK) {
    return (
      <div>
        <p className="ok">¡Palabra(s) agregada(s)!</p>
      </div>
    )
  }
  if (props.ALERT) {
    return (
      <div>
        <p className="alerta">¡Error! Tal vez tu palabra ya está en el sistema.</p>
      </div>
    )
  }
  return (<div></div>)
}

export default Notificacion;
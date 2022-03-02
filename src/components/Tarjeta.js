import "./Tarjeta.css"

const Tarjeta = ({ title, price, thumbnail, shipping, condition, color, discount }) => {

 const convertirApesos = num => `$ ${num}`

  return (
    // puedo usar expresiones pero no puedo usar sentencias 
    <article className={color}>
      <h2>{title}</h2>
      <h3>{convertirApesos(price)}</h3>
      <img src={thumbnail} />
      
      {shipping === true && <p>Envio gratuito</p>}
      <p>{condition === "new" ? "Nuevo" : "Usado"}</p>

      {discount !== 0 && <p> {discount} %OFF </p>}

      <p>{discount > 0 && discount + "% OFF"}</p>

      <p>{discount > 0 && `${discount} % OFF`}</p>

      {discount !== 0 ? <p>{discount} % OFF</p> :""}

{/* 
      // si descuento es 0, no mostrar nada
      // si descuento es cualquier cosa menos 0, quiero mostrar {descuento}% OFF */}
    </article>
  )
}

export default Tarjeta;
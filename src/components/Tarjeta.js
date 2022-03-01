import "./Tarjeta.css"

const Tarjeta = ({ title, price, thumbnail, shipping, condition, color, discount }) => {

  console.log(price, shipping)
  
  // renderizado condicional 

  
  // condicionales en JS 

  // 1. if / else / else if

  // SENTENCIA -> for switch 
  // const edad = 20
  // if (edad > 18) {
  //   alert("mayor de edad")
  // }
  // else {
  //   alert("menor de edad")
  // }


  // EXPRESIONES --> TODO AQUELLO QUE ME RETORNA UN 
  // VALOR QUE SE PUEDA GUARDAR EN UNA VARIABLE 
  // 2.  operador ternario

  // const edad = 22
  // const resultado = edad === 18 ? "es 18" : "no es 18"
  // console.log(resultado)

  // 3. && || (operador cortocuito)

  // si la primera parte es verdadera, se retorna la segunda
  // si la primera parte es falsa, se retorna la primera parte 
  // const edad = 22
  // const resultado = edad === 18 && "la edad es 18"
  // console.log(resultado)



  return (
    // puedo usar expresiones pero no puedo usar sentencias 
    <article className={color}>
      <h2>{title}</h2>
      <h3>{price}</h3>
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
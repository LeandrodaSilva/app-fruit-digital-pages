import React from "react"
import "./styles.css"

function CardItem({children}) {
  return(
    <li className="cardItem">{children}</li>
  )
}

export default CardItem
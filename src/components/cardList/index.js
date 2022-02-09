import React from "react"
import "./styles.css"

function CardList({children}) {
  return (
    <ul className="cardList">
      {children}
    </ul>
  )
}

export default CardList
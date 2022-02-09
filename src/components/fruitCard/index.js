import React from "react"
import Card from "../card";
import { useHistory } from "react-router-dom";
import "./styles.css"

function FruitCard({data, showDetails = undefined, animate = undefined}) {
  let history = useHistory();
  return (
    <Card>
      <div
        className={`fruitCard ${showDetails ? "details" : ''}`}
        title={data.name}
        onClick={() => history.push(`/fruit/${data.name}`)}
      >
        <div className={animate ? "animated" : ''}>
          <div className="fruitCard-photo">
            <img src={data.photo} alt={`Imagem ${data.name}`}/>
          </div>
          {
            !showDetails &&
              <div className="fruitCard-name">
                <h2>{data.name}</h2>
              </div>
          }
          {
            showDetails &&
              <>
                <div className="fruitCard-info">
                  <p className="fruitCard-info-name">{data.name}</p>
                  <div className="fruitCard-info-details">
                    <p>Calorias: {data.calories??""}</p>
                    <p>Proteínas: {data.protein??""}</p>
                    <p>Carboidratos: {data.carbohydrates??""}</p>
                    <p>Fibras: {data.fiber??""}</p>
                    <p>Gorduras: {data.blubber??""}</p>
                    <p>Porção diária: {data.portion??""}</p>
                  </div>
                </div>
              </>
          }
        </div>
      </div>
    </Card>
  )
}

export default FruitCard
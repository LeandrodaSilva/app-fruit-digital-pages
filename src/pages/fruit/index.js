import React, {useEffect, useState} from "react"
import Layout from "../../components/layout";
import {useParams} from "react-router-dom";
import Container from "../../components/container";
import fruitService from "../../services/fruitService";
import FruitCard from "../../components/fruitCard";
import "./styles.css"


function Fruit() {
  let params = useParams();
  const [fruit, setFruit] = useState(null);

  const getFruit = async () => {
    let res = await fruitService.findOneByName(params.name);

    if (res)
      setFruit(res)
  }

  useEffect(() => {
    getFruit()
  }, [])

  return (
    <Layout>
      <Container>
        {fruit && <div className="fruitPage"><FruitCard data={fruit} showDetails animate /></div>}
      </Container>
    </Layout>
  )
}

export default Fruit
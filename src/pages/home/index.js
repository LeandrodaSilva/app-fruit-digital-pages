import './styles.css';
import Layout from "../../components/layout";
import CardList from "../../components/cardList";
import CardItem from "../../components/cardItem";
import Container from "../../components/container";
import {useEffect, useState} from "react";
import fruitService from "../../services/fruitService";
import FruitCard from "../../components/fruitCard";

function Index() {
  const [fruits, setFruits] = useState([]);

  const renderFruits = () => {
    return fruits.map((fruit, index) => (
      <CardItem key={index}>
        <FruitCard data={fruit} showDetails/>
      </CardItem>
    ))
  }

  const getFruits = async () => {
    let res = await fruitService.all();
    if (res) {
      setFruits(res);
    }
  }

  useEffect(() => {
    getFruits();
  }, [])

  return (
    <Layout>
      <Container>
        <CardList>
          {renderFruits()}
        </CardList>
      </Container>
    </Layout>
  );
}

export default Index;

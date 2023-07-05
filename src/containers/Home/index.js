import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import HomePic from "../../assets/homepic.svg";

import H1 from '../../components/Title'
import Button from "../../components/Button";
import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  
} from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputClientName = useRef();
  //const ordersClients = [];

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      clientName: inputClientName.current.value,
    });

    setOrders([...orders, newOrder]);

    navigate('/order')
  }

  

  return (
    <Container>
      <Image alt="Image-home" src={HomePic} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1 X-Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
        
      </ContainerItens>
    </Container>
  );
};

export default App;

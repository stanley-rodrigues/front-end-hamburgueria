import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import BagBurguer from "../../assets/bagburguer.svg";
import Trash from "../../assets/trashorder.svg";
import H1 from '../../components/Title'
import Button from "../../components/Button";
import {
  Container,
  Image,
  ContainerItens,
  User,
  Order,
  ParagraphOrder,
  TrashOrder,
} from "./styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrder(){

      const {data: newOrders} = await axios.get("http://localhost:3001/order")
  
     setOrders(newOrders);
    }
    fetchOrder()

  },[])

  async function deleteOrder(orderClientId) {
    await axios.delete(`http://localhost:3001/order/${orderClientId}`);
    const newOrders = orders.filter(
      (orderClient) => orderClient.id !== orderClientId);

    setOrders(newOrders);
  }

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt="Image-home" src={BagBurguer} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((orderClient) => (
            <User key={orderClient.id}>
              <Order>
                <ParagraphOrder>
                  <p>{orderClient.order}</p>
                  <p>{orderClient.clientName}</p>
                </ParagraphOrder>
                <TrashOrder onClick={() => deleteOrder(orderClient.id)}>
                  <img alt="trashorder" src={Trash} />
                </TrashOrder>
              </Order>
            </User>
          ))}
        </ul>
          <Button isBack={true} onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default Orders;

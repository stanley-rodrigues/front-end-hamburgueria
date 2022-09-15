import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 10px;
`;

export const ContainerItens = styled.div`
  padding: 25px 36px 50px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.li `
list-style: none;
`;

export const Order = styled.div`
  width: 342px;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  margin-bottom: 16px;
`;

export const ParagraphOrder = styled.div`
  p {
    background: rgba(255, 255, 255, 0.25);
    align-content: space-between;
    width: 188px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
  }
`;

export const TrashOrder = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  img {
    background: transparent;
  }
`;



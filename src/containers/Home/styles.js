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



export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  align-self: start;
  margin-left: 40px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  margin-bottom: 42px;
  outline: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  color: #ffffff;
  padding: 19px;

  ::placeholder {
    color: #c7c7c7;
  }
`;







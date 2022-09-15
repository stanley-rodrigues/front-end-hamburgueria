import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.25)' : "#d93856"} ;
  outline: none;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 2px;
  color: #ffffff;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

`;
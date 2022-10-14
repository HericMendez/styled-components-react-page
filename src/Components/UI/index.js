import styled from "styled-components";
import { colors } from "./variables";

export const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;


export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

export const Button = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${colors.primary};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Detail = styled.span`
  color: ${colors.primary}
  font-size: 24px;
`;

export const Cash = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

/* 

@media (max-width: 800px) {
  width: 95%;
  margin: 5px;
}
*/

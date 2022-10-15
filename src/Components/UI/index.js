import styled, { ThemeConsumer } from "styled-components";
import { colors } from "./variables";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;

  @media (max-width: 800px) {
    padding: 5vw;
  }
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

export const IconTheme = styled(Icon)`
  filter: ${({ theme }) => theme.filter}; ;
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
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 100%;
    margin: 5px;
  }
`;

export const Detail = styled.span`
  color: ${colors.primary};
  font-size: 24px;
`;

export const Cash = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const ThemeButton = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

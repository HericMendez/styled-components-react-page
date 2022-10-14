import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { colors } from "../UI/variables";

const StyledHeader = styled.nav`
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const HeaderBtn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : colors.primary)};
  color: ${(props) => (props.primary ? colors.primary : "white")};


`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
}
`;

const Cabecalho = () => {
  return (
    <StyledHeader className="cabecalho">
      <Logo className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <HeaderBtn primary href="https://google.com">
          Ajuda
        </HeaderBtn>
        <HeaderBtn href="https://google.com">
          Sair
        </HeaderBtn>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;

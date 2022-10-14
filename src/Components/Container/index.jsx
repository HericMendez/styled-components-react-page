import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";

import { Container, Content } from "../UI";

const ContainerWrapper = () => {
  return (
    <Container>
      <Titulo>Olá Heric!</Titulo>
      <Content>
        <Conta />
      </Content>
    </Container>
  );
};

export default ContainerWrapper;

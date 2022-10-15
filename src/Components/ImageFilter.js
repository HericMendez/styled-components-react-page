import React from "react";
import Food from "../assets/images/alimentacao.svg";
import Health from "../assets/images/saude.svg";
import Transport from "../assets/images/transporte.svg";
import Utilities from "../assets/images/utilidades.svg";
import Other from "../assets/images/outros.svg";
import { IconTheme } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconTheme src={Food} alt="Restaurante" />,
    Transporte: <IconTheme src={Transport} alt="Transporte" />,
    Saude: <IconTheme src={Health} alt="Saúde" />,
    Utilidades: <IconTheme src={Utilities} alt="Utilidades" />,
    default: <IconTheme src={Other} alt="Outros" />,
  };

  return Images[type] || Images.default;
};

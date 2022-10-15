import React from "react";
import Food from "../assets/images/alimentacao.svg";
import Health from "../assets/images/saude.svg";
import Transport from "../assets/images/transporte.svg";
import Utilities from "../assets/images/utilidades.svg";
import Other from "../assets/images/outros.svg";
import { Icon } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icon src={Food} alt="Restaurante" />,
    Transporte: <Icon src={Transport} alt="Transporte" />,
    Saude: <Icon src={Health} alt="Saúde" />,
    Utilidades: <Icon src={Utilities} alt="Utilidades" />,
    default: <Icon src={Other} alt="Outros" />,
  };

  return Images[type] || Images.default;
};

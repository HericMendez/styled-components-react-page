import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icon } from "../UI";


const Light = <Icon src={ThemeOn} alt="Light Mode" />
const Dark = <Icon src={ThemeOff} alt="Dark Mode" />

export default (({theme})=> theme ? Dark : Light)

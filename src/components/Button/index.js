import React from 'react';

import './index.css';

const Styles = ["btn--primary", "btn--outiline"];
const Size = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const Colors = ["primary", "blue", "red", "green"];

export function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}){
  const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
  const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];
  const checkButtonColor = Colors.includes(buttonColor) ? buttonColor : Colors[0];

  return(
    <button
      type={type}
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
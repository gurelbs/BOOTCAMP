import React from 'react';

const Button = ({txt,cn,clicked}) => <button onClick={clicked} className={cn}>{txt}</button>

export default Button;

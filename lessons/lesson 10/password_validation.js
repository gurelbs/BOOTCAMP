let passwordValidation_1 = password => {
  if (password.length > 7){
    return `Strong`
  } else {
    return `Weak`
  } 
}

let passwordValidation_2 = password => password.length > 7 ? `Strong` : `Weak`

let passwordValidation_3 = password => {
  password = password.toString()
  return password.length > 7 && typeof password === 'string' ? 
    `Strong` : 
    `Weak`
} 

const advancedPasswordValidation = password => {
  String(password);
  return password.length > 7 && password.match(/[A-Z]/) 
  ? `Very Strong` 
  : password.length > 7  ? `Strong` 
  :  `Weak`;
}


console.log(`
${passwordValidation_1('213123ededed')}
--
${passwordValidation_2('4545')}
--
${passwordValidation_3('blablab2323')}
--
${advancedPasswordValidation('g123Gffffffh')}
--
${advancedPasswordValidation('g123gffffffh')}
--
${advancedPasswordValidation('g12F3g')}
`);
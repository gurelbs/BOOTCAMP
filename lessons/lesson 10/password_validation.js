let passwordValidation_1 = password => {
  password = password.toString()
  if (password.length > 7){
    return console.log(`Strong`);
  } else {
    return console.log(`Weak`);
  } 
}

let passwordValidation_2 = password => {
  password = password.toString()
  return password.length > 7 ? console.log(`Strong`) : console.log(`Weak`);
} 
let passwordValidation_3 = password => {
  password = password.toString()
  return password.length > 7 && typeof password === 'string' ? 
    console.log(`Strong`) : 
    console.log(`Weak`);
} 

const advancedPasswordValidation = password => {
  String(password);
  return password.length > 7 && password.match(/[A-Z]+/) ? 
    console.log(`Very Strong`) : password.length > 7 ?
    console.log(`Strong`) : 
    console.log(`Weak`);
}

passwordValidation_1('213123ededed') // strong
passwordValidation_2('4545') // strong 
passwordValidation_3('blablab2323') // strong

advancedPasswordValidation('g123ggfFffffh') //very strong
advancedPasswordValidation('g123ggffffffh') // strong
advancedPasswordValidation('g12F3g') // weak
function tellFortune(jobTitle,location,partnerName,numberOfChildren){
  numberOfChildren = Math.round(Math.random() * 10) 
  return `You will be a ${jobTitle} in ${location} and married to
  ${partnerName} with ${numberOfChildren} children.`
}

let version1 = tellFortune('magician','Honolulu','Beyonce',4);

console.log(version1);
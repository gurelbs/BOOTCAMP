let numSiblings = prompt('How many siblings do you have?');
numSiblings = parseInt(numSiblings)
if (numSiblings === 1){
  alert(`${numSiblings} sibling`)
} else if (numSiblings > 1){
  alert('More than 1 sibling')
} else {
  alert('No siblings')
}

// if we use numSiblings == 1 , the answer is string

// if we use numSiblings === 1 , 
// the answer is chacking the value and also the 
// type of the value so we have to turn the string to number

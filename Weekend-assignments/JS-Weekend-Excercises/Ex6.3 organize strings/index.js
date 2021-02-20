const organizeStrings = (str1,str2) => {
    let arr = []
    let newStr = [...str1,...str2].sort()
    for (let i = 0; i < newStr.length; i++){
        newStr[i] !== newStr[i+1] ? arr.push(newStr[i]) : ''
    }
    return arr.join('')
}

// check
console.log(organizeStrings('xxabacddhhhsfdfsdfsdfsdfsfve','wferfrferferhhhgerrbbxyxxyzefga')); // 'abcdefghrsvwxyz'
console.log(organizeStrings('habcidef','abcdjkefg')); //'abcdefghijk'
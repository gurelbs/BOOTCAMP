
let recusion = num => {
    console.log(num)
    recusion()
    num--
}
recusion(3)
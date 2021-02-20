const growthOfPopulation = (p0, percent, aug, p) => {
    let n = 0;
    while (p0 < p){
        p0 += (p0 / 100) * percent + aug;
        n++;
    }
    return n
}

console.log(growthOfPopulation(1500000, 2.5, 10000, 2000000));
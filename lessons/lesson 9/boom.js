let boom = n => {
    for (let i = 1; i <= n; i++){
        if (i % 7 === 0 && i !== 0 || i.toString().includes(7)){
            console.log(`boom!`.toUpperCase());
        } else {
            console.log(i);
        }
    }
}

boom(80);
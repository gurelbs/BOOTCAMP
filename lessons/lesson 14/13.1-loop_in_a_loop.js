const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];

const TwoLoop = allArr => {
    for (let i=0; i<allArr.length; i++){
        for (let j = 0; j < allArr[i].length; j++) {
            console.log(`Neighbour: ${allArr[i][j]}`);
        }
    }
}

TwoLoop(listOfNeighbours)
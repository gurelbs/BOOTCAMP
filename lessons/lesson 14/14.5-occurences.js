// 1
// counter + 1 ;

// 2
// console.log(counter);

// 3
// the function doesnt loop right, because we need to add 1 to the counter every loop.

// 4
function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str . length; i++ ){
    if ( str . charAt ( i ) === char ){
    counter += 1;
    }
    }
    return counter ;
    }
    console.log(countOccurrences ( "ini mini miny moe" , "n" ));
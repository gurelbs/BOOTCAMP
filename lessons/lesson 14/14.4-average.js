// 1
// var sum ;

// 2
//  console.log(typeof sum);

// 3
// the var sum is not a number so we get NaN (not a number)
// 4
function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    }
    return sum ;
    }

console.log(calcAverage ([ 85 , 90 , 92 ]));
function circle_area(x){
  let answer = 2 * Math.PI * x;
  return answer;
}

let unfixedAnswer = circle_area(10);
let fixedAnswer = circle_area(10).toFixed(2);

console.log(`${unfixedAnswer}\n${fixedAnswer}`);
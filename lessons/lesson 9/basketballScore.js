const basketballWinner = () => {

  const basketballScoreCalc = (totalScore,numOfGame) =>  totalScore / numOfGame;

  let JohnTeamScored = basketballScoreCalc(100+20+50,3);
  let MikeTeamScored = basketballScoreCalc(100+50+20,3);
  let MaryTeamScored = basketballScoreCalc(197+94+105,3);

  const bigestScore = (a,b,c) => Math.max(a,b,c);
  const winner = bigestScore(JohnTeamScored,MikeTeamScored,MaryTeamScored);
  let winnerMsg = () => {
    if (JohnTeamScored === winner){
      return `John's team WIN with ${JohnTeamScored.toFixed()} average score.`
    } else if (MikeTeamScored === winner){
      return `Mike's team WIN with ${MikeTeamScored.toFixed()} average score.`
    } else if (MaryTeamScored === winner) {
      return `Mary's team WIN with ${MaryTeamScored.toFixed()} average score.`
    }
  }
  return winnerMsg() 
}

console.log(basketballWinner());
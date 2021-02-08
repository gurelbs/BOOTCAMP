const basketballScoreCalc = (totalScore,numOfGame) =>  (totalScore / numOfGame).toFixed(1);
let JohnTeamScored = basketballScoreCalc(102+200+100,3);
let MikeTeamScored = basketballScoreCalc(101+201+100,3);
let MaryTeamScored = basketballScoreCalc(101+90+101,3);
let bigestScore = Math.max(JohnTeamScored,MikeTeamScored,MaryTeamScored);
  
let answer = () => {
  if (JohnTeamScored > MikeTeamScored && JohnTeamScored > MaryTeamScored){
    return `John's Team WIN with ${bigestScore}`
  } else if (MikeTeamScored > JohnTeamScored && MikeTeamScored > MaryTeamScored){
    return `Mike's Team WIN with ${bigestScore}`
  } else if (MaryTeamScored > JohnTeamScored && MaryTeamScored > MikeTeamScored){
    return `Mary's Team WIN with ${bigestScore}`
  } else if (MikeTeamScored === MaryTeamScored && MikeTeamScored === JohnTeamScored){
    return `its a drew between EVERY team`
  } else {
    if (JohnTeamScored === MikeTeamScored){
      return `its a drew between John's Team & Mike's Team`
    }
    if (JohnTeamScored === MaryTeamScored){
      return `its a drew between John's Team & Mary's Team`
    }
    if (MikeTeamScored === MaryTeamScored){
      return `its a drew between Mike's Team & Mary's Team`
    }
  }
}
console.log(answer());
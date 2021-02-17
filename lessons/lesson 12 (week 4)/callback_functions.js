// 1
const isString = (str, cb) => {
    if (typeof str === 'string') cb(str)
}
const logTheString = string => console.log(string);
isString('yes! log The String', logTheString )
// 2

const firstWordUpperCase = (str, cb) => {
    str = str.trim()
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return cb(str)
}
const dashesWords = str => {
    return console.log(str.replace(/\s/g, '-'));
}
// 3
firstWordUpperCase('      nice its work           ',dashesWords)
firstWordUpperCase('      bala gan ga dol         ',dashesWords)
firstWordUpperCase('      bala gan ga dol n i c e         ',dashesWords)
// 4
function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },1000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
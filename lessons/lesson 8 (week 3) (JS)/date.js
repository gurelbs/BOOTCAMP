"use strict";

(function date(){
  let day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(new Date());
  let month = new Intl.DateTimeFormat('en-US', {  month: 'long'}).format(new Date());
  let dayNum = new Date().getUTCDate()
  let year = new Date().getFullYear()
  return console.log(`Today is ${day} the ${dayNum} of ${month}, ${year}`);
})()


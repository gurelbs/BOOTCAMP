const leapYear = year => {
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    return `${year} It is indeed a leap year`
  } else {
    return `${year} is NOT a leap year `
  }
}


console.log(leapYear(2404));
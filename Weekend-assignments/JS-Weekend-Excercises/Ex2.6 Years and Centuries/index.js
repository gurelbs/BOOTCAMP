const centuryFromYear = year => Math.ceil(year / 100)

// check
console.log(`
${centuryFromYear(1705)} 
${centuryFromYear(1900)} 
${centuryFromYear(1601)} 
${centuryFromYear(2000)} 
`);

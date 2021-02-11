const mycountry = {
  country: 'Finland', 
  capital: 'Helsinki', 
  language: 'Finnish', 
  population: new Intl.NumberFormat().format(6000000),
  neighbours: ['Norway','Russia','Sweden'],
  describe() {
    return console.log(`${this.country} has ${this.population} people,
    their mother tongue is ${this.language}, they have ${(this.neighbours).length} neighbouring countries: ${[this.neighbours]} 
    and a capital called ${this.capital}`);
  },
  checkIsland() {
    Object.defineProperty(this, 'isIsland',{
      value: this.neighbours.length > 0 ? true : false
    })
    return console.log(mycountry.isIsland);
  }
}

mycountry.describe();
mycountry.checkIsland()

class City {
    constructor(name, population, continent) {
        this._name = name;
        this._population = population;
        this._continent = continent;
    }
    cityFacts() {
        return `${this._name} has a population of ${this._population} and is situated in ${this._continent}`;
    }
}

let c1 = new City('Aslan\'s Country', 1, 'Narnia');
console.log(c1.cityFacts());
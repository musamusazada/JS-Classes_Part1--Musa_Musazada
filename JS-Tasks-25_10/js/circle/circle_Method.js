class circle {
    pi = 3.14;
    constructor(name, r) {
        this._name = name;
        this._r = r;
    }
    caclArea() {
        return `Area is: ${this.pi * this._r**2}`;
    }
    caclLength() {
        return `Length is: ${2 * this.pi * this._r}`;
    }
}

let c1 = new circle("dawg", 4);

console.log(c1.caclArea());
console.log(c1.caclLength());
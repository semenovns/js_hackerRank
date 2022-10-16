class Pirate {
    name = "default name";
    constructor(name, number) {

        this.name = name;

        console.log("Created pirate " + this.name);
    };


}
//IIFE Singleton magic
let Singleton = (() => {
    let instance;
    return { getInstance: (name) => { return !instance ? (instance = new Pirate(name)) : instance } };
})();

/*

let single = (function GetInstance() {
    let instance;

    return { instance : (name) => { return !instance ? (instance = new Pirate(name)) : instance }};

})()
*/
let obj = Singleton;


let pirate0 = Singleton.getInstance("Samurai");
let pirate1 = Singleton.getInstance("Johny");
let pirate2 = Singleton.getInstance("Archie");
//let pirate3 = single.instance("Larry");
//let pirate4 = single.instance("Michael");
//let pirate4 = GetInstance("Macho")();

console.log(pirate0, pirate1, pirate2);
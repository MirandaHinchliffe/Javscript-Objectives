let dog = {
    type: "Sparky",
    numLegs: 4,
    sayLegs: function(){ return "This dog has " + this.numLegs + " legs."}
};
console.log(dog.sayLegs());
document.getElementById("spark").innerHTML = "Sparky has 4 legs"; 

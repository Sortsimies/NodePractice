function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function (){
    console.log("Hello "+this.firstname+" "+this.lastname);
}

var johnSnow = new Person("John","Snow");
johnSnow.greet();

var jane = new Person("Jane","ASd");
jane.greet();
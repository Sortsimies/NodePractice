function greet(){
    this.greeting = "Hello greet3";
    this.greet = function (){
        console.log(this.greeting);
    };
}

module.exports = new greet();
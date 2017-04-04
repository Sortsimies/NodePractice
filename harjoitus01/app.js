function greet(){
    console.log("Greet!");
}

greet();

logGreeting(function(){
    console.log("logGreeting!");
});

function logGreeting(fn){
    fn();
}

logGreeting(greet);

var greetMe = function() {
    console.log("Vari moro");
}

greetMe();

require('./greet.js');
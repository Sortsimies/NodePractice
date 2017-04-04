var person = {
    firstname: 'John',
    lastname: 'Smith',
    greet: function(){
        console.log('Hello '+this.firstname+' '+this.lastname)
    }
}

person.greet();

console.log(person.firstname);
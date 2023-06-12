class Personne {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  sayHello(argument) {
    return "Hello " + this.firstname + " " + this.lastname + " " + argument;
  }
}

let x = new Personne("Pierre", "Jacques");

console.log(x.sayHello("comment allez vous ?"));

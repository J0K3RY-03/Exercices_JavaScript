class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get getName() {
    return `${this.firstname} ${this.lastname}`;
  }

  set setName(val) {
    let name = val.split(" ");

    this.firstname = name[0];
    this.lastname = name[1];
  }
}

let newPerson = new Person("Jason", "Verbracken");
console.log(newPerson.getName);
newPerson.setName = "Bryan Verbracken";
console.log(newPerson.getName);

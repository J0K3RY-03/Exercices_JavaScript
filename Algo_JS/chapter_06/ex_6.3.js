class Animal {
  sayHello() {
    return `${this.constructor.greeting}! I'm ${this.name}!`;
  }
}

class Cat extends Animal {
  static greeting = "Meow";
  constructor(name) {
    super();
    this.name = name;
  }
}

class Dog extends Animal {
  static greeting = "Warf";
  constructor(name) {
    super();
    this.name = name;
  }
}

let x = new Cat("Kitty");
let y = new Dog("Snoopy");
console.log(x.sayHello());
console.log(y.sayHello());

// Je crée la class cat qui étend la class animal
// J'utilise le mot-clé super() dans le constructeur de Cat pour appeler le constructeur de la classe parente.

// J'utilise this.constructor.greeting pour accéder à la propriété statique greeting de la classe Cat & Dog.

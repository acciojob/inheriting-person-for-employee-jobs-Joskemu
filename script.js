// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

// Employee class extending Person class
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

// Function to create and greet a Person instance
function createPerson() {
  const person = new Person("Alice", 25);
  const greetingMessage = person.greet();
  document.getElementById("personGreeting").innerText = greetingMessage;
}

// Function to create and greet an Employee instance
function createEmployee() {
  const employee = new Employee("Bob", 30, "Manager");
  const greetingMessage = employee.jobGreet();
  document.getElementById("employeeGreeting").innerText = greetingMessage;
}

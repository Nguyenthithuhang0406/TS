//leson20: if-else
let age: number = 20;
if (age > 20) {
  console.log('u30');
} else {
  console.log("u20");
}

//lesson21: switch-case
const age1: number = 19;
switch (age1) {
  case 25:
    console.log("da di lam");
    break;
  case 20:
  case 19:
    console.log("dang la sinh vien");
    break;
  default:
    console.log("default");

}

//lesson22: for
for (let i = 0; i < 10; i++){
  console.log(i);
}

//lesson23: while
let count: number = 0;
while (count <= 20) {
  console.log(count);
  count++;
}

//lesson24: do-while
let count1: number = 20;
do {
  console.log(count1);
  count1--;
} while (count1 > 0)
  
//lesson25: break
let products = [
  { name: "hihi", price: 300 },
  { name: "hihihaha", price: 700 },
  {name: "hihikkk", price: 200}
]
for (let i = 0; i < products.length; i++){
  if (products[i].price == 700) {
    console.log("da tim thay");
    break;
  }
}

//lesson26: continue
let product2s = [
  { name: "hihi", price: 300 },
  { name: "hihihaha", price: 700 },
  {name: "hihikkk", price: 200}
]
for (let i = 0; i < product2s.length; i++){
  if (product2s[i].price == 700) {
    continue;
  }

  console.log(product2s[i]);
}

//lesson27: function
function sum(a: number, b: number): number {
  return a + b;
};

console.log("check sum", sum(6, 9));

const abs = (a: number, b: number) => {
  return Math.abs(a - b);
}

console.log("chek abs : ", abs(2, 5));

//lesson28: function type
const sum3 = (a: number, b: number): number => {
  return a + b;
}

console.log("check sum3: ", sum3(8, 7));

//lesson29: optional parameters
const sum4 = (x: number, y: number, z?: number) => {
  if (z) {
    return x + y + z;
  }
  return x + y;
}

console.log("check sum4: ", sum4(1, 2, 3));

//lesson30: default parameters
const sum7 = (x: number, y: number, z = false) => {
  if (z === false) {
    return x + y;
  }

  if (z) {
    return x - y;
  }
};

console.log("check sum7: ", sum7(7, 1, true));

//lesson31: rest parameters
//spread operator vs rest parameters

//rest parameters dien cuoi cung trong function
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach(num => total += num);
  return total;
};

console.log( getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));

function multiply(multiplier: number, ...theArgs: number[]) {
  return theArgs.map(num => num * multiplier);
};

console.log("check multiply", multiply(2, 1, 2, 3));


//lesson32: overloading
//dinh nghia nhieu ham ten giong nhau

function addNumber(a: number, b: number): number{
  return a + b;
}

function addString (a: string, b: string): string {
  return a + b;
}

function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}


//=> overloading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
  return a + b;
};

console.log("check addNew", addNew(6, 9), addNew("6", "9"));

class Counter{
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.current;
  }

}

let counter = new Counter();
console.log("check counter", counter.count());

//lesson33: classes
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
      this.name = name;
      this.age = age;
    }
    greet(){
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
  getName(): string {
    return this.name;
  }
}

let hit = new Person("hit", 20);
hit.greet();
console.log(hit.getName());

//lesson 34: access modifiers
//public, private, protected
//không khai báo => mặc định là public

class Person1 {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

}

let person = new Person1("Alice", 30); //nếu khai báo thuộc tính là public thì sẽ không thể thay đổi giá trị
person.greet();

//leson35:  readonly
//đánh dấu thuộc tính chỉ đọc, không bao h thay đổi
//const: khi thao tác, sử dụng biến, không thể thay đổi giá trị
//readonly: khi khai báo thuộc tính,class, oop, không thể thay đổi giá trị
class Person2{
  readonly dateOfBirth: Date;
  constructor(dateOfBirth: Date){
    this.dateOfBirth = dateOfBirth;
  }
}

let person2 = new Person2(new Date(1990, 12, 25));


//lesson36: getters, setters
class Person3{
  private _age: number = 0;
  constructor(private name: string, age: number) {
    this._age = age;
  }

    get age(){
        return this._age;
    }
    set age(value: number){
        if(value < 0){
            this._age = 0;
        }else if(value > 100){
            this._age = 100;
        }else{
            this._age = value;
        }
    }
}

let person3 = new Person3("John", 30);
person3.age = 31;
console.log("check person3", person3.age);

//leson37: inheritance
//kế thừa
class Person4{
  constructor(private name: string, private age: number) {
    this.name = name;
    this.age = age;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  };

  describe(): string {
    return `${this.name} is ${this.age} years old`;
  }

}

class Employee extends Person4 {
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
  }

  get getSalary() {
    return this.salary;
  }

  set setSalary(salary: number) {
    this.salary = salary;
  }

  //overwriting
  describe(): string {
    return `${super.describe()} and earns ${this.salary} dollar`;
  }
  
}

let employee = new Employee("John", 30, 2000);
console.log(employee.getName);
console.log(employee.getSalary);
console.log(employee.describe());

//lesson38: methods and properties 
class Circle{
  static pi: number = 3.14;
  public test: number = 10;

  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  };

  static calculateCircumference(radius: number): number {
    return 2 * this.pi * radius;
  };
}

console.log(Circle.pi);
console.log(Circle.calculateArea(5));
console.log(Circle.calculateCircumference(5));

//khi không có static thì phải khai báo new, và khong thể truy cập đến static
let t = new Circle();
console.log(t.test);

//lesson39: abstract class

//trừu tượng
//không thể tạo mới 1 đối tượng từ nó

abstract class Employee1{
  constructor(public name: string, public age: number) { }
  abstract getSalary(): number;

  get nameEmp(): string {
    return this.name;
  }

  compensationStatement(): string {
    return `${this.name} earns ${this.getSalary()} dollar`;
  }
}

class Developer extends Employee1{
  constructor(name: string, age: number, private salary: number) {
    super(name, age);
  }

  getSalary(): number {
    return this.salary;
  }
}

const test1 = new Developer("John", 30, 2000);
console.log(test1.compensationStatement());
console.log(test1.getSalary());


//lesson40: interfaces

interface IPerson {
    firstName: string;
    lastName: string;
}

type PersonType = {
    firstName: string;
    lastName: string;
};

function getFullname(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
};

let person40 = {
    firstName: "John",
    lastName: "Doe",
    address: "Ha Noi"
};

console.log(getFullname(person40));
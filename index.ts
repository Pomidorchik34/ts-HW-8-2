// interface Animal {
//   name: string;
//   age?: number;
// }
// interface Dog extends Animal {
//   weight: string;
//   type: string;
// }
// interface Cat extends Dog {
//   height: number;
//   age: number;
// }
// let obj: object = {
//   name: "Chel",
//   age: 15,
//   weight:200,

// };
// console.log(obj);

// Homework

// 1
// let username: string = "Jhon";
// let age: number = 7;
// let student: boolean = true;
// let hobby: string | null = "coding";
// console.log(username, age, student, hobby);
// function stringgaAylantir(qiymat: number | string) {
//   return qiymat.toString();
// }
// console.log(stringgaAylantir(256));

// 2
// interface Book {
//   name: string;
//   type: string;
//   avtor?: string;
//   has?: boolean;
//   date?: number;
// }

// let obj1: Book = {
//   name: "48 rules of world",
//   type: "phisycal",
//   has: true,
// };
// let obj2: Book = {
//   name: "Gravity falls",
//   type: "Epic",
//   has: false,
// };
// let obj3: Book = {
//   name: "Book-3",
//   type: "Mistyic",
//   avtor:"Alex"
//   has: false,
// };
// console.log(obj1,obj2,obj3)

// 3
// let books: any = []; //Array da hato bolyapti
// let searchBook: any = (name: string) => {
//   books.forEach((element: any) => {
//     if (element.bookName == name) {
//       console.log(element);
//     }
//   });
// };
// let pushBook: any = (book: object) => {
//   return books.push(book);
// };
// let sumOfBooks: any = () => {
//   return console.log(books.length - 1);
// };
// class CreateBook {
//   bookName!: string;
//   date?: number;
//   avtor?: string;
//   type!: string;
// }
// const Book1 = new CreateBook();
// const Book2 = new CreateBook();
// const Book3 = new CreateBook();
// Book1.bookName = "Gravity falls";
// Book2.bookName = "48 законов власти";
// Book3.bookName = "Forbes";
// Book1.type = "Fantasy";
// Book2.type = "Phsyical";
// Book3.type = "Phsyical";
// Book1.avtor = "Alex Crish";
// Book3.date = 2024;
// pushBook(Book1);
// pushBook(Book2);
// pushBook(Book3);
// searchBook("Gravity falls");
// sumOfBooks();

// 4
// Qoshimcha vazifa yoq

//
// type User = {
//   name: string;
//   age: string | number;
//   isActive: boolean;
// };

// let obj: User = {
//   name: "Jhon",
//   age: "16yo",
//   isActive: true,
// };

// interface Animal {
//   name: string;
//   age: string | number;
// }

// interface Person {
//   username: string;
//   year: number;
// }
// let cat: Animal | Person = {
//   name: "alex",
//   age: 12,
// };

// interface Animal {
//   name: string;
//   color: string;
// }
// interface User {
//   username: string;
//   realname?: string;
// }

// let numbers: object[] = [{ name: "Jhon" }, { name: "Jhon" }, { name: "Jhon" }];

// Homework 8-3
// 1
// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
// }
// const user: Person = {
//   name: "Doe",
//   age: 12,
//   isStudent: false,
// };
// const book: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
// };

// 2
// const arr: number[] = [1, 2, 3, 4, 5];
// function sumOfArray(arr: number[]) {
//   arr.reduce((sum, i) => {
//     return sum + i;
//   });
// }
// console.log(sumOfArray(arr));

// const fruits: string[] = ["apple", "banana", "cherry"];
// function toUpperCase(arr: string[]) {
//   arr.map((value: string) => {
//     return value.toUpperCase();
//   });
// }

// 3
// // Tuple dont declares with "const"
// let tupleArr: [object, number, boolean];
// tupleArr = [{ name: "Chel" }, 8, true];
// let cordinate: [number, number] = [10, 20];

// 4
// let mixedArray: any[] = ["str", 23, true];
// let anyArr: any[] = ["chell", null, undefined, 222];

// 5
// let variable: unknown;
// variable = "Hello";
// variable = 42;
// variable = true;

// function toStringIfUnknown(value: unknown): string {
//   if (typeof value === "string") {
//     return value;
//   } else {
//     return "Not a string";
//   }
// }

// console.log(toStringIfUnknown(variable));

// 6
// function throwError(message: string): never {
//   throw new Error(message);
// }
// function infiniteLoop(): never {
//   while (true) {}
// }

// 7
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
// function formatDate(date: Date): string {
//   return date.toISOString().split("T")[0];
// }

// 8 & 9 & 10
// enum DaysOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// }
// function printDay(day: DaysOfWeek): void {
//   console.log(DaysOfWeek[day]);
// }
// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }
// type Worker = Person & Employee;

// let worker: Worker = {
//   name: "Jane Doe", //why?
//   age: 30,
//   employeeId: 12345,
//   department: "HR",
// };

// interface Vehicle {
//     make: string;
//     model: string;
//     year: number;
// }

// interface Car extends Vehicle {
//     numberOfDoors: number;
//     isElectric: boolean;
// }

// let myCar: Car = {
//     make: "Tesla",
//     model: "Model S",
//     year: 2024,
//     numberOfDoors: 4,
//     isElectric: true
// };
// 11
// type Address = {
//   street: string;
//   city: string;
//   postalCode: string;
// };
// type PersonWithAddress = Person & {
//   address: Address;
// };

// let personWithAddress: PersonWithAddress = {
//   name: "Mark",
//   age: 28,
//   address: {
//     street: "Main St",
//     city: "Springfield",
//     postalCode: "12345",
//   },
// };
// 12
// interface Student {
//     name: string;
//     age: number;
//     grades: number[];
//     address: [string, number];
// }

// function getStudentSummary(student: Student): string {
//     const averageGrade = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
//     return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${averageGrade.toFixed(2)}`;
// }

// enum OrderStatus {
//     Pending,
//     Shipped,
//     Delivered,
//     Cancelled
// }

// interface Order {
//     orderId: number;
//     status: OrderStatus;
//     totalAmount: number;
// }

// interface Customer {
//     customerId: number;
//     name: string;
// }

// type CustomerOrder = Order & Customer;

// let customerOrder: CustomerOrder = {
//     orderId: 456,
//     status: OrderStatus.Shipped,
//     totalAmount: 150.00,
//     customerId: 789,
//     name: "Sarah"
// };

// type SumType = (a: number[], arr: number) => number;

// function sumOfArray(value: number[], arr?: string[]) {
//   value.reduce((sum, i) => {
//     return sum + i;
//   });
// }

// sumOfArray([12, 54, 67678, 89]);

let arr1 = ["olma", "nok", "banana"];
let arr2 = ["behi", "gilos", "uzum"];
interface Objs {
  name: string;
  id: number;
}
let objs: Objs[] = [];

function toObject(a: string[], b: string[], res: object[]) {
  let twoArr = a.concat(b);
  twoArr.forEach((value, index) => {
    objs.push({ name: value, id: index + 1 });
  });
  return objs;
}
toObject(arr1, arr2, objs);

console.log(objs);
function nameOfFruits(arr: Objs[], res: string[]) {
  arr.forEach((value) => {
    res.push(value.name);
  });
  return arr;
}
function printData<T>(arg: T[]): T {
  return arg[0];
}
console.log(printData(arr1));

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
var arr = [1, 2, 3, 4, 5];
function sumOfArray(arr) {
    arr.reduce(function (sum, i) {
        return sum + i;
    });
}
console.log(sumOfArray(arr));

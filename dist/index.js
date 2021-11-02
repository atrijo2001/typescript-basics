"use strict";
//Basic types
let id = 5;
let company = 'Traversy Media';
let published = false;
let x = 'hello';
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = ['Brad', 10, 32];
//Tuple
let person = [20, 'Atrijo', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Jill'],
    [3, 'Sisy']
];
//Union
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
//Objects
const user = {
    id: 1,
    name: 'John'
};
const user1 = {
    id: 3,
    name: 'Jerry'
};
//Type assertion
let cid = 1;
//let customerId = <number> cid
let customerId = cid;
//Functions
function add(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user2 = {
    id: 1,
    name: 'John'
};
const add1 = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(5, 'Brad Traversy');
const mike = new Person(7, 'Mike Johnson');
user2.id = 5;
console.log(add(3, 6));
//Generics
function getArray(items) {
    return new Array().concat(items);
}

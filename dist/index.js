"use strict";
let id = 5;
let company = "My Company";
let isPublished = true;
let x = 'Hello';
// arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'Hello', true];
let person = [1, 'Brad', false];
let employee;
// union
let pid = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
let custeromId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
// arrow functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `{this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Brad');
// subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Brad', 'John', 'Jill']);
//# sourceMappingURL=index.js.map
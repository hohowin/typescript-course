let id: number = 5
let company: string = "My Company"
let isPublished: boolean = true
let x: any = 'Hello'

// arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, 'Hello', true]
let person: [number, string, boolean] = [1, 'Brad', false]
let employee: [number, string][]

// union
let pid: string | number = '22'

// enum
enum Direction1 {
    Up = 'Up', Down = 'Down', Left = 'Left', Right = 'Right'
}

// objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
let custeromId = cid as number

// functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

interface MathFunc {
    (x: number, y: number): number
}

// arrow functions
const add: MathFunc = (x: number, y: number): number => x + y
const subtract: MathFunc = (x: number, y: number): number => x - y

// classes
class Person {
    protected id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `{this.name} is now registered.`
    }
}

const brad = new Person(1, 'Brad')

// subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Brad','John','Jill'])


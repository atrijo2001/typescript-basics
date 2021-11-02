//Basic types
let id: number = 5;
let company: string = 'Traversy Media'
let published: boolean = false;
let x:any = 'hello'
let age: number;

age = 30;


let ids: number[] = [1, 2, 3, 4, 5];
let arr:any[] = ['Brad', 10, 32];

//Tuple
let person: [number, string, boolean] = [20, 'Atrijo', true];

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Jill'],
    [3, 'Sisy']
]

//Union
let pid: string|number;

//Enum
enum Direction1{
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Left);


//Objects
const user:{
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

//OR
type User = {
    id: number,
    name: string
}

const user1:User = {
    id: 3,
    name: 'Jerry'
}


//Type assertion
let cid: any = 1

//let customerId = <number> cid
let customerId = cid as number


//Functions
function add(x: number, y:number): number{
    return x+y
}


function log(message: string | number): void {
    console.log(message)
}

//Interface
interface userInterface{
    id: number,
    readonly name: string,
    age?: number
}

const user2: userInterface = {
    id: 1,
    name: 'John'
}


interface mathFunc{
    (x: number, y: number): number
}
const add1: mathFunc = (x: number, y: number): number => x+y
const sub: mathFunc = (x: number, y: number): number => x-y 

//Implement inteerfaces to class
interface personInterface{
    id: number,
    name: string,
    register(): string
}

//Classes
class Person implements personInterface{
    id: number;
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}




const brad = new Person(5, 'Brad Traversy')
const mike = new Person(7, 'Mike Johnson')
user2.id = 5
console.log(add(3, 6))


//Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['mike', 'john', 'jill'])
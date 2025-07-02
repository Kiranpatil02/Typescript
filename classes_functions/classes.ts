interface User{
    name:string;
    id:number;
}

class UserAccount{
    name:string;
    id:number;
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
}

const account_user:User=new UserAccount("Murthy",1);

// Declaring types for parameters and return values

function deleteUser(user:User){
    //..
}
// function adminUser():User{ // Returns User Interface 
//     //

// }

// Type-script extends javacript primitives, such as "any" means allow anything

// Two interfaces to build types: Interfacea and Types. Preferred is Interface, and Types is uses for specific features

// Example usecase of type

type Mybool=true | false ; // The | is that it could be true or false

// Unions more:

type WindowStates="open"|"close"|"Minimized";
type numberss=1|2

// Different types using Unions
function getLength(obj:string|string[]){
    return obj.length
}

// To learn type of varialb use typeof
console.log(typeof(getLength))

type StringArray=Array<string>;
type NumberArray=Array<number>;

// Declaring generics

interface Backpack<Type>{
    add:(obj:Type)=>void;
    get:()=>Type;
}

declare const backpack: Backpack<string>;

const object=backpack.get();

// backpack.add(23); // Can't pass number, bcz backpack variable is string

interface Point{
    x:number;
    y:number;
}

function logPoint(p:Point){
    console.log(`{p.x},${p.y}`)
}

const points={x:12,y:25};
logPoint(points);

const color={hex:"234jlkds"}
// logPoint(color)  This fails because it has missing properties from type Point :x,y
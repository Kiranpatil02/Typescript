let obj:any={x:0};

obj.foo()
obj();
obj.bar=100;
obj="hello";
const n:number=obj;


// The above lines of code will throw NO compiler error
// Using 'any' disables type checking

// Variable type annotations
let myName:string="Logan Paul";

// Functions

function greet(name:string){
    console.log("HEY"+name);
}

// greet(32) // throws error, because greet excepts string

// Return Type annotations

function getNumber():number{
    return 232;
}

// Returning a promise

async function getFav():Promise<number>{
    return 848;
}

// Object types

function printcoord(pt:{x:number;y:number}){
    console.log(pt.x)
    console.log(pt.y)
}
printcoord({x:34,y:40})

// Optional Properties

function printName(obj:{first:string,last?:string}){
    //
}
printName({first:"Breaking"})
printName({first:"Breaking",last:"Bad"})

// Type aliases

type Points={
    x:number;
    y:number;
}

function printCoord(pt:Points){
    console.log(pt.x)
    console.log(pt.y)
}

type UserInputSanitizedString = string;
 
// Non-null Assestion Operator(Postfix !)
// This removes null and undefined from a tpe without any explicit checking

function dangerours(x?:number|null){
    console.log(x!.toFixed()) // No error
}
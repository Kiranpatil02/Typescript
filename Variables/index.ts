let greetings="Hey there!";

console.log(greetings)

// To define types for particular object, we use Interface declartion
interface User{
    name:string,
    id:number;
}
// Now the defined types can be made use with types, below is example
const user:User={
    name:"Kiran",
    id:0,
    // username:"Pratham"  This throws error, because it doesn't match with

}
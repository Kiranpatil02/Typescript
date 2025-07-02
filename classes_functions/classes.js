var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var account_user = new UserAccount("Murthy", 1);
// Declaring types for parameters and return values
function deleteUser(user) {
    //..
}
// Different types using Unions
function getLength(obj) {
    return obj.length;
}
// To learn type of varialb use typeof
console.log(typeof (getLength));
var object = backpack.get();
function logPoint(p) {
    console.log("{p.x},".concat(p.y));
}
var points = { x: 12, y: 25 };
logPoint(points);
var color = { hex: "234jlkds" };
// logPoint(color)  This fails because it has missing properties from type Point :x,y

var b = function(context){
    console.log(arguments)
    console.log(Array.prototype.slice.call(arguments))
}
b(1,2,3);

var obj1 = {0:1, 1:2, 2:3}
obj1.length = 3;
console.log(Array.prototype.slice.call(obj1))


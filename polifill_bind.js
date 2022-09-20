
Function.prototype.mybind=function(context,...arg1){
var fn=this;
return function(...agr2) {
return fn.apply(context,[...arg1,...agr2])
}
}
var obj={
    name:"meghraj",
    age:30
}

function userInfo() {
    console.log("Hi my name is " + this.name + "my age is" + this.age + "i live in city" + arguments[0])
}

var callBind = userInfo.mybind(obj,"Belgavi");
var callWithActualBind = userInfo.bind(obj,"Belgavi")

callBind();
callWithActualBind()


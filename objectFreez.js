var obj={
    name:"megh",
    place:'belgaum',
    location:function(){
        console.log("he lives in",this.place)
    }
}
Object.freeze(obj)
obj.place="na"
console.log(obj.place)
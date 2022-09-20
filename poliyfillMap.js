

Array.prototype.myMap= function(callback) {
    var arr=[];
    for(let i=0;i<this.length;i++) {
          arr.push(callback(this[i],i,this))
    }
    return arr;
}


var arr1=['1','2','3','4'];

const values= arr1.myMap((item,index)=>{
    console.log(item)
})
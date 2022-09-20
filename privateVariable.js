
function privateVariable() {
    var _count=0;

    return {
        add: function(incremen){
            console.log("incremen",_count+=incremen)
        },
        print:()=>{
            console.log("incremented value is",_count) 
        }
        
    }
}

var ct =privateVariable()
ct.add(5)
ct.add(1)
ct.print()
console.log(ct._count) 
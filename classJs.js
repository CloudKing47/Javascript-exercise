class Person {
    constructor(name){
        this.firsName = name
    }
    
    print() {
        console.log("Welcome" , this.firsName)
    }
}

class child extends Person {

    constructor(firsName) {
       super(firsName)  
       this.firsName="iii" 
    }
   
    printChaild() {
        console.log("Welcome" , this.firsName)
    }
}

var dude= new child("Megh")
console.log(dude.print())
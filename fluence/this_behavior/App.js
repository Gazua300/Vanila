class Student {
    constructor(name, email){
        this.name = name
        this.email = email
    }
}


// O this numa arrow function se refere ao escopo global(window) e não ao objeto da classe
const Student = (name, email)=>{
    this.name = name
    this.email = email
    
    console.log(this)
}

Student()

const flamarionFranca = new Student('Flamarion França', 'mesmo245@gmail.com')

console.log(flamarionFranca)
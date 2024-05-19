class Person {
  constructor(name, age){
 this.name = name;
 this.age = age;
};
  
  eat(){
   console.log(`${this.name} is eating`);
 }
  
 
};
  
  class Student extends Person{
    static #id = 1000;

    static #incrementID() {
        this.#id++; 
    }

    constructor(name, age, className, institute){
     
     super(name, age);
     Student.#incrementID();
        this.id = Student.#id;
     this.name = name;
     this.age = age;
     this.className = className;
     this.institute = institute;
    }

    
}
  
  
  let ibrahim = new Student("Ibrahim", 27, "Class Nine", "Uttor khan High School");
  let ibrashim2 = new Student("Ibrahim", 27, "Class Nine", "Uttor khan High School");
  let ibradshim2 = new Student("Ibrahim", 27, "Class Nine", "Uttor khan High School");
  let ibrdashim2 = new Student("Ibrahim", 27, "Class Nine", "Uttor khan High School");
  let ibrsahim2 = new Student("Ibrahim", 27, "Class Nine", "Uttor khan High School");


console.dir(ibrahim)
console.dir(ibrahim)
console.dir(ibrahim)
console.dir(ibrahim)
console.dir(ibrsahim2.id);




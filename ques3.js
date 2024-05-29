class person{
    constructor(name,age,height,weight){
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    print_personname(){
        return 'The name of the person is ${this.man}'
    }
}

var p1 = new person ("pranhav",22,188,75);
console.log(p1.print_personname())


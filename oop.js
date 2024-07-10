// factory function

function createElf(name,weapon) {
    return {
        name : name,
        weapon : weapon,
        attack(){
            return console.log(name+' just attack with '+weapon)
        }
    }
  }



  const peter = createElf('peter','bow.')

  peter.attack()

  // class 2

  const elfFunc =  {
    attack : function(){
        console.log( this.name+' just attack with '+this.weapon)
    }
  }


  function createElf2(name,weapon){
//The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
    newElf = Object.create(elfFunc);
    newElf.name = name,
    newElf.weapon = weapon
    return newElf
  }


  const john = createElf2('john','sword')

  john.attack()

// class 3 --- construction

  function Elf(name,weapon) {  
    this.name = name;
    this.weapon = weapon
  }

  Elf.prototype.attack = function () {  
    return 'attack with ' + this.weapon
  }


  const sama = new Elf('sama','bow');
  const peteri = new Elf('peteri','sword') 

  console.log(Elf.prototype)

  sama.attack()
  console.log(peteri.attack())

  class Elf2 {
    constructor(name,weapon){
      this.name = name
      this.weapon = weapon;
    }
    attack(){
      console.log(this.name+' attack with '+ this.weapon)
    }
  }

const kama = new Elf2('kama','spare')

kama.attack()

console.log(kama instanceof Elf2)

// class 4
console.log("class 4 'this' ")
// this
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Xavier', 55)
person1

// Implicit binding
const person2 = {
  name: 'Karenddsf',
  age: 40,
  hi() {
    console.log('hi ', + this.name)
  }
}
{name : 'dskflksj'}


// Explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    console.log('hilla ' + this.name)
  }.bind(person2)
}

person3.hi();



// Arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function() {
    var inner = () => {
      console.log('hi ', this.name) 
    }
    return inner()
  }
}

person4.hi()

// class 5

class Charecter {
  constructor(name,weapon){
    this.name = name;
    this.weapon = weapon
  }
  attack(){
    return `${this.name} is attacking with ${this.weapon}.`
  }
}

class Elf4 extends Charecter{
  constructor (name,weapon,type){
    super(name,weapon);
    this.type =type;

  }
}

class Ogre extends Charecter{
  constructor(name,weapon,colour){
    super(name,weapon);
    this.colour = colour
  }

job(){return 'make a strongest house by ogre named '+ this.name}

}



const Ogreee = new Ogre('ogree','spares','red')
console.log(Ogreee.job())


// class 6

class Charecter2{
  constructor(name,weapon){
    this.name = name;
    this.weapon = weapon;
  }
  attack(){
    return this.name +' attack with ' + this.weapon
  }
}

class King extends Charecter2{
  constructor(name,weapon,weapon2,kind){
    super(name,weapon)
    this.kind = kind
    this.weapon2 = weapon2
  }
  attack2(){
    console.log(super.attack())
  return 'but this is from the king '+this.name+' personally with '+ this.weapon+' and '+ this.weapon2
  }
}


const arthur = new King('Arthur','bow&arrow','sword','cruel')

console.log(arthur.attack2())
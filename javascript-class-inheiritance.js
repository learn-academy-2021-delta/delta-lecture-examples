// inheritance: classes that have all the attributes of other (parent) classes but addedd specialization (child)


// Keywords:
// extends
// Super()

class Engine {
    constructor(numberofCylinders, typeOfLayout){
        this.oil = true
        this.running = false
        this.rpm = 0
        this.cylinders = numberofCylinders
        this.layout = typeOfLayout
    }
    startEngine(){
        this.rpm = 1000
        this.running = true 
    }
    stopEngine(){
        this.rpm = 0
        this.running = false
    }
}

// let subaru = new Engine(4, "flat")
// console.log(subaru);
// subaru.startEngine()
// console.log(subaru);


//OOP Object Oriented Programing 
// class Child extends Parent
class SuperChargedEngine extends Engine{
    constructor(numberofCylinders, typeOfLayout, boost=0){
        //SUper is a key word that pass all the attributes of the parent class to the child
        super(numberofCylinders, typeOfLayout)
        this.boost = boost
    }
    revEngine(){
        // Ternary (three arguments) 
        //Question (truthy || falesy) ? Truthy Response : Falsey Response
        this.running ? this.rpm = this.rpm + 500 : "Hey, you should turn on your engine"
        this.running? this.boost = this.boost + 7 : this.boost = 0
    }
    throttleDown(){
        if(this.rpm <= 700){
            this.rpm = 0
        }else {
            this.rpm = this.rpm - 700
        }
    }
}

let dodgeDemon = new SuperChargedEngine(8, "v8 style")
dodgeDemon.startEngine()
console.log(dodgeDemon);
dodgeDemon.revEngine()
console.log(dodgeDemon);
dodgeDemon.revEngine()
console.log(dodgeDemon);
dodgeDemon.throttleDown()
console.log(dodgeDemon);

//   SuperChargedEngine {
//     oil: true,
//     running: true,
//     rpm: 1000,
//     cylinders: 8,
//     layout: 'v8 style',
//     boost: 0
//   }
//   SuperChargedEngine {
//     oil: true,
//     running: true,
//     rpm: 1500,
//     cylinders: 8,
//     layout: 'v8 style',
//     boost: 7
//   }
//   SuperChargedEngine {
//     oil: true,
//     running: true,
//     rpm: 2000,
//     cylinders: 8,
//     layout: 'v8 style',
//     boost: 14
//   }
//   SuperChargedEngine {
//     oil: true,
//     running: true,
//     rpm: 1300,
//     cylinders: 8,
//     layout: 'v8 style',
//     boost: 14
//   }


class BakedGood {
    constructor(ingredients, time, ovenTemp=350){
      this.ingredients = ingredients
      this.time = time
      this.ovenTemp = ovenTemp
    }
    startBaking(){
      console.log("Follow the recipe and put the ingredientstogether in the right order before baking them");
    }
  }
  
  class Cookie extends BakedGood {
    constructor(ingredients, time, ovenTemp){
      super(ingredients, time, ovenTemp)
      this.isTastyRaw = true
    }
  }
  
  var chocolateChipCookies = new Cookie(["brown sugar", "eggs", "flour", "choclate chips", "salt", "butter","vanilla", "baking soda"], "1.5 hours", 375)
  console.log(chocolateChipCookies);
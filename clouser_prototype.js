// *******HOF********


// higher order function are function that can take a function as an argument or return function.


const giveAccessTo = (name)=> { console.log('access is granted for :'+ name)}
const accessNotification = ()=> console.log('verification complete')

const authenticate = (varify)=>{

    let array = [];
    for(let i=0;i<varify;i++){

        array.push(i)
    }

    accessNotification()
}



function user (person,funcc) { 
    if(person.level === 'admin'){
        (function () { 
            document.querySelector('div').style.color = 'red'
         })()
        return funcc(1000000);
     
    }else if(person.level=== 'user'){

        (function () { 
            document.querySelector('div').style.color = 'blue'
         })()
         return funcc(10000)
    }
 }

 user({name:'aman',level:'admin'},(()=>{ return authenticate})())





//  class 2(EXERCISE)

const multiplyBy = (a,b)=>{

    return a*b
}

const multiplyByTwo = function(k){return multiplyBy(k,2)}


console.log(multiplyByTwo(10))

// alternate
const multiplyBy_2 = function(num1){
    return function(num2){ return num1*num2 }
}

const multiplyBy_arr = (num1)=>(num2)=> num1*num2

const multiplyByTwo_2 = multiplyBy(2)
const multiplyByTen_2 = multiplyBy(10)


 console.log(multiplyBy_2(54)(686))




//  class 3(clouseres)


// clouser and higher order function
function boo(){
    return function (name) { 
        return function(name2){
            console.log('hi , '+ name2)
        }
     } 
}

boo()()('kibrya')

// example
function callMeMaybe() {
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi! I am now here!';
}

callMeMaybe();


// clouser __ not pullute the global namespace

// wrong method

function heavyDuty(item){
    const bigArray = new Array(700).fill('😄')
    console.log(bigArray)

    console.log( bigArray[item])

}

heavyDuty(565)


// right method

function heavyDuty2 () { 
    const bigArray = new Array(100).fill('🖕')
    console.log(bigArray)
    return (numb)=>{

        console.log(bigArray[numb])
    }
 }

 const pick = heavyDuty2()

pick(44)

// example_closure

// launch,passtime,totalpeacetime,timebegin

const makeNUKEbutton = ()=>{
let timebegin= 0
const passtime = ()=> timebegin++
const totalpeacetime2 = ()=> console.log( timebegin )

const totalpeacetime =  timebegin   
const launch = ()=>{
    console.log('kKbBoOmM 💥')
    timebegin = -1
}


// wrong----->

setInterval(passtime,1000);

return {totalpeacetime , launch ,totalpeacetime2}

}



// console.log(makeNUKEbutton().totalpeacetime())_____>     wrong

const w3 = makeNUKEbutton()
// console.log(w3.totalpeacetime)
console.log(w3.totalpeacetime2())

// w3.launch()




// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0;
//     const passTime = () => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//       timeWithoutDestruction = -1;
//       return '💥';
//     }
  
//     setInterval(passTime, 1000);
//     return {totalPeaceTime}
//   }
  
//   const ww3 = makeNuclearButton();
//   console.log(ww3.totalPeaceTime())


// (vs studio te chole na )========warning

// excercise 

let view 
function initialize(){
    let call = 0
    return function (){
        if(call > 0){
            console.log('already destroyed')
            return
        }else{
            call++
            view = '💥'
            console.log(view + ' ,everything is over.')
        }
    }
}

const start = initialize()

start()

start()


// excercise - console every array item per second

const arr = [1,2,3,4,5,6,7,8,9]



// setInterval(()=>{
//     for(let i=0; i < arr.length; i++){
//     console.log(arr[i])

// }

// },1000)

// for(let i=0; i < arr.length; i++){
//     setInterval(function(){
//                 console.log(arr[i])

//     },1000)
    
//     }


const array = [1,2,3,4];
// change var to let, let allows us to use block scoping
for (let i=0; i < array.length; i++) {
  setTimeout(function() {
    // change i to array[i]
    console.log('I am at index ' + array[i])
  }, 3000)
}





// **************************************************

let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
      console.log('5');
    },
    sing() {
      if (this.fire) {
      console.log(`I am ${this.name}, the breather of fireeeeee`);
      }
    }
  }
  
  let lizard = {
    name: 'Kiki',
    fight() {
      console.log('1');
    }
  }
  
  lizard.__proto__ = dragon;
  // lizard.sing()
  dragon.__proto__
  // Base object
  dragon.isPrototypeOf(lizard)




  console.log(Date.prototype)
  Date.prototype.lastYear = function () { 
    return this.getFullYear() - 1; // as we passing value through object , using 'this'
   }
console.log(Date.prototype)

console.log( Date().lastYear())
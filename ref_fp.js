const array = [1, 2, 3];
function mutateArray(arr) {
    arr.pop()
}

function mutateArray2(arr) {
    arr.forEach(element => {
        arr.push(element)
    });
}
mutateArray(array);
mutateArray2(array);
console.log(array);


// class 2

// Pure functions
// a function has to always return the same output given the same input
// the function can not modify anything outside itself
// no side effects

// doesnt effect the original array
const array = [1,2,3]
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray;
}

function multiplyBy2(arr) {
 return arr.map(item => item*2)
}

const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);

// ---------------

// Referential Transparency
function a(num1, num2) {
  return num1 + num2
}

a(3,4)

function b(num) {
  return num*2
}

b(a(3,4))



// class 3

// Idempotence:
function notGood() {
    return Math.random()
    // new Date();
  }
  
  function good() {
    return 5
  }
  
  Math.abs(Math.abs(10))




//   class 4


// Immutability
// Not changing the data, not changing the state
// Instead making copies of the state
const obj = {name: 'Andrei'}
function clone(obj) {
  return {...obj}; // this is pure
}
// Mutating the state
// obj.name = 'Nana'

// -----------

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2
}
const updatedObj = updateName(obj)
console.log(obj, updatedObj)


// class 5


/*
 HOF - Function that does one of two things
   Either takes one or more functions as arguments
   Returns a function as a result
*/
const hof = () => () => console.log(5);
hof()
// functions
hof()()
// 5

const hof2 = (fn) => (fn) => fn(5);
hof2(function a(x){ return x})

/*
 Closures - Mechanism for containing some sort of state,
   We create a closure whenever a function accesses a variable declared outside
   of the immediate function scope
*/

const closure = function() {
  let count = 0;
  return function increment() {
    count++
    return count
  }
}

closure()
// function
const incrementFn = closure();
incrementFn()
incrementFn()


// class 6



//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)



// class 7



// Partial Application
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));



// class 8

//learn to cache
function addTo80(n) {
    return n + 80;
  }
  
  addTo80(5)
  
  let cache = {};
  function memoizeAddTo80(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
  
  // console.log(1, memoizeAddTo80(6))
  // // console.log(cache)
  // // console.log('-----------')
  // console.log(2, memoizeAddTo80(6))
  
  // let's make that better with no global scope. This is closure in javascript so.
  function memoizeAddTo80(n) { 
    let cache = {};
    return function(n) {
      if (n in cache) {
        return cache[n];
      } else {
        console.log('long time');
        const answer = n + 80;
        cache[n] = answer;
        return answer;
      }
    }
  }
  
  const memoized = memoizeAddTo80();
  console.log(1, memoized(6))
  // console.log(cache)
  // console.log('-----------')
  console.log(2, memoized(6))
  



//   class 9



// Compose and Pipe

const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));



// class 10



// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  const amazonHistory = []
  const compose = (f, g) => (...args) => f(g(...args))
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, {name: 'laptop', price: 200})

  function purchaseItem(...fns) {
    return fns.reduce(compose)
  }

  function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
  }

  function applyTaxToItems(user) {
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
      return {
        name: item,
        price: item.price*taxRate
      }
    })
    return Object.assign({}, user, { cart: updatedCart })
  }

  function buyItem(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases: user.cart})
  }

  function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
  }


  /*
   Implement a cart feature:
     1. Add items to cart.
     2. Add 30% tax to item in cart.
     3. Buy item: cart --> purchases.
     4. Empty cart

   Bonus:
     Accept refunds.
     Track user history.
  */
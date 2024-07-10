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
mutateArray2(array);
mutateArray(array);
console.log(array);



// class2

// Pure functions
// a function has to always return the same output given the same input
// the function can not modify anything outside itself
// no side effects
// doesnt effect the original array



// WRONG WAY
const array2 = [1,2,3,4,5]


function removeLastItem(arr){

    console.log(array2.pop())
    console.log(array2)
}


// setInterval(() => {

    removeLastItem(array2)
    
// }, 2000);


function removeLastItem2(arr) {
    const aarray = [].concat(arr)

    aarray.pop();
    console.log(aarray)

}

// setInterval(removeLastItem2(array2),2000)




// class 3

console.log(  Math.abs(Math.abs(10)))


// class 4

//work with object without changing the object

const obj = {name: 'ratata'}

function clone(obj){
    const obj_clone = {...obj}

    obj_clone.name = 'tarata'

    return obj_clone
}

console.log(obj,clone())


//learn to cache
function addTo80(n) {
    return n + 80;
  }
  
  addTo80(5)
  
  let cache = {};
  
  console.log(cache)
  
  
  function memoizeAddTo80(n) {
    if (n in cache) {
  console.log(1,cache)

      return cache[n];
    } else {
      console.log('long time');
      console.log(2,cache)

      const answer = n + 80;
      cache[n] = answer;
      console.log(cache)

      return answer;
    }
  }

  console.log(1, memoizeAddTo80(80))
  console.log(cache)
  console.log('-----------')
  console.log(2, memoizeAddTo80(6674))
  console.log(2, memoizeAddTo80(6656))
  console.log(2, memoizeAddTo80(664))



//   class 5

const compose = (f,g)=>(data)=>f(g(data))

const multiplyby3 = (n)=> n*3

const abs = (n)=> Math.abs(n)



console.log(compose(multiplyby3,abs)(-333))




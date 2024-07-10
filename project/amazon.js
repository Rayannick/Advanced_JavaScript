console.log("helloasdkfjlj");

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

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const amazonHistory_cart = [];
const amazonHistory_tax = [];
const amazonHistory_purches = [];
const amazonHistory_empty = [];

const newItem = {
  name: "laptop",
  price: 1000,
};








const compose=(f,g)=>(...arg)=>f(g(...arg)) 
function purchaseItem(...fns){

  return fns.reduce(compose)


}


purchaseItem(emptyCart,buyItem,applyTaxToItems,addItemToCart)(user,newItem)





function addItemToCart(user,item){
  amazonHistory_cart.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({},user,{cart : updateCart})
}

function applyTaxToItems(user){
  amazonHistory_tax.push(user)

  const {cart} = user;
  const taxRate = 1.4;
  const updatedCart = cart.map(item=>{
    return {
      name: item,
      Tax_price : item.price * taxRate
    }
  })

  return Object.assign({},user,{cart : updatedCart})

}
function buyItem(user){
  amazonHistory_purches.push(user)

return Object.assign({},user,{purchases : user.cart})
}
function emptyCart(user){

  amazonHistory_empty.push(user)

  return Object.assign({},user,{cart : []})
}





console.log('addCart',amazonHistory_cart)
console.log('Tax',amazonHistory_tax)
console.log('purches',amazonHistory_purches)
console.log('Empty',amazonHistory_empty)
console.log(user)



















//   const compose = (f,g)=> (...arg)=> f(g(...arg))

// purchaseItem(emptyCart,buyItem,applyTaxToItems,addItemToCart)(user,newItem)

//   function purchaseItem(...fns) {
//     return fns.reduce(compose)
//    }

// function addItemToCart(user,item){
// console.log(4)
//     amazonHistory.push(user)

//     const updateCart = user.cart.concat(item)
//     return Object.assign({},user,{cart : updateCart})

// }

// function applyTaxToItems(user){

//     amazonHistory.push(user);
//     const {cart} = user;
//     const taxRate = 1.5;
//     const updatedCart = cart.map(item=> {
//         return {
//             name : item,
//             price : item.price*taxRate
//         }
//     })
//     console.log(3)
//     return Object.assign({},user,{cart : updatedCart})

// }

// function buyItem(user){
// amazonHistory.push(user)
// console.log(2)

// return Object.assign({},user,{purchases: user.cart})
// }

// function emptyCart(user){
//     console.log(1)
// amazonHistory.push(user)
// return Object.assign({},user,{cart : []})
// }

// console.log(amazonHistory)
// console.log(user.cart)
// console.log(user.purchases)
// console.log(buyItem(user, {
//     name : 'laptop',
//     price : 1000
//   }))

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("it worked");
  } else {
    reject("it wont work");
  }
});

// promise
// .then(value => {console.log(value)
//      return value})
// .then(value=> console.log(value + ' hahahaha'))
// .catch(value => console.log(value))

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "hiyayo");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 6000, "bla bal abl");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "paremeter for the resolve function.");
});

Promise.all([promise, promise2, promise3, promise4])
  .then((value) => {
    console.log(value);
  })
  .catch((value) => console.log(value + " fuckkkkkkkkkk"));

// it waited 6 second before put all output.
// result comes after 6 second whether resolve or reject
// if one promise reject, it stop totally

// class 2
const urls = ["https://jsonplaceholder.typicode.com/users","https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/albums"]




Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(res => {
    console.log(res)
})



// const fesst = new Promise(()=>fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(res => { return res[0] }))
fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(res => { console.log( res[0]) })
// console.log(fesst.then(resss => {return resss}))


// const movePlayer = new Promise ((miles,direction)=>{
//     console.log(`player has moved ${miles} miles in ${direction}`)
// })

// movePlayer(10,'left')
// .then(()=>movePlayer(30,'right'))
// .then(()=> movePlayer(50,'up'))
// .then(()=> movePlayer(100 , 'finally go down'))




// class 3

async function fetchUsers() {
    
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')

    const data1 = await resp.json();
    
    console.log('this one async',data1)  


}


const getData = async function(){
    try{
        const [user, posts,albums] = await Promise.all(urls.map(url => fetch(url).then(resp=> resp.json())))

        console.log(user[1])
        console.log(posts[1])
        console.log(albums[1])
    }
    catch(err){
        console.log('motherfucking error happening again' + err)
    }
}


getData()
// "use strict";
function weird() {
  hieght = 500;
  console.log(hieght);
}
weird();

var son = function father() {
  console.log("father and son");
};

son();
//  father()

function loop() {
  for (var i = 0; i < 5; i++) {
    // for(let i = 0 ;i<5;i++){
    // for(const i = 0 ;i<5;i++){
    console.log(i);
  }
  console.log("finally :", i);
}

loop();

// iife_create new variable environment

// (function () {
//   // …
// })();

// (() => {
//   // …
// })();

// (async () => {
//   // …
// })();

var script1 = (function (omg) {
  function a() {
    return 55;
  }

  omg("h2").click(function () {
    omg(this).hide();
  });

  $("h1").click(function () {
    $(this).hide();
  });

  return {
    a: a,
  };
})($);

// "this" is the object that the function is a property of.

("use strict");
const obj = {
  name: "ds",
  sing: function () {
    return this.name + "is singing";
  },
};

obj.sing();

const name = "karma";

function important() {
  console.log(this.name + " is a bitch !!");
}

const obj1 = {
  name: "life",
  important: important,
};

const obj2 = {
  name: "reality",
  important: important,
};

console.log("global object------------------------>");
important();
console.log("local object ------------------------>");
obj1.important();
obj2.important();

// THIS ===> DYNAMIC SCOPE

const a = function () {
  console.log(this);
  const b = function () {
    console.log(this);
    const c = {
      hi: function () {
        console.log(this);
      },
    };
    c.hi();
  };
  b();
};
a();

// "this" doesn't matter where it is written it matters how the function was called
// here anotherfunc is called through another function so the 'a' indicate the local object and b indicate windows object

const obj3 = {
  name: "billy",
  sings() {
    console.log("a", this);
    var anotherfunc = function () {
      console.log("b", this);
    };
    anotherfunc();
  },
};
console.log("dynamic example---------------->");

obj3.sings();

console.log("solution______________________________:");

// solution 1 ------> arrow function
const obj4 = {
  name: "silly",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    return anotherFunc();
  },
};

obj4.sing();
console.log("stoppppppppppppppppppppppppppppppppppppppppppppppppppppp");

// solution 2 -------->
const obj5 = {
  name: "Billy",
  singer: function () {
    console.log("a", this);

    var anotherfunc = function () {
      console.log("b", this);
      var anotherfunc2 = function () {
        console.log("c", this);
      };
      // return the windows object
      // return anotherfunc2()
      // return the obj 5
      return anotherfunc2.bind(this);
    };

    // it declar a function not execute it
    // return (anotherfunc.bind(this))

    return anotherfunc.bind(this);
  },
};

obj5.singer()();
console.log("stoppppppppppppppppppppppppppppppppppppppppppppppppppppp");

// call, apply , bind ==>

const wizard = {
  name: "marlin",
  health: 50,
  heal() {
    return (this.health += 1);
  },
  heal2(s1, s2) {
    return (this.health += s1 + s2);
  },
};

const archer = {
  name: "robin",
  health: 30,
};
console.log("1: ", archer);
console.log("2: ", wizard.heal.call(archer));
console.log("3: ", archer);
console.log("4 :", wizard.heal2.call(archer, 69, 31));
console.log("5: ", archer);

//  call means browing object property from different object

console.log("6: ", wizard.heal2.apply(archer, [69, 0]));
console.log("7: ", archer);

// 'apply' takes argument as an array,principle is same as 'call'

const heal2 = wizard.heal2.bind(archer, 6, 9);

heal2();
console.log("8 :", archer);

// binds return a function ,not execute it




// function currying

function  multiply (a,b) { 
  return a*b
 }

 let multiplybyten = multiply.bind(this,10);
 let multiplybythirty = multiply.bind(this,30);


 multiplybyten(234)
multiplybythirty(4)














// self-practice with self-made example

// prove that object inside of an object obey the bind() rules of javascript
//bind(this) doesn't indicate parent object but child object



console.log("_________________________________-----------------------");

const nester = {
  name: "nest1",
  nest() {
    console.log("11", this);

    const nesterfunc = function () {
      console.log("22", this);
      var nester2;
      return (nester2 = {
        name: "nest2",
        nest2() {
          console.log("33", this);
          const nesterfunc2 = function () {
            console.log("44", this);
          };
          return nesterfunc2.bind(this);
        },
      });
    };
    return nesterfunc.bind(this);
  },
};




console.log(nester.nest()().nest2()())





console.log("______________fuck this shit, i'm out___________________");

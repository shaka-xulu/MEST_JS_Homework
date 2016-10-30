/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *
 *  obj.func(); //what is the output? try to explain why.
 *
 *  obj.func.bind(window)(); // what is the output? why?
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
//ANSWERS:
/*
//--1a)
function func() {
     console.log(this);
}
func();

OUTPUT:
Window

EXPLANATION:
The function, func, is declared in the global scope (as it is declared outside a function), which is the window level scope.
So, THIS, points/refers to the window object

//--1b)
var obj = {
	func: func
};
EXPLANATION:
The second func is the func declared in 1a but its in the scope of the obj object. 'this' refers to the object in this context

//--1c)
obj.func();
EXPLANATION:
The output is the description of an object's properties and methods. In this case, it is obj.
The func method is called within the obj context/scope. Hence, this. refers to the obj object

//--1d)
obj.func.bind(window)();
OUTPUT:
window

EXPLANATION:
It binds the function, func, to the window object.
So, this, refers to the window object

//--1e)
obj.func.bind(this)();
OUTPUT:
window

EXPLANATION:
same as above. this is the the global scope which is the window level scope

//--1f)
var people = {
	name: 'ashwin',
	age: 40
};
obj.func.bind(people)();
OUTPUT:
Object {name: "ashwin", age: 40}

EXPLANATION:
It binds the func function to the people object.
So, this, is in the people object scope/context.
*/





/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 	ANSWER:
 	input = "hi, welcome to mest";
input = input.split(" ");
for(var i = 0; i < input.length; i++){
	console.log(input[i].slice(0,1).toUpperCase() + input[i].slice(1));
}
 */

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *  ANSWER:

 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 	ANSWER:
 	For local storage, the data stored in localStorage continues until completely deleted.
    Changes made are saved and available for all current and future visits to the site.

    For sessionStorage, changes are only available on each window (or tab in browsers like Chrome and Mozila).
    Changes made are saved and available for the current page, as well as future visits to the site on the same window.
    Once the window is closed, the storage is deleted.
 */
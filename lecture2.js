/*
 * 1. explain the special meaning of the following special characters
 \0 the null character : Finds the postition of null character
 \n new line : Breaks a line and continues on the next line
 \r carriage return - Tells cursor to jump to next line
 \v vertical tab  - Returns the position where th vertical tab character was found
 \t tab character - Retunrs the position where the tab character was found
 \backspace - 
 \f form feed - Returns position where the form feeder was found. Goes to the next page
 */


 //  2.Please combine those two array together as one array by using concate:
   var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
   var arr2 = ['Thursday', 'Friday', 'Saturday']
 	var arr3 = arr1.concat(arr2);
 


 //3.Please combine those three array together as one array by only using concate() function once:
  var arr1 = ['Sunday', 'Monday']
   var arr2 = ['Tuesday', 'Wednesday']
   var arr3 = ['Thursday', 'Friday', 'Saturday']
   var arr4 = arr1.concat(arr2,arr3);
 


 // what is the result(output of following code):
     var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arr.sort());
     console.log(arr);
 	/*[ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ] 
 	the .sort() function has changed in alphabetical order and Uppercase take precedence over lowercase */

 	// [ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ] 


//  5. what is the result(output of following code):
     var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
     console.log(arr.sort());
     console.log(arr);
     //[ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]
 


 //6. Please remove mike, jerry, adn Enoch from the following array by using slice
    var arrx = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
   	console.log(arrx.slice(2,4));
    console.log(arrx.slice(5,6));


 	


 //7. what is the result(output of following code):
   var arry = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
   console.log(arry.slice(-3, -1)); // Outputting Yaw & Enoch. Cause its starting from the end of the array...
   console.log(arry);
 



 //* 8. what is the result(output of following code):
   var arrz = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
   console.log(arrz.slice(2)); // Outputting the results from index 2 till the end.
   console.log(arrz);
 


  //9. what is the result(output of following code):
     var arra = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arra.slice(-2)); // Outputting the last 2 results of the array.
    console.log(arra);


 // 10. convert the following function to function expression:
    
var sums = function addTwoNumber (num1, num2) {
	 
      console.log(num1 + num2);

    }
    sums(265, 234);
   
 
 // and invoke the function expression to caluate the result of 256 + 532
 

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */


// 12. you have following objects: use bind function here to make namer() function to call 'ashwin' and lars
var person1 = {
      name: 'ashwin'
 };
 
 var person2 = {
      name: 'lars'
 };
 
function namer() {
      return this.name;
}

name1 = namer.bind(person1);
console.log(name1());

name2 = namer.bind(person2);
console.log(name2());



  //12. you have following object:
      var number = {
           x: 22,
           y: 33
      };
 
     var count = function() {
           console.log(this.x + this.y);
    }
    numb = count.bind(number);
    console.log(numb());
 /*  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */


 //* 13. you have following objects:
    var personb = {
           firstName: 'ashwin',
          lastName: 'Yaw'
   };
 
    var personz = {
           firstName: 'lars',
          lastName: 'Mike'
     };
 
      function hello(greeting) {
           console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName);
     }

   hello.call(personb);
   hello.call (personz);


 
  // use call methods on function expression to make this work.
 

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
    var str = 'training, mentoring, and investing in world-class tech entrepreneurs in Africa.';

function capitalise(str) {
      console.log(str.replace(/\b\w/g, x => x.toUpperCase()));
 }
 capitalise(str);




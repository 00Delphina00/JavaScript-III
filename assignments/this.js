/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. In the global scope the "this" points to the whole window/console since there is no object or function to the left of the dot for it to point to.  That's window/global object binding.
* 2. When the "this" receives an object as a parameter; or it is in function scope and also set as a key value; it points to the object that contains all of the key:value pairs.  That's implicit binding. 
* 3. when the "this" is inside a constructor function that is designed to create a new object; the "this" points to the new object during each instance that it is called.  This is new binding.
* 4. when .call or .apply is used inside a constructor function it overrides settings and the "this" points to whatever you're pulling in.  This is explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

function happyBirthday(age){
    console.log(`Happy Birthday! You are ${this} years old!`);
    return age;  //when there is no concatenation it outputs a huge amount of console related stuff instead of just saying [object global].
}
happyBirthday(40);
       
// code example for Window Binding

// Principle 2

const healthStatus = {
     prompt: `The runner's health status is `,
     updateStatus: function(healthProblem){
         console.log(`${this.prompt} ${healthProblem}`);
     }
}
healthStatus.updateStatus("bee sting allergy");
healthStatus.updateStatus("asthma");
healthStatus.updateStatus("epilepsy");
healthStatus.updateStatus("diabetes");
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
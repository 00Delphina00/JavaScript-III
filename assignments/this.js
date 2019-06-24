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
function emergencyResponse (agencyName, teamSize){

    this.instruct = "Give first aid and call an ambulance.";
    this.speakToTeam = function(agencyName, teamSize){
        console.log(`${agencyName} has ${teamSize} emts. All emts must ${this.instruct}`);
    };
}
const goTeam = new emergencyResponse;
const medTeam = new emergencyResponse;

goTeam.speakToTeam("5k Fun Run", "5");
medTeam.speakToTeam("College Tournament", 2);

// code example for New Binding

// Principle
function expandTeam (agencyName, teamSize, newTeamMembers){
     emergencyResponse.call(this, agencyName, teamSize);
      this.newSize = function (agencyName, teamSize, newTeamMembers){
               newTeamSize = teamSize + newTeamMembers;
               console.log(`You added ${newTeamMembers} new response team members.  Your ${agencyName} Response Team Size is now ${newTeamSize} people.`);
     }
}
const apply = new expandTeam;
 
apply.speakToTeam("Olympics", 100);
apply.newSize("Olympics", 100, 50);

const FEMA = new expandTeam;

FEMA.speakToTeam("FEMA", 500);
FEMA.newSize("FEMA", 500, 50);

// code example for Explicit Binding
# mathgame
function passwordStart() {
    let setUpPass = "";
    let password = "";
    setUpPass = prompt("Set up your password.", "testPassword");
    //Cancel returns null
    if (setUpPass === null) {
    alert("Cancelled. Going back to the start.");
    return; // exits the function
    }
    password = prompt("What is your password?", "testPassword");
    if (password === null) {
    alert("Cancelled. Going back to the start.");
    return; // exits the function
    }
    while (setUpPass !== password){
        let password2 = prompt("Wrong! Retype your password.");
        if (password2 === null) {
            alert("Cancelled! Going back to the start.");
            return;
            }
            // something is wrong in this while state,ent and the if else statement.
            if (setUpPass === password2) {
            mathGame();
            } else if (setUpPass !== password2) {
            password2++
            }
        } 
    
    if (password === setUpPass){
    mathGame();
    }
    while (setUpPass !== setUpPass){
    setUpPass++
} 

}

// This is the main code named mathGame. This is where the math game is.
function mathGame() {
// Initializing all the vairiables for mathGame().
let math = "";
let actualProbAnswer = 0;
let problemAnswer = 0;
let firstProbTerm;
let secondProbTerm;
let problemNumb = 1;
let coefficient;
let exponent;


// This asks the user the type of math they want to do.
math = prompt("What type of simple math do you want to perform?");
if (math === null) {
    alert("Cancelled! Going back to the menu.");
    return; // exits the function
}
// This forces their answer to be capitillized.
math = math.toUpperCase();
// Swith case for all the simple math types.
switch (math) {
    // This is the addition section of the code.
    // This is for if the user spells out addition.
    case "ADDITION":
    // This is for if the user puts only the addition symbol in.
    case "+":
    while (actualProbAnswer === problemAnswer) {
        //Look into what the +1 does in each of these firsrtProbTerm
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + firstProbTerm + " + " + 
        secondProbTerm + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = firstProbTerm + secondProbTerm;
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + " + " + secondProbTerm + 
            " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + " + " + secondProbTerm + 
            " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
    }
    break;

    // This is the subtraction section
    // This is for if they spell out subtraction.
    case "SUBTRACTION":
    // This is for if the user puts only the subtraction symbol in.
    case "-":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + (secondProbTerm + firstProbTerm) +
        " - " + (firstProbTerm - 3) + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = (secondProbTerm + firstProbTerm) - 
        (firstProbTerm - 3);
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (secondProbTerm + firstProbTerm) + " - " + 
            (firstProbTerm - 3) + " is " + actualProbAnswer + "</br>" + "<br>" 
            + "Your answer: " + problemAnswer + "</br>" + "<br>" + 
            "Your answer is correct!" + "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (secondProbTerm + firstProbTerm) + " - " + 
            (firstProbTerm - 3) + " is " + actualProbAnswer + "</br>" + "<br>" 
            + "Your answer: " + problemAnswer + "</br>" + "<br>" + 
            "Your answer is wrong!" + "</br>" + "</br>");
        }
        // This increments it by one to loop it.
    
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    // This is the multiplication section.
    // This is for if they spell out multiplication.
    case "MULTIPLICATION":
    // This is for if the user puts only the multiplication symbol in.
    case "X":
    case "*":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + firstProbTerm + "x" + 
        secondProbTerm + "?");
        problemAnswer = Number(problemAnswer);
        actualProbAnswer = firstProbTerm * secondProbTerm;
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + "x" + secondProbTerm + " is " + 
            actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + firstProbTerm + "x" + secondProbTerm + " is " + 
            actualProbAnswer + "</br>" + "<br>" + "<br>" + "Your answer: " + 
            problemAnswer + "<br>" + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    
    // This is the division section
    // This is for if they spell out multiplication.
    case "DIVISION":
    // This is for if the user puts only the division symbol in.
    case "/":
    while (actualProbAnswer === problemAnswer) {
        firstProbTerm = (Math.floor(Math.random() * 10) + 1);
        secondProbTerm = Math.ceil(Math.random() * 10);
        // This asks the user the math problem and calculates it.
        problemAnswer = prompt("What is " + (firstProbTerm + 1) + "/" + 
        (secondProbTerm + 1) + "?");
        problemAnswer = Number(problemAnswer).toFixed(1);
        actualProbAnswer = ((firstProbTerm + 1) / 
        (secondProbTerm + 1)).toFixed(1);
        // This part tells compares the users answer with the calculated answer.
        // It tells whether they got the answer correct or wrong.
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (firstProbTerm + 1) + "/" + (secondProbTerm + 1) 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + (firstProbTerm + 1) + "/" + (secondProbTerm + 1) 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " +
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        
        problemNumb++
    }
            document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
// Power Rule derivative------>
    case "POWERRULE":
    case "POWER RULE":
    while (actualProbAnswer === problemAnswer) {
        coefficient = (Math.floor(Math.random() * 10) + 1);
        //the plus +1 avoids 0
        exponent = Math.ceil(Math.random() * 10 + 1);
        //the plus +1 avoids 0
        problemAnswer = prompt("What is " + coefficient + "x^" + 
        exponent + "?");
        let newCoefficient = coefficient*exponent;
        let newExponent = exponent-1;
        actualProbAnswer = newCoefficient + "x^" +
        newExponent;
        
        if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + coefficient + "x^" + exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " + 
            problemAnswer + "</br>" + "<br>" + "Your answer is correct!" + 
            "</br>" + "</br>");
        } else {
            alert("Wrong!");
        document.write("<br>" + "<br>" + problemNumb + ") " + 
            "The answer to " + coefficient+ "x^" + exponent 
            + " is " + actualProbAnswer + "</br>" + "<br>" + "Your answer: " +
            problemAnswer + "</br>" + "<br>" + "Your answer is wrong!" + 
            "</br>" + "</br>");
        }
        // This increments it by one to loop it.
        problemNumb++
    }
        document.write("<br>" + "Number of problems attempted: " + 
            (problemNumb - 1) + "</br>");
        if (problemNumb < 2) {
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            "1" + "</br>");
        } else { 
            document.write("<br>" + "Number of problems answered incorrectly: " + 
            (problemNumb - 2) + "</br>");
        }
    break;
    case "D":
        while (actualProbAnswer === problemAnswer) {
        problemAnswer = prompt("What is " + results.coefficient + "x^" + 
        results.exponent + "?");
        actualProbAnswer = results.newCoefficient + "x^" + results.newExponent;

       if (actualProbAnswer === problemAnswer) {
            alert("Correct!");
        
        } else {
            alert("Wrong!");
        }
    }
        break;
        // This increments it by one to loop it.
       
    // This is the message if the user does not type in a simple math operator.
    default:
    // message = "<h2>" + "Retype mathematical operation correctly." + "</h2>"
    // document.write(message);
    
    alert("Retype mathematical operation correctly.");
    break; 
    //you can also do return; instead of break idk why
} //end of switch
class MyClass {
  constructor() {
    this.exponent = Math.ceil(Math.random() * 10 + 1);
    this.coefficient = (Math.floor(Math.random() * 10) + 1);
    this.newCoefficient = null;
    this.newExponent = null;
    /*
    constructor(exponent, coefficient, newCoefficient, newExponent) {
    exponent = Math.ceil(Math.random() * 10 + 1);
    coefficient = (Math.floor(Math.random() * 10) + 1);
    */
  }
  // Instance method
    powerRulVariables() {
    //console.log(`Hello from instance with value: ${this.instanceValue}`);
    const newCoefficient = this.coefficient * this.exponent;
    const newExponent = this.exponent - 1
    return{
        newCoefficient: this.newCoefficient,
      newExponent: this.newExponent,
      exponent: this.exponent,
      coefficient: this.coefficient
    };
  }

}
const obj = new MyClass();
//If you remove that line, your code simply defines what a MyClass could be, but it never actually makes one.
const results = obj.powerRulVariables();


// Calling the static method
//MyClass.greetStatic("This is a static message.");

// Calling a static method to create an instance
//const obj = MyClass.createInstance("New Instance");
//obj.greetInstance(); // Calling an instance method on the created instance

// Attempting to call a static method on an instance will result in an error
// myInstance.greetStatic("This will fail");


/*
class MyClass {
  constructor(value) {
    this.instanceValue = value;
  }

  --Instance method
  greetInstance() {
    console.log(`Hello from instance with value: ${this.instanceValue}`);
  }

  --Static method
  static greetStatic(message) {
    console.log(`Hello from the class: ${message}`);
  }

  --Another static method that accesses other static members
  static createInstance(value) {
    return new MyClass(value);
  }
}

--Calling the static method
MyClass.greetStatic("This is a static message.");
output: Hello from the class: This is a static message.

--Calling a static method to create an instance
const myInstance = MyClass.createInstance("New Instance");
myInstance.greetInstance(); --Calling an instance method on the created instance
output: Hello from instance with value: New Instance

--Attempting to call a static method on an instance will result in an error
--myInstance.greetStatic("This will fail");


*/
}

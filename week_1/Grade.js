    //This function is to  convert the input i.e marks into the appropriate output i.e Grade
function gradeCalculator(marks){
     // Checking if the marks fall in the range for grade A
    if (marks > 79 && marks <=100){
    grade="A"
     // Checking if the marks fall in the range for grade B
    }else if(marks>=60 &&  marks<=79){
        grade="B"
         // Checking if the marks fall in the range for grade C
    }else if(marks>=49 && marks<=59){
        grade="C"
         // Checking if the marks fall in the range for grade D
    }else if(marks>=40 && marks<=48){
        grade="D"
         // Checking if the marks fall in the range for grade E
    }else if(marks<40){
        grade="E"
        // Handling the case where marks are outside of the valid range
    }else{
        return"Invalid Marks"
         // Returning the grade along with a message
    }
    return "Your grade is: " + grade
}

// Define a function to prompt the user to input student marks and calculate the grade.
function promptGrade(){        
     // Prompt the user to input student marks.     
    let marks = prompt("Input student marks");
    // Check if the input marks are valid (between 0 and 100, and not a string).
    if(marks<0||marks>100||marks===""){
    // If the input marks are invalid, alert the user and prompt again.
        alert("Please enter a valid number");
        promptGrade();// Recursively call promptGrade to prompt again.
    }
     // Call the gradeCalculator function to calculate grade.
    let result = gradeCalculator(marks);
     // Alert the user with the grade result.
    alert("Grade result:" + result)
     // Return the grade result.
    return result;
// Call the promptGrade function to start the process.
}
promptGrade();
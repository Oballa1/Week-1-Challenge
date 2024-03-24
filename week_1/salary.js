// Define a function to calculate net salary based on basic salary and benefits.
function netSalary(basicSalary, benefits){
    // Define constants for NHIF, tax, and NSSF rates.
    const nhifRate=0.025;
    const taxRate=0.15;
    const nssfRate=0.06;

    // Calculate net salary based on basic salary and benefits.
    const grossSalary=basicSalary+benefits;
    // Calculate tax, NSSF deduction, and NHIF deduction based on rates and gross salary.
    const tax=taxRate*grossSalary;
    const nssfDeduction=nssfRate*grossSalary;
    const nhifDeduction=nhifRate*grossSalary;
    // Calculate net salary.
    const netSalary=grossSalary-tax-nssfDeduction-nhifDeduction;
    // Return net salary.
    return netSalary;
}

// Prompt the user to enter basic salary and benefits then turn them to float numbers
const basicSalary=parseFloat(prompt("Enter basic salary:"));
const benefits=parseFloat(prompt("Enter benefits:"));
//Call the netSalary function with provided basic salary and benefits, and store the result.
const netSalary=calculateNetSalary(basicSalary, benefits);
console.log(netSalary);
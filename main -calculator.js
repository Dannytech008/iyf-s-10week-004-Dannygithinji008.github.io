const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const specialCharacters = ["+", "-", "*", "/", "%", ".", "="];
let output = "";

// calculate based on button clicked
const calculate = (btnValue) => {
    // If "=" is pressed and output is not empty, perform calculation
    if (btnValue === "=" && output !== "") {
        try {
            // replace the % with /100 to get the correct result before eval
            output = eval(output.replace("%", "/100")).toString();
        } catch (error) {
            output = "Error"; // Catches invalid math like "5++2"
        }
    } 
    // If "AC" is pressed, clear the output
    else if (btnValue === "AC") {
        output = "";
    } 
    // If "DEL" is pressed, remove the last character
    else if (btnValue === "DEL") {
        // remove the last character from the output string
        output = output.slice(0, -1);
    } 
    else {
        // skip if empty output and a special character is pressed (except minus for negative numbers)
        if (output === "" && specialCharacters.includes(btnValue)) {
            return;
        }
        output += btnValue;
    }

    // Update the display value
    display.value = output;
};

// add click listeners and buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // calculate based on buttons data value
        const value = e.target.dataset.value;
        calculate(value);
    });
});

// get the values from the UI
// starts or controller function
function getValues(){
    // get the values from the page 
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers 
        numbers = generateNumbers(startValue, endValue);

        // call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter only numbers.");
    }
}

// generate numbers from the start value, to the end value

//logic function(2)
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // we want to get all numbers from start to end

    for(let i = startValue; i <= endValue; i++) {

        // this will execute in a loop, until index = endValue
        numbers.push(i);
    }

    return numbers;
}

// display the numbers and mark the even numbers bold
// display or view function
function displayNumbers(numbers) {

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {
        
        let number = numbers[i];
        if (number % 2 == 0) {
            className="even"
        } else {
            className="odd"
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows 
}
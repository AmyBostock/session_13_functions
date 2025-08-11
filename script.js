/* function calculatePercentage(percent, number) {
    let decimal = percent / 100;
    let result = decimal * number;
    return result;
}

let answer = calculatePercentage(30, 135);
console.log(answer); 
let answer = calculatePercentage(40, 200);
console.log(answer); 
*/



/* let trafficLight ="green";

switch (trafficLight) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("SGet Ready!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
    console.log("Invalid traffic light colour");
    break;
} 
*/



/* function calculator(number1, number2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
        result = number1 * number2;
            break;
        case "/":
            if (number2 === 0) {
                console.log("Error: Division by 0 is not allowed")
                return;
            }
            result = number1 / number2;
            break;
        default:
            console.log("Invalid operator:  Use +, -, * or /");
            return;
    }
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
calculator(10, 5, "/");
calculator(10, 0, "/");
calculator(10, 5, "^");
*/

/* const addNumbers = (num1,num2) => {
    let total = num1 + num2;
    return total;
}

const addNumberTo5 = (num1) => {
    let total = num1 + 5;
    return total;
}

const addNumberTo5 = number1 => number1 +5;
}
*/




// mini weather app
/* const temperature = 60;

let message;
if(temperature < 0) {
    message = "Stay inside";
} else if (temperature < 30) {
    message = "Put on a coat. It's cold! 🧥";
} else if (temperature > 50) {
    message = "You do not need a coat today ☀️"
} else {
    message = "Just shorts and a vest is fine today";
}
document.getElementById("message").textContent = message; */


/* let weather = "cloudy";

if (weather === "sunny") {
  console.log("☀️ Wear sunglasses!");
} else if (weather === "rainy") {
  console.log("🌧️ Take an umbrella.");
} else if (weather === "cloudy") {
  console.log("☁️ Might need a light jacket.");
} else if (weather === "snowy") {
  console.log("❄️ Wear a warm coat.");
} else {
  console.log("🤔 Weather type not recognised.");
}
*/
/* switch (weather) {
    case "sunny":
        console.log("☀️ Wear sunglasses!");
        break;
    case "rainy":
        console.log("🌧️ Take an umbrella.");
        break;
    case "cloudy":
        console.log("☁️ Might need a light jacket.")
        break;
    case "snowy": 
        console.log("❄️ Wear a warm coat.")
        break;
    default:
        console.log("🤔 Weather type not recognised.");
}
*/





/* function drinkOrder(size, buttonName) {
  let message;

  switch(buttonName) {
    case "fanta":
        message = `You ordered a ${size} fanta.`;
        break;
    case "lemonade":
        message = `You ordered a ${size} lemonade.`;
        break;
    default:
        message = `Sorry, we don't have ${buttonName}.`;
  }
  return message;
}

const result = drinkOrder("large", "fanta");
console.log(result);
*/

/* 
function drinkOrder(size, drinkValue) {
  let softDrinkLabel;

  // convert drinkValue to lowercase
  drinkValue = drinkValue.toLowerCase();

  switch(drinkValue) {
    case "fanta":
        softDrinkLabel = "Fanta";
        break;
    case "lemonade":
        softDrinkLabel = "Lemonade";
        break;
    case "orangeade":
        softDrinkLabel = "Orangeade";
        break;
    default:
        message = `Sorry, we don't have ${drinkValue}.`;
  }
  return `You have ordered a ${size} of ${softDrinkLabel}`;
}
const result = drinkOrder("large", "fanta");
console.log(result);
*/
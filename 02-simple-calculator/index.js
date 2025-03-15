document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(e) {
        const buttonValue = e.target.textContent;

        if (!isNaN(buttonValue) || buttonValue === ".") {
            currentInput += buttonValue;
        } else if (buttonValue === "C") {
            clearCalculator();
        } else if (buttonValue === "=") {
            performCalculation();
        } else {
            handleOperator(buttonValue);
        }

        updateDisplay();
    }

    function handleOperator(op) {
        if (operator && currentInput) {
            performCalculation();
            previousInput = currentInput;
            currentInput = "";
        } else {
            previousInput = currentInput || "0";
            currentInput = "";
        }

        operator = op;
    }

    function performCalculation() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    currentInput = (num1 / num2).toString();
                    break;
                default:
                    break;
            }
        }

        operator = "";
    }

    function clearCalculator() {
        currentInput = "";
        operator = "";
        previousInput = "";
    }

    function updateDisplay() {
        display.textContent = currentInput || "0";
    }
});



// Sample product data (can be fetched from a database)
// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Phone", price: 20000 },
// ];

// Cart array to store added products
// let cart = [];

// Function to add an item to the cart
// function addToCart(productId) {
//   // Find the product by ID
//   const product = products.find((item) => item.id === productId);
  
//   if (product) {
//     // Check if the product is already in the cart
//     const existingItem = cart.find((item) => item.id === productId);

//     if (existingItem) {
//       existingItem.quantity += 1; // Increase quantity if already in cart
//     } else {
//       cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
//     }

//     console.log(`${product.name} added to cart.`);
//   } else {
//     console.log("Product not found.");
//   }
// }

// Function to display cart items
// function viewCart() {
//   console.log("Cart Items:", cart);
// }

// Function to remove an item from the cart
// function removeFromCart(productId) {
//   cart = cart.filter((item) => item.id !== productId);
//   console.log("Item removed from cart.");
// }

// Example usage
// addToCart(1); // Adds Laptop
// addToCart(2); // Adds Phone
// addToCart(1); // Increases quantity of Laptop
// viewCart();   // Displays cart items
// removeFromCart(2); // Removes Phone from cart
// viewCart();   // Displays updated cart




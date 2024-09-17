let string = "";
let buttons = document.querySelectorAll('.button');

// Convert the NodeList of buttons into an array and iterate through each button
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // If '=' button is clicked, evaluate the string
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }
        // If 'C' button is clicked, clear the input
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        // Handle all other button clicks
        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
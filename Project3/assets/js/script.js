// let string = "";
// let buttons = document.querySelectorAll(".button");

// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML === '=') {
//             string = eval(string);
//             document.querySelector("input").value = string;
//         }
//         else if (e.target.innerHTML === 'C') {
//             string = "";
//             document.querySelector("input").value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector("input").value = string;
//         }
//     })
// })


let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

input.readOnly = true;

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = Function(`"use strict"; return (${string})`)();
                input.value = string;
            } 
            catch (error) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value === "C") {
            string = "";
            input.value = "";
        }
        else if (value === "%") {
            try {
                string = (Number(string) / 100).toString();
                input.value = string;
            } 
            catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === "M+" || value === "M-") {
            alert("Memory feature coming soon 🙂");
        }
        else {
            string += value;
            input.value = string;
        }
    });
});
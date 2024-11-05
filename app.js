const inputElement = document.getElementById("userInput")
const outputElement = document.getElementById("output")

function displayInput() {
    
    const inputValue = inputElement.value;
   
    outputElement.innerText = inputValue
    
}

// const userInput = document.querySelector("display_typeInfo")
// userInput.map(userInput => `<div class="display_typeInfo" id="output">
    // <h3 class="s_results">Search Results: "${displayInput()}"</h3></div>`


inputElement.addEventListener("input", displayInput);


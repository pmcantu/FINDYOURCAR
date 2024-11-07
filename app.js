const inputElement = document.getElementById("userInput")
const outputElement = document.getElementById("output")

function displayInput() {
    
    const inputValue = inputElement.value;
   
    outputElement.innerText = inputValue
    
}

inputElement.addEventListener("input", displayInput);

// fetch and    api

//  fetch('http://www.omdbapi.com/?i=t3896198&apikey=d32854a2&s=fast')
// .then(res => res.json())
// .then(data => console.log(data))

function displayInput() {
    const inputElement = document.getElementById("userInput");
    const inputValue = inputElement.value;
    console.log(inputvalue)
    document.getElementById("output").textContent = `You typed : ${inputvalue}`;
}
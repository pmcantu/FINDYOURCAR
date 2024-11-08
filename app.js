const inputElement = document.getElementById("userInput")
const outputElement = document.getElementById("output")
const resultList = document.querySelector(".movie_data")

function displayInput() {
    
    const inputValue = inputElement.value;
   
    outputElement.innerText = inputValue
    
}

inputElement.addEventListener("input", displayInput);

// fetch and    api


// 
 async function main() {
    const title = inputElement.value
const data = await fetch(`https://www.omdbapi.com/?i=t3896198&apikey=d32854a2&s=${title || ""}`)
const movieData = await data.json()
const result = movieData.Search

resultList.innerHTML = result.map((movie) => 
(`<div class = "movie_data-container">
    <img class = "movie" src = "${movie.Poster}">
<h2 class = "title">${movie.Title}</h2>
<h4 class = "year">${movie.Year}</h4>
</div>`))
.join("")
 }
 
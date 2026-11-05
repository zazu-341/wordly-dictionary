const searchForm =document.getElementById("search-form");

const wordInput = document.getElementById("word-input");

const result = document.getElementById("result");

searchForm.addEventListener("submit", async (event) =>{
    event.preventDefault();


const word = wordInput.value;
if (word === ""){
    return;
}

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

const response = await fetch(url);
const data = await response.json();

console.log(data);
result.style.display = "block";

document.getElementById("word-title").textContent = data[0].word;

const phonetic =data[0].phonetic;

document.getElementById("pronunciation").textContent = phonetic;


    });



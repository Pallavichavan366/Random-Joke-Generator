const showJoke=document.getElementById("joke-container");
const getJoke=document.getElementById("joke-box");

const fetchApi=async ()=>{

    showJoke.textContent="Loding Joke";

try{
const fetchJoke= await fetch("https://official-joke-api.appspot.com/random_joke")

if( !fetchJoke.ok)throw new Error(`Http error status: ${fetchJoke.status}`);

const joke= await fetchJoke.json();

showJoke.textContent=` ${joke.setup}  ${joke.punchline}`;

}catch(error){
console.log("some error  while fetching the joke ",error);
}
}

getJoke.addEventListener("click",fetchApi);
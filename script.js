//PART 1
console.log("First Message");

setTimeout(() => {
  console.log("Second message (after 2 seconds)");
}, 2000);

console.log("Third Message");

//PART 2
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      console.log("Here's a cat fact:", data.fact);
    })
    .catch(error => console.error("Error: ", error));


//PART 3
async function getFacts(){
    try {
        let response = await fetch("https://catfact.ninja/fact");
        let data = await response.json();
        console.log("Here's a cat fact:", data.fact);
    } catch(error) {
        console.error("Error: ", error);
    }
}

getFacts();


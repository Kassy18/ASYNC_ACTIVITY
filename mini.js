document.getElementById("dogBtn").addEventListener("click", () => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
          document.getElementById("dogImage").src = data.message;
        });
    });

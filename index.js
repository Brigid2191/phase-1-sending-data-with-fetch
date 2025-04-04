// index.js

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => {
        // Append the new ID to the DOM
        const p = document.createElement("p");
        p.textContent = `User ID: ${data.id}`;
        document.body.appendChild(p);
      })
      .catch(error => {
        // Append error message to the DOM
        const p = document.createElement("p");
        p.textContent = `Error: ${error.message}`;
        document.body.appendChild(p);
      });
  }
  

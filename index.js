function searchWolfram(event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the search query from the input field
    const query = document.getElementById("query").value;

    // Query the Wolfram Alpha API for the search query
    const url = `https://api.wolframalpha.com/v1/result?appid=24P8V6-WPA8W9JT68&i=${query}`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Display the result in the HTML
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<p>${data}</p>`;
        })
        .catch(error => console.error(error));
}

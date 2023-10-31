fetch('http://localhost:5678/api/categories')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

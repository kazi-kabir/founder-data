let arrayOfData = [];

fetch('http://localhost:3000/companyData', {
    method: 'GET',
    headers: {
    },
})
.then(response => response.text())
.then(text => console.log(text))

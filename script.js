let arrayOfData = [];

// fetch('http://localhost:3000/companyData', {
//     method: 'GET',
//     headers: {
//     },
// })
// .then(response => console.log(response.body))

fetch(
    'http://localhost:3000/companyData', {
    method: 'GET',
    headers: {
    },
}).then( res => res.json()).then(data => {
    arrayOfData = data
    
})

// store JSON data somewhere 
// get JSON data as an array
// push that into elements
// make it appear as a div (for one)



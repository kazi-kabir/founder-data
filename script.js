fetch('http://localhost:3000/founders', {
    method: 'GET',
    headers: {
    },
})
.then(response => response.text())
.then(text => console.log(text))
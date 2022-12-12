let arrayOfData = [];
let url = 'http://localhost:3000/companyData';

let mockObj = {
        company: "ByteDance",
        valuation: 140,
        industry: "internet",
        country: " China",
        founders: "Zhang Yiming Liang Rubo"
}

function createAndAppendDivToBody(obj) {
    var div = document.createElement('div');
    div.innerHTML = 
    "<div>" + obj.company + "</div>" +
    "<div> "+ obj.valuation + "<div>" + 
    "<div> "+ obj.industry + "<div>" + 
    "<div> "+ obj.country + "<div>" + 
    "<div> "+ obj.founders + "<div>";
    // set style
    div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
    document.body.appendChild(div);
}

function getData(url) {
    fetch(
        url, {
        method: 'GET',
        headers: {
        },
    })
    .then(res => res.json())
    .then(
        data => {
        arrayOfData = data
        data.forEach(obj => createAndAppendDivToBody(obj));
    })
}

createAndAppendDivToBody(mockObj)
getData(url);

// store JSON data somewhere 
// get JSON data as an array
// push that into elements
// make it appear as a div (for one)
// flag library
// https://github.com/luciopaiva/country-flags
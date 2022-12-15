let arrayOfData = [];
let listOfCountries = [];
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
    "<div id='company'> Company: " + obj.company + "</div>" +
    "<div> Valuation: " + obj.valuation + "<div>" + 
    "<div> Industry: " + obj.industry + "<div>" + 
    "<div> Country: " + obj.country + "<div>" + 
    "<div> Founders: " + obj.founders + "<div>" + 
    "<div>"+"\n"+"</div>";
    div.setAttribute('class', 'myclass'); 
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
        data.forEach(obj => {
            createAndAppendDivToBody(obj);
            listOfCountries.push(obj.country);
        });
    })
}

console.log(listOfCountries)

getData(url);

// store JSON data somewhere 
// get JSON data as an array
// push that into elements
// make it appear as a div (for one)
// flag library
// https://github.com/luciopaiva/country-flags
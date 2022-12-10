let arrayOfData = [];
let url = 'http://localhost:3000/companyData';

let mockObj = {
        company: "ByteDance",
        valuation: 140,
        industry: "internet",
        country: " China",
        founders: "Zhang Yiming Liang Rubo"
}

function retrieveObj(obj) {

}

function createAndAppendDivToBody(obj) {

}

function getData(url) {
    fetch(
        url, {
        method: 'GET',
        headers: {
        },
    })
    .then(res => res.json())
    .then(data => {
        arrayOfData = data
        console.log(arrayOfData[0])
    })
}

getData(url);

// store JSON data somewhere 
// get JSON data as an array
// push that into elements
// make it appear as a div (for one)
// flag library
// https://github.com/luciopaiva/country-flags


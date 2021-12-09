// #1
function squareArray(array) {
    var array = [2,4,6,8]
    newArray = array.map(value => Math.pow(value,2));
    return newArray;
}

// reverse string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const reverse = function(string) {
    return string.split(' ').map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
}

// day of week
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var day = days[ now.getDay() ];
var month = months[ now.getMonth() ];

// duplicate characters
const count_duplicate_characters = function(str) {
    var arr = {}
    for (let i = 0; i < str.length; i++) {

        if (Object.keys(arr).includes(str[i])) {
            arr[str[i]] = arr[str[i]] + 1
            continue
        } 
        arr[str[i]] = 1
    }
    return arr
}

// filter array based on condition
let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3000000) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);
// 2

let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);

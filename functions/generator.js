const CRS = require('crypto-random-string');

let randomNum = CRS({length: 16, type: 'numeric'});
let random32 = CRS({length: 32});

function matrix( rows, cols, defaultValue){

    var arr = [];
  
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          arr[i][j] = defaultValue;
        }
    }
    return arr;
}

let plane = matrix(10, 10, 'none');

let items = {
    water: 30,
    ground: 20,
    wood: 20,
    stone: 20,
    metal: 9,
    gold: 1
}

// let itemslength = Object.keys(items).length;

let itemsMap = new Map(Object.entries(items));

let itemslength = itemsMap.size;

// let rnd;
//                 do {
//                     rnd = Math.trunc(Math.random() * 10);
//                 } while (rnd >= itemslength);
//                 el[0] = rnd;

function generate() {

    for(let i; i < plane.length; i++) {
        console.log(plane[0][i])
    }

}

generate();

// console.log(plane)
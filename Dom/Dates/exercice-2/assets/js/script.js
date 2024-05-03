let anniversaire = new Date(`1998-09-04`)
let milliseconds = timestamp * 1000

let currentMilliseconds = Date.now()

let differenceMilliseconds = currentMilliseconds - milliseconds

let days = differenceMilliseconds /  (1000 * 60 * 60 * 24)





console.log(anniversaire)

console.log(jenaiplusdenom.toString())

function daysSince(timestamp) {
    let milliseconds = timestamp * 1000;

    let currentMilliseconds = Date.now();

    let differenceMilliseconds = currentMilliseconds - milliseconds;

    let days = differenceMilliseconds / (1000 * 60 * 60 * 24);

    return Math.floor(days);
}


let timestamp = 1997; 

let daysSinceTimestamp = daysSince(timestamp);
console.log(`Jour depuis 1997: ${daysSinceTimestamp}`);
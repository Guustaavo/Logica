import leia from 'readline-sync';

var months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
var option = leia.keyInSelect(months, "Select the month");

if (months === "January" || months === "March" || months === "May" || months === "July" || months === "August" || months === "October" || months === "November" || months === "December") {
    console.log("This month has 31 days.");
}
else if (months === "February") {
    console.log("This month has 28 days and 29 days nos anos bissextos.");
}
else {
    console.log("This month has 30 days.");
}
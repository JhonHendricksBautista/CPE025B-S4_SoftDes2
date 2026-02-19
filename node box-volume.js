let width = prompt("Enter the width of the box:");
let height = prompt("Enter the height of the box:");
let length = prompt("Enter the length of the box:");

width = parseFloat(width);
height = parseFloat(height);
length = parseFloat(length);

if (isNaN(width) || isNaN(height) || isNaN(length)) {
    alert("Invalid! Please enter valid numbers.");
} else {
    let volume = width * height * length;
    alert(`Volume = ${volume}`);
    
    if (volume === 1000) {
        alert("Nice! Volume is 1000.");
    }
}
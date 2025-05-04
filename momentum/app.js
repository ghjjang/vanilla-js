let age;

do {
    age = parseInt(prompt("Enter your age "));
    if (isNaN(age)) {
        alert("Invalid input. Please enter a valid number.");
    } else if (age < 18) {
        alert("You are too young to drink.");
    } else if (age > 50) {
        alert("You are too old to drink.");
    } else {
        alert("You are of legal drinking age.");
        break; 
    }
} while (true);


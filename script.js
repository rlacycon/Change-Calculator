function calculateChange() {
    var changeAmount = document.getElementById("changeInput").value;

    // I used W3Schools to learn how to correctly make these if/else statements because I was having trouble making simple statements to limit the inputs

    if (changeAmount.includes(".")) {
        alert("Please enter a whole number without any decimals, pretty please.");
        return;
    }

    changeAmount = parseInt(changeAmount);

    if (isNaN(changeAmount) || changeAmount < 0) {
        alert("Please enter a positive whole number and nothing else.");
        return;
    }

    var dollars = Math.floor(changeAmount / 100);
    changeAmount %= 100;

    var quarters = Math.floor(changeAmount / 25);
    changeAmount %= 25;

    var dimes = Math.floor(changeAmount / 10);
    changeAmount %= 10;

    var nickels = Math.floor(changeAmount / 5);
    changeAmount %= 5;

    var pennies = changeAmount;

    var result = " You have:" + dollars + " dollars, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.";
    
    document.getElementById("changeResult").innerText = result;
}

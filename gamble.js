// Deposit some money 
// Determine Lines to bet on
// Collect a bet amount 
// Spin 
// Check if the user won 
// Give the user his winnings
// Play again ??


// Variables:
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

//Functions:
function deposit() {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numDepositAmount = parseFloat(depositAmount);

        if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
            console.log('Invalid deposit amount, try again!!');
        } else {
            return numDepositAmount;
        };
    };
};

function getNumOfLines() {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const getNumOfLines = parseFloat(lines);

        if (isNaN(getNumOfLines) || getNumOfLines <= 0 || getNumOfLines > 3) {
            console.log('Invalid number of lines, try again!!');
        } else {
            return getNumOfLines;
        };
    };
};

function getBet(balance, lines) {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numBet = parseFloat(bet);

        if (isNaN(numBet) || numBet <= 0 || numBet > balance / lines) {
            console.log('Invalid bet, try again!!');
        } else {
            return numBet;
        };
    };
};

function spin() {
    const symbols = [];

    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        };
    };

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, i);
        };
    };

    return reels;
};

function transpose(reels) {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        };
    };

    return rows;
};

function printRows(rows) {
    for (const row of rows) {
        let rowStr = '';
        for (const [i, symbol] of row.entries()) {
            rowStr += symbol
            if (i != row.length - 1) rowStr += ' | ';
        }
        console.log(rowStr)
    }
};

function getWinnings(rows, bet, lines) {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        if (new Set(symbols).size !== 1) allSame = false;
        if (allSame) winnings += bet * SYMBOLS_VALUES[symbols[0]];
    };

    return winnings;
};

function game() {
    let balance = deposit();

    while (true) {
        console.log(`You have a balance of \$${balance}`);
        const numOfLines = getNumOfLines();
        const bet = getBet(balance, numOfLines);
        balance -= bet * numOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numOfLines);
        balance += winnings;
        console.log(`You won, \$${winnings}`);

        if (balance <= 0) {
            console.log('You ran out of money!');
            break;
        };

        const playAgain = prompt('Do you want ot play again (yes/no)? ');
        if (playAgain !== 'yes') break;
    };
};

//Launch the game:
game();
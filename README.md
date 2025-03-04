Here's a `README.md` file for your Slot Machine game:

---

# Slot Machine Game

A simple slot machine game implemented in JavaScript using `prompt-sync` for user input. This game allows the user to deposit money, place bets on a chosen number of lines, spin the reels, and check for winnings based on matching symbols.

## Features
- Deposit an amount of money into your balance.
- Choose how many lines (1 to 3) to bet on.
- Enter a bet amount per line.
- Spin the reels and see the results.
- Check if you've won and collect your winnings.
- Play again or exit when your balance is empty.

## Game Flow
1. **Deposit money:** The user starts by entering a deposit amount.
2. **Select lines:** The user chooses how many lines they want to bet on (1-3 lines).
3. **Place bet:** The user sets a bet per line.
4. **Spin the reels:** The game randomly selects symbols for each reel.
5. **Check for winnings:** If all symbols in a row are the same, the user wins a payout.
6. **Play again:** The user is prompted to play again if they still have money left.

## Variables
- **ROWS**: The number of rows in the slot machine grid (3).
- **COLS**: The number of columns in the slot machine grid (3).
- **SYMBOLS_COUNT**: The number of each symbol available for the reels.
- **SYMBOLS_VALUES**: The value for each symbol (used to calculate winnings).

## Functions
- **`deposit()`**: Prompts the user to enter a valid deposit amount.
- **`getNumOfLines()`**: Prompts the user to choose how many lines to bet on (1-3).
- **`getBet()`**: Prompts the user to set a bet amount per line based on the current balance.
- **`spin()`**: Spins the reels by randomly selecting symbols.
- **`transpose()`**: Converts the columns of the reels into rows for easier checking.
- **`printRows()`**: Prints the results of the spin in a readable format.
- **`getWinnings()`**: Checks the rows for matching symbols and calculates the winnings.
- **`game()`**: Main game loop that ties everything together, managing user input, spins, winnings, and play again logic.

## How to Play
1. **Run the game:** Run the script using Node.js.
   ```bash
   node gamble.js
   ```
2. **Follow the prompts:** Enter a deposit amount, number of lines to bet on, and the bet amount per line.
3. **Spin the reels:** The game will display the results and calculate winnings.
4. **Play again:** If you want to play again, enter `yes` when prompted. The game will continue as long as you have a positive balance.

## Example

```bash
Enter a deposit amount: 100
You have a balance of $100
Enter the number of lines to bet on (1-3): 3
Enter the bet per line: 5
A | A | A
B | B | C
C | C | C
You won, $15
Do you want to play again (yes/no)? yes
You have a balance of $110
```

## Requirements
- Node.js: Ensure you have Node.js installed to run the script.

To install `prompt-sync` (which is used for taking user input), run:
```bash
npm install prompt-sync
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


# Quadratic Equation Solver

## Description

This code solves a quadratic equation in two modes - interactive and non-interactive. The user can choose the mode of 
operation by providing input arguments while executing the code.

## Prerequisites
- Node.js should be installed in the system.

## Instructions for Using the Code

1. Clone the repository using the command 
```
git clone https://github.com/TangiresH/MTRPZ-lab1.git
```
2. Navigate to the directory where the repository was cloned.
3. Install the dependencies using the command
```
npm install readline-sync
```
4. Run the code in interactive mode using the command 
```
node index.js
```
5. Run the code in non-interactive mode using the command 
```
node index.js <input-file>
```
The input file should contain three numbers separated by a space. Each number represents the coefficients of a quadratic equation.

### Interactive Mode

1. The code prompts the user to enter the coefficient 'a' of the quadratic equation.
2. If the user enters 0, the code throws an error message and prompts again for a valid input.
3. The code prompts the user to enter the coefficient 'b' of the quadratic equation.
4. The code prompts the user to enter the coefficient 'c' of the quadratic equation.
5. The code calculates the roots of the quadratic equation and prints them on the console.

### Non-Interactive Mode

1. The code reads the input file provided as an argument to the program.
2. If the file doesn't exist, the code throws an error message and exits the program.
3. The code checks whether the input file contains exactly three numbers.
4. The code checks whether the coefficient 'a' is not equal to 0 and the input file contains valid numbers.
5. The code calculates the roots of the quadratic equation and prints them on the console.

Note: If an error occurs, the program exits with an error code of 1.

## Reverted commit link:

### [revert commit](https://github.com/TangiresH/MTRPZ-lab1/commit/c0c9815a660a1a7334660875b22ae840b3bda322)




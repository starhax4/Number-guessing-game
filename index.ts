#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const generateRandomNumber = ()=>{
    let rand = Math.floor(Math. random() * (10 - 1 + 1) + 1)
    return rand
}

const randomNumber = generateRandomNumber()


const answer = await inquirer.prompt([
{"message":"Enter a guessed Number :","type":"number","name":"userNumber"}
])

if(answer.userNumber === randomNumber){
    console.log(chalk.green(`You were right, the number was:${randomNumber}`));   
}
else{
    console.log(chalk.red(`you were wrong, the number is ${randomNumber}`));
}


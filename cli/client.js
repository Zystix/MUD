'use strict'
var io = require('socket.io-client')
var chalk = require('chalk')
var figlet = require('figlet')
var readline = require('readline')

var rl = readline.createInterface(process.stdin, process.stdout)
var socket = io.connect('http://localhost:3000')

let username
let vocation
console.log(
	chalk.blue(
		figlet.textSync('M U D', {horizontalLayout: 'default' })
		)
	)

rl.question(chalk.red('Tavern Keep: Have you been here before, Adventuer? (new user) '), (answer) =>{
    if (answer == 'n' || 'no') {
      rl.question(chalk.red('Tavern Keep: Ah, then what is your name, Adventurer? '), (_name) => {
        rl.question(chalk.red('Tavern Keep: Very nice to meet you! What is your vocation? '), (job) => {
            username = _name
						vocation = job
            socket.emit('newPlayer', {name: username, class: vocation})
        })
      })
}
		elseif(answer == 'y' || 'yes') {
			rl.question(chalk.red('Tavern Keep: Welcome back Traveller! What is your name?'), (name) => {

			})
}
		else {
			rl.question(chalk.red('Tavern Keep: Not sure I understand what you mean, Traveler. (yes/no)'))
}
})


rl.on('line', (line) => {
	socket.emit('command', line);
})

'use strict';
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
var http = require('http').Server(app)
var io = require('socket.io')(http)

var player = require('./src/player.js')

var currentPlayers = []

var server = http.listen(3000, () => {
	console.log('server is listening on port', server.address().port)
})

io.on('connection', (socket) => {
	console.log('User Connected')

  socket.on('newPlayer', (Player) => {
    let character = new player(Player.name, Player.class, [], 100, 50, 20, 200)
    currentPlayers.push(character)
  })

  socket.on('globalMessage', (message) => {
    // TODO: Filter message(s)
    socket.emit('gMessage', (message))
  })

	socket.on('disconnect', () => {
		console.log('User Disconnected')
	})
})

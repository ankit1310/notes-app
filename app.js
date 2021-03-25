const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command in yarg
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command in yarg
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },

    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command in yarg
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command in yarg
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()

//const fs = require('fs')
//fs.writeFileSync('notes.txt', 'This is the first line.')
//fs.appendFileSync('notes.txt', ' This is the second line.')
//console.log(chalk.green.bold('Success!'))
//console.log(chalk.green.bold.inverse('Success!'))
//console.log(chalk.green.inverse('Success!'))

//console.log('Inside notes.js')
const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}

const readNote = (titleFromUser) => {
    const notes = loadNotes()
    const duplicateNoteSingular = notes.find((note) => note.title === titleFromUser)
    if (duplicateNoteSingular) {
        console.log('Title: ' + duplicateNoteSingular.title)
        console.log('Body: ' + duplicateNoteSingular.body)
    } else {
        console.log('No matching note found for title: ' + titleFromUser)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => {
        console.log('Title: ' + note.title)
        console.log('Body: ' + note.body)
    })
}

const removeNote = (titleFromUser) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== titleFromUser)
    saveNotes(notesToKeep)
    var msg
    if (notes.length === 0 && notesToKeep.length === 0) {
        msg = chalk.red('No notes to delete!')
    } else if (notes.length === notesToKeep.length) {
        msg = chalk.red('No notes found with matching title: ' + titleFromUser)
    } else {
        msg = chalk.green('Note removed with title: ' + titleFromUser)
    }

    console.log(msg)
}

const addNote = (titleFromUser, bodyFromUser) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === titleFromUser)
    const duplicateNoteSingular = notes.find((note) => note.title === titleFromUser)

    if (duplicateNoteSingular.length === 0) {
        console.log('Note title taken')
    } else {
        notes.push({
            title: titleFromUser,
            body: bodyFromUser
        })

        saveNotes(notes)
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch (exception) {
        return []
    }
}

const saveNotes = function(notes) {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

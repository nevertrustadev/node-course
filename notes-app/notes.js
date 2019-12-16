const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }

};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if (newNotes.length < notes.length) {
        saveNotes(newNotes);
        console.log(chalk.green(title + ' has been removed from notes'));
    } else {
        console.log(chalk.red(title + ' does not exist!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.blue.bold.underline("Your Notes"));
    notes.forEach((note) => console.log(chalk.green(note.title)));
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.bold.underline(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red('No Note Found!'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJsON)
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
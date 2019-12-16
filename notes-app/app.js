const yargs = require('yargs');
const notes = require('./notes.js');

// create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Title of note to be added',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Body of note to be added',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

// create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note to be removed',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

// create list command
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler() {
		notes.listNotes();
	}
});

// create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note to be read',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();


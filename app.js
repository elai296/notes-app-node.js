const fs = require('fs')

// fs.writeFileSynch('notes.txt', 'This file was created by Node.js')

fs.appendFileSync('notes.txt', ' I live in California');
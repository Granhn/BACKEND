const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8');

 fs.writeFileSync('./data/third.txt','este es un tercer archivo');
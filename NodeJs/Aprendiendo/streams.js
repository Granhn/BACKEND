// const { writeFile } = require('fs/promises');

// const createBigFile = async ()=>{
//     await writeFile('./data/bigfile.txt','hello world'.repeat(1000000))
// }
// createBigFile();

const { createReadStream } = require('fs');

const stream = createReadStream('./data/bigfile.txt');

stream.on('data', (chunk) => { console.log(chunk) });
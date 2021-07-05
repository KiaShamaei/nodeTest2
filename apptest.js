

const fs = require('fs');
const { stdout, stdin } = require('process');
const readline = require('readline')


const rl= readline.createInterface({
    output :  stdout,
    input : stdin
})
rl.question("what is the part?", (answer)=>{
    console.log(answer);
    fs.writeFileSync('./document/test.txt', answer)
    rl.close();

})


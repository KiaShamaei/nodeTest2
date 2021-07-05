

const fs = require('fs')
const readline = require('readline')



const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(answer)
//     rl.close()
// })






rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  fs.writeFileSync('product.txt', answer)

  rl.close();
});
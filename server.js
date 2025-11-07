require('dotenv').config();
const args = process.argv.slice(2);

// Example usage: node index.js name=mandy age=21
let userData = {};
args.forEach(arg => {
  const [key, value] = arg.split('=');
  userData[key] = value;
});

// Access environment variables (defined inside .env file)
const APP_MODE = process.env.APP_MODE;
const SECRET_KEY = process.env.SECRET_KEY;

console.log(",");
console.log(userData);

console.log("\n ,");
console.log({ APP_MODE, SECRET_KEY });

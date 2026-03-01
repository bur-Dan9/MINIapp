const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('x-show="showWaitlist"')) {
    console.log("x-show directive missing");
} else {
    console.log("modal seems to be there");
}

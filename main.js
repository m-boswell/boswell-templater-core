const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const dataPath = path.resolve(__dirname, 'assets/fields.json');
const templatePath = path.resolve(__dirname, 'templates/test.hbs');
const data = fs.readFileSync(dataPath);
const source = fs.readFileSync(templatePath).toString();
const template = Handlebars.compile(source);
const obj = JSON.parse(data);

var result = template(obj);

console.log('log this');
console.log(result)
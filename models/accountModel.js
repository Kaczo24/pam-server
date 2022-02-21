var fs = require('fs');
const path = require("path").join(__dirname, '../database.json')



function load() {
    return JSON.parse(fs.readFileSync(path));
}

exports.find = (props) => {
    let obj = load();
    return obj.users.filter(x => Object.keys(props).every(y => props[y] === x[y]));
}

exports.save = (user) => {
    let obj = load();
    obj.users.push(user);
    fs.writeFileSync(path, JSON.stringify(obj));
}
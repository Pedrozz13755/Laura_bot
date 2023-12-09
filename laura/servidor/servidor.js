const fs = require('fs')
const chalk = require('chalk')
const axios = require('axios')
const cfonts = require('cfonts')

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

var corzinhas = ["red", "green", "yellow", "blue", "magenta", "cyan", "white", "#3456ff", "#f80"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	


const banner = cfonts.render((`${nomeservidor}`), {
font: "block",
align: "center",
gradient: [`${cor1}`,`${cor2}`],
lineHeight: 4
});
module.exports = { getGroupAdmins, banner }


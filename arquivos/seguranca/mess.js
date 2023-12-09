const emojiFunction = "︎︎⚠︎"
const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./files/config.data.json'))
var {p, OwnerNumber, SeuNome} = infos

const messResp = ["O que vale a pena possuir, vale a pena esperar..." ,

"Calma aí que a surpresa vem" , 

"Amor, espere um pouquinho que vou fazer o que você mandou" ,

"Saber quando se deve esperar é o grande segredo do sucesso, enviando mvd..." ,

"Tô pegando aqui... achei!" , 

"Tá chegando... chegou? Se chegou, me diz se está feliz, meu corninho" , 

"As oportunidades são como o nascer do sol: se você esperar demais, vai perdê-las.    calma vida  enviando..." , 

"calma vida tô enfiando... ops errei, enviando.. 😏" , 

"Tem certeza disso? não é possivel que meu amor pediu isso. já te entrego" ,

"Seja meu amor e dou o que tu quer",

"Para quem sabe esperar, tudo vem a tempo.  enviando mow..",

"A paciência é a arte de esperar.",

"Se você não se atrasar demais, posso te esperar por toda a minha vida. enviado aí vida..",

"Felicidade é ter algo que fazer, ter algo que amar e algo que esperar...",

"Esperar menos não significa desistir. Antes se surpreender, do que se decepcionar.  enviando amor...",

"Aprendi a nunca esperar nada de ninguém. Desde então, eu só tenho surpresas - nunca decepção.  enviando amorzinho..",

"To enviando vida! 😏 "]

const sexoMess = messResp[Math.floor(Math.random() * messResp.length)] 

exports.commandUsed = () => {
return sexoMess;
}

exports.levelOff = () => {
return "❌ *_...Leveis não está ativado..._*❌";
}
//levelOff

exports.noMonkey = () => {
return "*_❌ Comando privado para meu dono ❌_*";
}
//noMonkey

exports.menuWithRr = () => {
return `*_❌ ERRO ENCONTRADO NO MENU ❌_*\n\n*_🗣️ Tente de novo mais tarde_*`;
}
//menuWithRr

exports.functionOff = (comando) => {
return `*_${emojiFunction} Função ${comando} desativado com sucesso!_*`;
}
//functionOff

exports.functionOn = (comando) => {
return `*_${emojiFunction} Função ${comando} ativado com sucesso!_*`;
}
//functionOn

exports.chooseTheType = () => {
return `*_${emojiFunction} Escolha entre as 3 opções!_*`;
}
//chooseTheType

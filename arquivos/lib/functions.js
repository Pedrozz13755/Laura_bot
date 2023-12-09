const fs = require('fs');
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const { color } = require('./color')
const spin = require('spinnies')
const config = JSON.parse(fs.readFileSync("./DONO/config/data.json"))
prefix = config.prefix
prefixo = config.prefix


var corzinhas = ["red","green","yellow","blue","magenta","cyan","white","gray","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"]
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))]	




const banner = cfonts.render((`MANUELLA MD 9.0`), {
font: 'slick',             
align: 'center',           
colors: [`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`${cor4}`,`${cor2}`],     
independentGradient: false, 
transitionGradient: false, 
env: 'node'
});  


const spinner = { 
  "interval": 150,
  "frames": [
"M",
"MA",
"MANU",
"MANUELA",
"MANUELA-MD",
  ]}
  
  const spinner2 = { 
  "interval": 150,
  "frames": [" MEU CANAL : Youtube.com/@PLMODS"]}
  
let globalSpinner;

let globalSpinner2;

const getGlobalSpinner = () => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'pink', succeedColor: 'purple', spinner});
  return globalSpinner;
}

const getGlobalSpinner2 = () => {
  if(!globalSpinner2) globalSpinner2 = new spin({ color: 'pink', succeedColor: 'purple', spinner2});
  return globalSpinner2;
}

spins = getGlobalSpinner(false)

spins2 = getGlobalSpinner2(false)

const start = (id, text) => {
	spins.add("2", {text: text})
	}
	
const start2 = (id, text) => {
	spins2.add(id, {text: text})
	}
	
const infopd = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})
}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

//======//
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}


function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}


module.exports = { TelegraPh }





const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var time = '♧ Boa madruga ♧'
}
if(time2 > "05:30:00"){
var time = '♧ Bom dia ♧'
}
if(time2 > "12:00:00"){
var time = '♧ Boa tarde ♧'
}
if(time2 > "19:00:00"){
var time = '♧ Boa noite ♧'
}
const timee = moment.tz("America/Sao_Paulo").format("HH:mm:ss")

const banner2 = cfonts.render((`${time}`), {
font: 'shade',             
align: 'center',           
colors: [`${cor1}`,`${cor3}`,`${cor4}`,`${cor2}`],
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`${cor4}`,`${cor2}`],     
independentGradient: false, 
transitionGradient: false, 
env: 'node'
});  

resposta = {
espere: "💦 Aguarde...enviando ",
dono: "💦 Esse comando so pode ser usado pelo meu dono!!! ",
grupo: "💦 Esse comando só pode ser usado em grupo ",
privado: "💦 Esse comando só pode ser usado no privado ",
adm: "💦 Esse comando só pode ser usado por administradores de grupo",
botadm: " 💦 Este comando só pode ser usado quando o bot se torna administrador ",
registro: `[⚙️️] Você não se registrou utilize ${prefixo}rg para se registrar `,
norg: "[⚙️️] Você ja está registrado ",
erro: "💦 Error, tente novamente mais tarde "
}


module.exports = {
banner,
banner2
}

 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`${color(`ALTERAÇÕES SALVAS  ${__filename} \n ~>PLZINHO`,'cyan')}`)
delete require.cache[file];
require(file);
 })
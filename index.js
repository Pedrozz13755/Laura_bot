////BOT CRIADO POR PEDROZZ e se for resposta o bot pelo menos deixe os crédito pq deu muito trabalho para fazê-lo



///e bom usso meu chapa




require("./dono/config.js")
require("./config/data.json")

const { 
default: makeWASocket, downloadContentFromMessage,  emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions,	 WAFlag,  WANode,	 WAMetric,	 ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,	 WAGroupMetadata,  ProxyAgent,	 waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,	 Browser,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,	 Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex
} = require('@whiskeysockets/baileys');
let pino = require('pino')
const fs = require('fs')
const { exec, spawn, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios');
const chalk = require('chalk');
const moment = require('moment-timezone');
const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };
const premium = JSON.parse(fs.readFileSync('./PEDROZZ-premius/usuarios/premium.json'));
const permite = JSON.parse(fs.readFileSync('./dono/permitidos/permitidos.json'));

//anti
const antilink = JSON.parse(fs.readFileSync('./dono/seguranca/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./dono/seguranca/antifake.json'))
const antiimg = JSON.parse(fs.readFileSync('./dono/seguranca/antiimg.json'))
const antipv = JSON.parse(fs.readFileSync('./dono/seguranca/antipv.json'))
const antiaudio = JSON.parse(fs.readFileSync('./dono/seguranca/antiaudio.json'))
const antivid = JSON.parse(fs.readFileSync('./dono/seguranca/antivideo.json'))
//.........

const { menu } = require("./menus/menu.js")
const { menux } = require("./menus/menux.js")
const { only } = require("./menus/only.js")
const { tabela } = require("./menus/tabela.js")
const { sound } = require("./menus/sound.js")
const { animes } = require("./menus/animes.js")
const { app } = require("./menus/app.js")
const { musica } = require("./menus/musica.js")
const { efeitos } = require("./menus/efeitos.js")
const { menu18 } = require("./menus/menu18.js")
const config = JSON.parse(fs.readFileSync("./config/data.json"))
const { convertSticker } = require("./laura/funcions/swm.js");

//COLOCA OS JSON AKI
//ARQUIVOS PARA SUAS CARACTERES TRAVAZAP CASO VOCÊ NÃO FOR TRAVAZAP IGNORE😆
const { boss } = require('./laura/travas/boss.js')
const { ctt } = require('./laura/travas/boss.js')
const { txt } = require('./laura/travas/boss.js')
const { ios } = require('./laura/travas/boss.js')
const { ui } = require('./laura/travas/boss.js')






////
const { getGroupAdmins, banner } = require('./laura/servidor/servidor.js');
const { 
getExtension, Random, 
getFileBuffer, getBuffer,
} = require("./laura/servidor/get.js")

async function ligarbot() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })


//// DATA E HORA

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm');

//PING
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// CONEXÃO DO BOT

const { state, saveCreds } = await useMultiFileAuthState('./laura_qr')
const { version, isLatest } = await fetchLatestBaileysVersion()
//ARQUIVOS DA CONFIG PREFIX DONO E NOME BOT CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO
donoName = global.donoName
botName = global.botName
donoNumher = global.donoNumher
donoName2 = global.donoName2
groupDono = global.group
comandos = global.comandos
grupo = global.grupo
botNumber = global.botNumber
prefix = config.prefix


console.log(banner.string)
console.log((`                   ✅BOT CONECTADO COM SUCESSO✅\n
CreaTor: pedrozz
nomebot: ${botName}
numerodono: ${donoNumher}
nomedono: ${donoName}
PreFiXo: ${prefix}
PEDROZZ DOMINA\n\n
*COPIA NÃO COMÉDIA.  HAHAHA*`))

const laura = makeWASocket({
version,  
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 180000,
browser: ['pedrozz_Bot', 'Chrome', '1.0.0'], 
auth: state
})
store.bind(laura.ev)



laura.ev.on('chats.set', () => {
console.log('setando conversas...')
})


laura.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

laura.ev.on('creds.update', saveCreds)

laura.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await laura.readMessages([key])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

const from = info.key.remoteJid

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")



/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========

//CASO NÃO SAIBA MEXE NÃO MEXA NISSO DEIXA ASSIM OU VAI CAUSAR ERRO





const criador = `${donoNumher}@s.whatsapp.net`
const numeroBot = laura.user.id.split(":")[0]+"@s.whatsapp.net"
const isGroup = from.endsWith("@g.us")
const groupMetadata = isGroup ? await laura.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const registro = JSON.parse(fs.readFileSync('./laura/registro.json'));
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(' ')
const sender = isGroup ? info.key.participant: from
const isPremium = premium.includes(sender)
const ispermite = permite.includes(sender)
const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
//antis
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntifake = isGroup ? antifake.includes(from) : false
const isAntiImg = isGroup ? antiimg.includes(from) : false
const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
//.............
const content = JSON.stringify(info.message)

const separar = body.trim().split(/ +/).slice(1)
const x = separar.join(' ')
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false  
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const { banner, getRandom, getExtension } = require('./laura/funções')


const selo = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": `Texto`,"title": null,'jpegThumbnail': null}}}
const reagir = (reassao) => {
laura.sendMessage(from, {react: {text: reassao, key: info.key}})
}

const mentions = (teks, memberr, id) => {
      (id == null || id == undefined || id == false) ? laura.sendMessage(from, { text: teks.trim(), mentions: memberr }) : laura.sendMessage(from, { text: teks.trim(), mentions: memberr })
    }
    
var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await laura.sendPresenceUpdate('composing', from) 
await esperar(1000)   
laura.sendMessage(from, { text: texto }, {quoted: info})
}

const enviar = (texto) => {
laura.sendMessage(from, { text: texto }, {quoted: info})
}

const reply = (texto) => {
laura.sendMessage(from, { text: texto }, {quoted: info})
}


const esperar = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
//isQuoeted
    const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
//==========(REGISTRO)==================\\
const regis = fs.existsSync("./arquivos/registro.json")
if(!regis && comando != "login" && isCmd) return reply(`*Olá amigo (a)😇*\n\n*Não achei seu longin*\n\n*Para nossa segurança todos os usuários são obrigados a se registrar para usar meus comando*\n\n*Registra-se com nome idade e sexualidade*\n\n*Siga o exemplo abaixo*\n\n*${prefix}login pedrozz/18/hetero*`)
//==========================================
/// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin meu dono não deixa eu te banir😭`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*esse ser foi eliminado do grupo☠️☠️*`)
	     	}, 100)
	     	reply(`*_「Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}*  vc é admin meu dono não deixa eu te banir😭`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*esse ser foi eliminado do grupo☠️☠️*`)
	     	}, 100)
	     	reply(`*_「 Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin meu dono não deixa eu te banir😭`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*esse ser foi eliminado do grupo☠️☠️*`)
	     	}, 100)
	     	reply(`*_「 Um link foi detectado pel@ ${botName}」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
laura.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
 if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
          if (isGroupAdmins) return laura.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await laura.sendMessage(from, { text: 'MENSAGEM PROIBIDA,PUNINDO USUÁRIO' }, { quoted: info })
          setTimeout(async function () {
            laura.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }
        
//===========================================\\
// 女⃟⃟女COMANDO NO PV女⃟⃟女
if (!isGroup && isCmd) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女COMANDO NO PV女⃟⃟女▬▭▬▭▬','red'),'\n',
color('┃‣ ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('┃‣ ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('┃‣ ᏟᎷᎠ :','red'),color(comando,'cyan'),'\n',
color('┃‣ ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','red'),'\n')

// MENSAGEM NO PV
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女MENSAGEM NO PV女⃟⃟女▬▭▬▭▬','red'),'\n',
color('┃‣ ΝႮ́ᎷᎬᎡϴ :','red'),color(sender.split("@")[0],'blue'),'\n',
color('┃‣ ΝᏆᏟᏦ :','red'),color(pushname,'cyan'),'\n',
color('┃‣ ᎻϴᎡᎪ :','red'),color(hora,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','red'),'\n')

// COMANDO NO GRUPO
if (isCmd && isGroup) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女COMANDO NO GRUPO女⃟⃟女▬▭▬▭▬','blue'),'\n',
color('┃‣ ᏀᎡႮᏢϴ :','red'),color(groupName,'red'),'\n',
color('┃‣ ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('┃‣ ΝᏆᏟᏦ :','blue'),color(pushname,'gold'),'\n',
color('┃‣ ᏟᎷᎠ :','blue'),color(comando,'gold'),'\n',
color('┃‣ ᎻϴᎡᎪ :','blue'),color(hora,'gold'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','blue'),'\n')

// MENSAGEM NO GRUPO 
if (!isCmd && isGroup && !info.key.fromMe) console.log(
color(' ╭▬▭▬▭▬⪩女⃟⃟女MENSAGEM NO GRUPO女⃟⃟女▬▭▬▭▬','blue'),'\n',
color('┃‣ ᏀᎡႮᏢϴ :','blue'),color(groupName,'cyan'),'\n',
color('┃‣ ΝႮ́ᎷᎬᎡϴ :','blue'),color(sender.split("@")[0],'red'),'\n',
color('┃‣ ΝᏆᏟᏦ :','blue'),color(pushname,'cyan'),'\n',
color('┃‣ ᎻϴᎡᎪ :','blue'),color(hora,'cyan'),'\n',
color('╰▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬','blue'),'\n')

//===========================================\\
//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return laura.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
setTimeout(() => {
laura.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
setTimeout(async function () {
if(!JSON.stringify(groupMembers).includes(sender)) return  
laura.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//=====================
//
msg = {
espere: "aguarde um pouquinho ai estou processando🔹",
dono: "este comando so podera ser usado pelo meu dono",
grupo: "este comando so pode ser usado em grupo🫂",
private: "este comando so pode ser usado no privado",
premium: "[❗SEJA PREMIUM ❗] ESTE COMANDO É SÓ PARA *USUÁRIOS PREMIUMS",
adm: "este comando so pode ser usado por um adm🤣",
error: "ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
unico: "esse comando e apenas para usuários permitidos",
wait: '⌛ Calmaer opoha to fazendo ⌛',
botadm: `@ ${botName} precisa ser adm xd🙄🙄`
}


//selos

const loc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"locationMessage": {
"name": ' Laura_Privat',
}}}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' Laura_Privat ',
"jpegThumbnail": fs.readFileSync('./laura/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./laura/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": ` Laura_Privat `,
}}}


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
async function fetchJson (url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
              
//============(COMANDOS COM PREFIXO================\\


switch(comando) {

case 'antiaudio':
            if (!isGroup) return reply(msg.grupo)
            if (!isGroupAdmins) return reply(msg.adm)
            if (!isBotGroupAdmins) return reply(msg.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiAudio) return reply('🤝Ja esta ativo🤝')
              antiaudio.push(from)
              fs.writeFileSync('./dono/seguranca/antiaudio.json', JSON.stringify(antiaudio))
              reply('Ativou com sucesso o recurso de anti audio neste grupo')
            } else if (Number(args[0]) === 0) {
              if (!isAntiAudio) return reply('🤝Ja esta Desativado🤝')
              antiaudio.splice(from, 1)
              fs.writeFileSync('./functions/antiaudio.json', JSON.stringify(antiaudio))
              reply('Desativou com sucesso o recurso de anti audio neste grupo')
            } else {
              if (isAntiAudio) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🌟] DESATIVAR [🌟]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[,🌟] ATIVAR [🌟]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═──────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐀𝐔𝐃𝐈𝐎👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═──────═⌘═────═╯
  `,
                footer: `STATUS DO ANTI-AUDIO: AGORA ${isAntiAudio ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              laura.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break
            
 case 'antivideo':
            if (!isGroup) return reply(resposta.grupo)
            if (!isGroupAdmins) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiVid) return reply('Ja esta ativo🤝')
              antivid.push(from)
              fs.writeFileSync('./functions/antivideo.json', JSON.stringify(antivid))
              reply('🍉Ativou com sucesso o recurso de anti video neste grupo✔🍉')
            } else if (Number(args[0]) === 0) {
              if (!isAntiVid) return reply('Ja esta Desativado')
              antivid.splice(from, 1)
              fs.writeFileSync('./functions/antivideo.json', JSON.stringify(antivid))
              reply('🍉Desativou com sucesso o recurso de anti video neste grupo🍉')
            } else {
              if (isAntiVid) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[🍉] DESATIVAR [🍉]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[🍉] ATIVAR [🍉]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐕𝐈𝐃𝐄𝐎 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯ `,
                footer: `STATUS DO ANTIVIDEO AGORA: ${isAntiVid ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              laura.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break
                       

case 'antiimg':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply(`Hmmmm`)
if (Number(args[0]) === 1) {
if (isAntiImg) return reply(`Já Esta ativo`)
antiimg.push(from)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply(`${emoji}Ativou com sucesso o recurso de anti imagem neste grupo✔️${emoji}`)
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply(`${emoji}Ja esta Desativado.${emoji}`)
antiimg.splice(from, 1)
fs.writeFileSync('./arquivos/antis/antiimg.json', JSON.stringify(antiimg))
reply(`${emoji}Desativou com sucesso o recurso de anti imagem neste grupo✔️${emoji}`)
} else {
reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
}
break

case 'antifake':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
if (!isBotGroupAdmins) return reply(msg.botadm)
if (args.length < 1) return reply(`${emoji}1 pra ligar / 0 pra desligar${emoji}`)
if (Number(args[0]) === 1) {
if (isAntifake) return reply(`${emoji}Ja esta ativo${emoji}`)
antifake.push(from)
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply(`${emoji}Ativou com sucesso o recurso de antifake neste grupo ${emoji}`)
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply(`${emoji}Ja esta Desativado${emoji}`)
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/antifake.json', JSON.stringify(antifake))
reply(`${emoji}‼️ Desativou com sucesso o recurso de antifake neste grupo✔️${emoji}`)
} else {
reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
}
break

case 'antipv':
            if (!isOwner) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAntiPv) return reply('Ja esta ativo')
              antipv.push('Ativado')
              fs.writeFileSync('./functions/antipv.json', JSON.stringify(antipv))
              reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
            } else if (Number(args[0]) === 0) {
              if (!isAntiPv) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = antipv.indexOf(pesquisar)
              while (processo >= 0) {
                antipv.splice(processo, 1)
                processo = antipv.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/antipv.json', JSON.stringify(welkom))
              reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break

case 'antilink':
if (!info.key.fromMe && !isCreator) return reply(`VC PRECISA SER ADM XD🙄`)
if (!info.key.fromMe && !isCreator) return reply(`O BOT PRECISA SER ADM XD🙄`)
					if (args.length < 1) return reply(`${emoji}digite 1 para ativar ou 0 para desativar${emoji}`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(`${emoji}o anti-link está ativo${emoji}`)
						antilink.push(from)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi ativo no grupo ✔️${emoji}`)
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./dono/seguranca/antilink.json', JSON.stringify(antilink))
						reply(`${emoji}O anti-link foi desativado com sucesso neste grupo✔️${emoji}`)
					} else {
						reply(`${emoji}1 para ativar, 0 para desativar${emoji}`)
					}
					break
case "infogp":
        // CincoFolhas
        if (!isGroup) return enviar(msg.grupo)
        if (!isBotGroupAdmins) return enviar(msg.botadm)
        enviar(`
         ꧁✟${donoName}✟꧂
 ╭▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬
 ┃➣nome:꧁${groupName}꧂
 ┃➣descrição:꧁${groupDesc}꧂
 ┃➣
 ┃➣
 ┃➣id:꧁${from}꧂
 ┃➣data:꧁${data}꧂
 ┃➣hora:꧁${hora}꧂
 ╰▬▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬
            ©*${botName}*-𝑩𝑶𝑻⃟ 
`)
        break

      case 'listadm':
        if (!isGroup) return enviar(msg.grupo)
        teks = `
                 ꧁✟${botName}✟꧂
 ╭▬▬▬▬▬▬୧✬҉୨▬▬▬▬▬▬▬▬
 ┃➣aqui a lista de todos adms
 ┃➣grupo:꧁${groupMetadata.subject}}꧂
 ┃➣total:${groupAdmins.length}
 ┃➣ `
        no = 0
        for (let admon of groupAdmins) {
          no += 0
          teks += `
 ┃➣id:[${no.toString()}] ꧁@${admon.split('@')[0]}}꧂
`
        }
        mentions(teks, groupAdmins, true)
        break

// STICKER/FIGURINHAS \\
case 's':
(async function () {
reply(`Espera um pouquinho ai meu bom😊`)
var legenda = q ? q?.split("/")[0] : `❄ solicitado por:
❄ feito por:
❄dono:
`
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `${pushname}
${botName}
✟⃢⃟${donoName}⃢⃟✟
`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
laura.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
laura.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: info})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
break


case "grupo":
if (!isGroup) return reply(`Cmd somente em grupo`)
if (!isGroupAdmins) return reply(`Cmd somente para adm`)
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
if (args.length < 1) return reply(`
╔━━━━━━░CDM GRUPO░━━━━━━╗
  ❌⃟PARA FECHAR O GRUPO (${prefix}grupo f )ͦ⃟❌
  ✔️ )ͦ⃟PARA ABRIR O GRUPO (${prefix}grupo a )ͦ⃟✔️
╚━━━━━░${botName}░━━━━━━╝
`)
try {
if (q == "a"){
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
await laura.groupSettingUpdate(from, "not_announcement")
reply("✔️𝔾ℝ𝕌ℙ𝕆 𝔸𝔹𝔼ℝ𝕋𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆✔️")
}
if (q == "f") {
await laura.sendMessage(from, { react: { text: `❌`, key: info.key }})
await laura.groupSettingUpdate(from, "announcement")
reply("❌𝔾ℝ𝕌ℙ𝕆 𝔽𝔼ℂℍ𝔸𝔻𝕆 ℂ𝕆𝕄 𝕊𝕌ℂ𝔼𝕊𝕊𝕆❌")
}
} catch(e) {
console.log(e)
reply(msg.error)
}
break

      case 'rename':
      case 'roubar':
        if (!isQuotedSticker) return reply('Marque uma figurinha...')
        encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
        var kls = q
        var pafck = kls.split("/")[0];
        var author2 = kls.split("/")[1];
        if (!q) return reply('*E o autor e o nome do pacote?*')
        if (!pafck) return reply(`*por favor escreve o formato certo: ${prefix + comando} sad/bla*`)
        if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + comando} sad/dms*`)
        bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pafck}`)
        var sti = new Buffer.from(mantap, 'base64');
        laura.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pafck}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: info })
          .catch((err) => {
            reply(`❎ Error, tenta mais tarde`);
          })
        break
      
case "restartlink":
if (!isGroup) return reply(`CMD SOMENTE EM GRUPO XD`)
if (!isGroupAdmins) return reply(`CMD SOMENTE PARA ADM`)
if (!isBotGroupAdmins) return reply(`o bot tem q ser adm🙄`)
try {
await laura.groupRevokeInvite(from)
reply(`${emoji}Link de convite resetado com sucesso ${emoji}`)
} catch(e) {
console.log(e)
reply(`algo deu errado`)
}
break

case 'servip':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(mess.donosmt)
premium.push(`${numeroBot}@s.whatsapp.net`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto o bot foi adicionado na lista premium.`)
break

case 'servipdono':  
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return 
premium.push(`${donoNumher}@s.whatsapp.net`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto você foi adicionado na lista premium.`)
break

case 'addvip':
if (!isGroup) return reply(enviar.msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: `??@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
laura.sendMessage(from, {text: `??@${tedtp} foi adicionado à lista de usuários premium com sucesso👑\n\nagora ele(a) pode usar os cmd Premium a vontade`, mentions: [mentioned]}, {quoted: info})
}
break
case 'addpermitidos':
if (!isGroup) return reply(`esse cmd e apenas em grupos`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return reply(msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant 
bla = permite.includes(mentioned)
if(bla) return reply("*Este humano ja ta adicionado*")  
permite.push(`${mentioned}`)
fs.writeFileSync('./dono/permitidos/permitidos.json', JSON.stringify(permite))
laura.sendMessage(from, {text: `??@${mentioned.split("@")[0]} O humano foi adicionado.\n\nagora ele(a) pode usar os cmd únicos a vontade`}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = permite.includes(mentioned)
if(bla) return reply("*Este humano ja ta adicionado*")  
permite.push(`${mentioned}`)
fs.writeFileSync('./dono/permitidos/permitidos.json', JSON.stringify(permite))
tedtp = args.join(" ").replace("@", "")
laura.sendMessage(from, {text: `??@${tedtp} O humano foi adicionado.\n\nagora ele(a) pode usar os cmd únicos a vontade`, mentions: [mentioned]}, {quoted: info})
}
break

case 'limpeza':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
laura.sendMessage(m.chat, {text: `krl lixo pra kct\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n LIMPO COM TODO O SUCESSO`},{quoted: m})
break
//⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘MENUS⫘⫘⫘⫘⫘⫘⫘⫘⫘


case 'menu':
  laura.sendMessage(from, {react: {text: `👻`, key: info.key}})
  laura.sendMessage(from, {react: {text: `💮`, key: info.key}})
  laura.sendMessage(from, {react: {text: `✔️`, key: info.key}})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.gif'),
caption: menu(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})


break

case 'menudono':
if(!isCreator) return reply(msg.dono)
await laura.sendMessage(from, { react: { text: `😍`, key: info.key }})
await laura.sendMessage(from, { react: { text: `👻`, key: info.key }})
await laura.sendMessage(from, { react: { text: `👾`, key: info.key }})
escrever(`o menu do dono esta na paste de menu normal!`)
break

case 'menux':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: menux(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/laura1.webp'), caption: "Legenda" })

break

case 'menuvip':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `👑`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/vip.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌

╭▬▭▬ ▬▭▬⪩女⃟⃟女MENU VIP女⃟⃟女▬▭▬▬▭▬▬▭▬
╰╮
┃│● ⋟ ${emoji}${prefix}menudowl
┃│● ⋟ ${emoji}${prefix}menu18
┃│● ⋟ ${emoji}${prefix}onlyfans
┃│● ⋟ ${emoji}${prefix}menux
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨

EM PREVÊ TERÁ MAIS CMDS

©*${botName}*-𝑩𝑶𝑻⃟ 

            `            
           await laura.sendMessage(from, {image: fs.readFileSync('./laura/image/menu.jpg'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"👑𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌👑",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/61eabe673ecf354d643d1.jpg`,
            sourceUrl: `https://instagram.com/jack__13755`, 
            mediaType: 2
            }}})
             
            
            break

case 'menudowl':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: app(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menuadm":
audiocriador = await fs.readFileSync("./laura/audio/menuadm.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
await laura.sendMessage(from, { react: { text: `👻`, key: info.key }})
templateMassage = {
image: {url:"./laura/image/menu.jpg",
quoted: info},
caption: menuadm(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
laura.sendMessage(from, templateMassage)
break

case 'animes':
await laura.sendMessage(from, { react: { text: `🤭`, key: info.key }})
await laura.sendMessage(from, { react: { text: `😥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💙`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: animes(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'sounds':
await laura.sendMessage(from, { react: { text: `🎶`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔊`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/tabela.jpg'),
caption: sound(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menu18":
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/menu18.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
templateMassage = {
image: {url:"./laura/image/menu.jpg",
quoted: info},
caption: menu18(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
laura.sendMessage(from, templateMassage)
break
case 'morte':   
morrer1 = `${Math.floor(Math.random() * 31)}`
morrer2 = `${Math.floor(Math.random() * 9)}`
var ano = ("2")
ano1 = `${Math.floor(Math.random() * 300)}`
morrer = `${morrer1}.${morrer2}.${ano}${ano1}`
pedrozz = `╭┉┈┈┈─━┅┄┅━┅┄┅━──━┅┄┅━┅┄┅━┈┈┈┈•

ི⋮ ྀ${emoji}⏝ ི⋮ ྀDATA DA SUA MORTEི⋮ ྀ⏝${emoji}⋮ ྀ
        ╔━━━━━━░🌟░━━━━━━╗
       ➤➤✨⃟HELLO:${pushname}ͦ⃟✨
       ➤➤✨⃟DATA:${morrer1}/0${morrer2}/${ano}${ano1}ͦ⃟✨
       ➤➤✨⃟Sinto muito ${pushname}ͦ⃟✨
        ╚━━━━━━░🌟░━━━━━━╝
     ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ

    •┈┈┈━┅┄┅━┅┄┅━───┈━┅┄┅━┅┄┅━┈┈┈┅╯
           ꧁⃟✨By pedrozz✨⃟꧂`
reply(pedrozz)

break



case 'efeitos':
await laura.sendMessage(from, { react: { text: `👻`, key: info.key }})
await laura.sendMessage(from, { react: { text: `👽`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🍪`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/tabela.jpg'),
caption: efeitos(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'musicas':
await laura.sendMessage(from, { react: { text: `🎶`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💥`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔊`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/tabela.jpg'),
caption: musica(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'tabela':
await laura.sendMessage(from, { react: { text: `👌`, key: info.key}})
laura.sendMessage(from, {image: fs.readFileSync('./laura/image/tabela.jpg'), caption: tabela(comando, prefix, pushname),gifPlayback: true},
{queted: info})

break

case 'onlyfans':
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
laura.sendMessage(from,
{image: fs.readFileSync('./laura/image/menu.jpg'),
caption: only(comando, prefix, pushname),
gifPlayback: true},
{quoted: info})
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/laura1.webp'), caption: "Legenda" })

break
//⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘


case 'boss':
await laura.sendMessage(from, { react: { text: `☠️`, key: info.key}})
laura.sendMessage(from, {image: fs.readFileSync('./laura/image/tabela.jpg'), caption: boss(comando, prefix, pushname),gifPlayback: true},
{queted: info})

break

case 'google': {
            if (!q) return reply(`Examplo : ${prefix}Google bot de WhatsApp`)
            reply("aguarde um momento ")
            let google = require('google-it')
            google({ 'query': q }).then(res => {
              let teks = `Google Pesquisa \n\n`
              for (let g of res) {
                teks += `⭔ *Titulo* : ${g.title}\n`
                teks += `⭔ *Descrição* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
              }
              reply(teks)
            })
          }
            break
            
            

case 'reset':
laura.sendMessage(from,{text: `A ${botName} sera reiniciado em segundos, então espere um pouquinho ai ${pushname}`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case 'calunia':
teks = args.join(" ");
var alvoNumber;
if (info.message.extendedTextMessage) {
  alvoNumber = info.message.extendedTextMessage.contextInfo.participant;
} else if (info.message.extendedTextMessage == null){
if (!teks) return enviar(`Marque a mensagem de alguém ou digite o seguinte comando:\n${prefix + comando} eu sou gay/eu já sabia/18996998971\n\n*OBS:* o número tem que está no mesmo formato do whatsapp`);
var numbAlv = teks.split("/")[2];
numbAlvs = numbAlv.split("+55").join("").split("-").join("").split(" ").join("");
alvoNumber = "+55" + numbAlvs + "@s.whatsapp.net";
}
var alvo = teks.split("/")[0];
var bot = teks.split("/")[1];
const annônimo = {
key: { fromMe: false, participant: alvoNumber},
message: { 
"extendedTextMessage": {
"text": alvo
}
} 
};
laura.sendMessage(from, {text: bot}, {quoted: annônimo});
break


case 'comandos':
enviar(`existe um total de ${comandos} comandos\n\n
╔━⊱ *「🌹」*━━✕
┃ §§ ${botName} §§∆•
┗━━━━━━━━━━━━✕`)
break
case 'j':
await laura.sendMessage(from, { react: { text: `☢️`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🔰`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🤑`, key: info.key }})
await laura.sendMessage(from, { react: { text: `🥴`, key: info.key }})
await laura.sendMessage(from, { react: { text: `💎`, key: info.key }})
enviar(` test `)
break
break


case 'report':
case 'bug':
{
reagir(`💦`)
await esperar(1000)
reagir(`⚡`)
await esperar(1000)
reagir(`🌟`)
await esperar(1000)
reagir(`✨`)
await esperar(1000)
reagir(`💥`)
await esperar(1000)
reagir(`✔️`)
await esperar(1000)
}
if (!q) return escrever('Exemplo: ∆report bug no comando de desenhos, por favor fale somente o nome do comando que esta com bug, obrigado😘.')
audiocriador = await fs.readFileSync("./laura/audio/Bugada.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
reply(`${pushname} Obrigado pelo feedback 😘, o bug foi reportado ao meu criador...\n\n
<😠>bugs falsos não serão respondidos
𒆕𒄬𒆕𒄬  ⟬𖤐⁩᭄ꦿPedrozz agradeçe⛤⃗͜ᬏ᭄  ⟭𒆕𒄬𒆕𒄬`)
let templateMesssage = {
image: {url: './laura/image/bug.jpg',
quoted: info},
caption: `💥𝗨𝗺 𝗕𝘂𝗴💥\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'pedrozz'
}
laura.sendMessage("556199317165@s.whatsapp.net",templateMesssage)
break
//case download
//by pedrozz
case 'gta':
enviar(`
APK+OBB: https://www.mediafire.com/file_premium/s2jya7uspaqs89w/GTA-San-Andreas-Mod-Cleo-v2.10_TopJogos.zip/file`)
break

case 'minecraft':
enviar(`https://www.mediafire.com/file/xbn58e7hjek9jlq/MCPE_1.18.12_By-NEV3X.apk/file`)
break

case 'nba':
enviar(`https://www.mediafire.com/file/1c3eiw6tubwp5jn/NBA+App_v12.0407.apk/file`)
break

case 'bully':
enviar(`https://www.mediafire.com/file/32g7l9kst7wdkr2/bully_anniversary_edition.apk/file`)
break

case 'darkflix':
enviar(`https://www.mediafire.com/file/l2743qj95c07mi3/Darkflix_v1.4.9_apkpure.com.apk/file`)
break

case 'seguidorista':
enviar(`https://www.mediafire.com/file/x1vwyw9x9k8ltzi/Followers_Pro_for_Instagram_v1.0.0.apk/file`)
break

case 'anime':
enviar(`https://www.mediafire.com/file/q6rxxb3zxap2kko/X-Animes+1.15.24+MOD_TekMods.com.apk/file`)
break

case 'porhubmod':
enviar(`http://www.mediafire.com/file/hcez1zkva44poph/phb-meljedroid.apk/file`)
break

case 'kinemasterpro':
enviar(`https://www.mediafire.com/file/iynbbdp9gf63rxs/KineMaster_4.16.4+-+bydortontutoriais.apk/file`)
break

case 'pixellabmod':
enviar(`http://www.mediafire.com/file/pfe8lhc72n11z72/Pixellab+New+Mods+Aditya+Project.zip/file`)
break
//fimdos download 
//menu animes
//cases by pedrozz
case '7pecados':
enviar(`

► NANATSU NO TAZAI

temporada 1 https://animesonlinehd.vip/os-sete-pecados-capitais-dublado/
temporada 2 https://animesonlinehd.vip/nanatsu-no-taizai-sete-pecados-capitais-2-temporada-dublado/
https://animesonlinehd.vip/nanatsu-no-taizai-fundo-no-shinpan-dublado/
https://animesonlinehd.vip/nanatsu-no-taizai-kamigami-no-gekirin-dublado/
`)
break
case 'naruto':
enviar(
`► NARUTO

https://animesonlinehd.vip/naruto/ (legendado)
►https://www.animescomix.com/anime/60/
`)
break
case 'dragonball':
enviar(
`► DRAGON BALL SUPER

https://animesonlinehd.vip/dragon-ball-super-dublado-onlin/
https://animesmania.com/anime/dragon-ball-super-dublado
`)
break
case 'demonslayer':
enviar(`
► DEMON SLAYER

https://animesonlinehd.vip/kimetsu-no-yaiba-mugen-resshahen-dublado/
►https://subanimes.biz/episodio/22980/
https://animesonlinehd.vip/kimetsu-no-yaiba-yuukakuhen-dublado/
`)
break
//fim dos animes

case 'alugar': {
  laura.sendMessage(from, {react: {text: `👻`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🍪`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `👽`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🔞`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🥺`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🌹`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `💮`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `☠️`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `👾`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `💙`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `💦`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🙄`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `✨`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🥳`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `🔹`, key: info.key}})
  esperar(2000)
  laura.sendMessage(from, {react: {text: `✔️`, key: info.key}})
  esperar(2000)
JsonW = [
"https://telegra.ph/file/aa1b07a2be9ac2ef8bcd4.jpg",
"https://telegra.ph/file/2a2921a3758f4136781c5.jpg",
"https://telegra.ph/file/5479f90c4c05aefe92a91.jpg",
"https://telegra.ph/file/f923c5ac13dbf68585e6d.jpg",
"https://telegra.ph/file/fb77a528099fe1a69206b.jpg"

]
random = JsonW[Math.floor(Math.random() * JsonW.length)]
chama_imagem = {
image: {url: random},
caption: `*𝕆𝕝á ${pushname}🤗*\n\n*𝔼𝕤𝕥á 𝕡𝕣𝕠𝕔𝕦𝕣𝕒𝕟𝕕𝕠 𝕦𝕞 𝕓𝕠𝕥 𝕔𝕠𝕞 𝕗𝕦𝕟çõ𝕖𝕤 𝕖𝕩𝕔𝕝𝕦𝕤𝕚𝕧𝕒𝕤?😝*\n\n*𝔸𝕕𝕚𝕢𝕦𝕚𝕣𝕒 𝕒𝕘𝕠𝕣𝕒 𝕞𝕖𝕤𝕞𝕠 𝕒 ${botName} 𝕟𝕠 𝕤𝕖𝕦 𝕘𝕣𝕦𝕡𝕠 𝕡𝕖𝕝𝕠 𝕡𝕣𝕖ç𝕠 𝕢𝕦𝕖 𝕔𝕒𝕓𝕖 𝕟𝕠 𝕤𝕖𝕦 𝕓𝕠𝕝𝕤𝕠💲*\n\n*𝕊𝕖𝕞𝕒𝕟𝕒𝕝: 15$*\n\n*𝕄𝕖𝕟𝕤𝕒𝕝: 50$*\n\n*TRIMESTRAL: 150*\n\n*𝔽𝕒𝕝𝕖 𝕒𝕘𝕠𝕣𝕒 𝕞𝕖𝕤𝕞𝕠 𝕔𝕠𝕞  𝕞𝕖𝕦 𝕕𝕠𝕟𝕠*\n\n*${donoName}=> 𝕎𝕒.𝕞𝕖/${donoNumher}*`
}
laura.sendMessage(from, chama_imagem)
} 
break              
case 'aluga':
enviar(`╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ         🤑𝐀𝐥𝐮𝐠𝐚𝐫🤑                  ║
╚┉┉═══『${botName}』═══┉┉╝    
🤑R$ 15,00 semanal
🤑R$ 45,00 mensal
??R$ 120,00 trimestral
╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ     🔥𝐂𝐎𝐌𝐏𝐑𝐀𝐑🔥              ║
╚┉┉═══『${botName}』═══┉┉╝    
🔥R$ 70,00 ${botName}
╔┉┉═══『${botName}』═══┉┉╗    
║    ㅤ     ✅𝐂𝐎𝐌𝐏𝐑𝐀𝐑✅              ║
╚┉┉═══『${botName}』═══┉┉╝    
✅Sistemas
✅jogos
✅comandos

_Entre em contato com  Pedrozz  para obter qualquer produto_
😎: wa.me/556199317165
`)
break  

case 'an':
reply(`░░░░░░░░░░░░░░░░░░░░░
░░░▄█▀█▄█▀█▄▄▄░░░░░░░
░░█▒░░▀█▄▄░░░▀▀█░░░░░
░█▒░░░░░▒░░░░▒▄░▀▀█▄░
░█▒░░░░█▒░░▄▀░░░▒░░█░
░█▒░░░█▒░░█▀▒░░█▀░░▀█
░█▒░░░█▒░░█▒░░█▓░░░▓█
▄▀█▓▓░█▒░▓█▓░░█▓░░▓▄█
█▒▒████▄▓▓█▓░░█▓░░▄█░
█▒▒░░░░░▀█▄▀░▄▀▓▄█▀░░
█▒▓▓▓█▀▀▄▀█▄▄▀▄▄▀░░░░
░▀▄▄▄█▄▄▀░░░░░░░░░░░░`)

break

//===========(CMD DE FIGURINHAS)=========\\
case 'figurinhas':
if (!q) return reply("Insira a qnd de figu que deja que eu envie")
if (!Number(args[0]) || Number(q.trim()) > 100) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 100..")
reply('Ja estarei te enviando😘')
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
laura.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
figuss()
}
break


case 'steve':
reply(`🏿🏿🏿🏿🏿🏿🏿🏿
🏿🏿🏿🏿🏿🏿🏿🏿
🏿🏿🏽🏽🏽🏽🏿🏿
🏽🏽🏽🏽🏽🏽🏽🏽
🏽⬜⬛🏽🏽⬛⬜🏽
🏽🏽🏽🏿🏿🏽🏽🏽
🏽🏽🏿🏽🏽🏿🏽🏽
🏽🏽🏿🏿🏿🏿🏽🏽`)
break
case 'test1':
if(!isPremium) return reply(msg.premium)
enviar(`oi usuário vip`)
break
case 'desenhos':

audiocriador = await fs.readFileSync("./laura/audio/desenhos.mp3")
await delay(5000)
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
await laura.sendMessage(from, { react: { text: `🥰`, key: info.key }})
reply(`
 ╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
╰╮女⃟⃟女 INFORMAÇÕES DO BOT ❈⃟き
╭┤● ⋟ ${emoji}Bot: ${botName}
┃│● ⋟ ${emoji}nick: ${pushName}
┃│● ⋟ ${emoji}Versão: 1.0.0
┃│● ⋟ ${emoji}Web:〘chorome〙
┃│● ⋟ ${emoji}hora: ${hora}
┃│● ⋟ ${emoji}data: ${data}
┃│● ⋟ ${emoji}criador: ${criador}
┃│● ⋟ ${emoji}totalcmd: ${comandos}
┃╰▬▭ ⪨
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨
╭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪩
│⏤͟͟͞͞👾${prefix}mario
│⏤͟͟͞͞👾${prefix}heli
│⏤͟͟͞͞👾${prefix}android
│⏤͟͟͞͞👾${prefix}an
│⏤͟͟͞͞👾${prefix}sexy
│⏤͟͟͞͞👾${prefix}love
│⏤͟͟͞͞👾${prefix}love2
│⏤͟͟͞͞👾${prefix}love3
│⏤͟͟͞͞👾${prefix}love4
│⏤͟͟͞͞👾${prefix}love5
│⏤͟͟͞͞👾${prefix}love6
│⏤͟͟͞͞👾${prefix}steve
│⏤͟͟͞͞👾${prefix}colaçao
│⏤͟͟͞͞👾${prefix}colaçao2
│⏤͟͟͞͞👾${prefix}cueio
│⏤͟͟͞͞👾${prefix}cat
│⏤͟͟͞͞👾${prefix}cat2
│⏤͟͟͞͞👾${prefix}777
│⏤͟͟͞͞👾${prefix}espadafds
│⏤͟͟͞͞👾${prefix}minhocal
│⏤͟͟͞͞👾${prefix}caminhao
│⏤͟͟͞͞👾${prefix}cat
│⏤͟͟͞͞👾${prefix}homer
│⏤͟͟͞͞👾${prefix}playboy
│⏤͟͟͞͞👾${prefix}pig
│⏤͟͟͞͞👾${prefix}hack
│⏤͟͟͞͞👾${prefix}violao
│⏤͟͟͞͞👾${prefix}lvm
│⏤͟͟͞͞👾${prefix}sherek
│⏤͟͟͞͞👾${prefix}predio
│⏤͟͟͞͞👾${prefix}casa
│⏤͟͟͞͞👾${prefix}felizntl
│⏤͟͟͞͞👾${prefix}boneconeve
│⏤͟͟͞͞👾${prefix}noel
│⏤͟͟͞͞👾${prefix}noel2
│⏤͟͟͞͞👾${prefix}arvorentl
│⏤͟͟͞͞👾${prefix}boneconeve2
│⏤͟͟͞͞👾${prefix}esqueleto
│⏤͟͟͞͞👾${prefix}loliq
│⏤͟͟͞͞👾${prefix}girl
│⏤͟͟͞͞👾${prefix}morena
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
│⏤͟͟͞͞👾${prefix}add
╰▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭ ⪨`)
break
case 'loliq':
enviar(`⠄⠄⢰⣧⣼⣯⠄⣸⣠⣶⣶⣦⣾⠄⠄⠄⠄⡀⠄⢀⣿⣿⠄⠄⠄⢸⡇⠄⠄ ⠄⠄⠄⣾⣿⠿⠿⠶⠿⢿⣿⣿⣿⣿⣦⣤⣄⢀⡅⢠⣾⣛⡉⠄⠄⠄⠸⢀⣿⠄ ⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄ ⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄ ⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰ ⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗ ⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄ ⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄ ⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄ ⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄⠄ ⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄⠄ ⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄⠄⠄⠄ ⠄⠄⠄⠄⠄⠄⠄⠉⠻⣿⣿⣾⣦⡙⠻⣷⣾⣿⠃⠿⠋⠁⠄⠄⠄⠄⠄⢀⣠⣴ ⣿⣿⣿⣶⣶⣮⣥⣒⠲⢮⣝⡿⣿⣿⡆⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⣠⣴⣿⣿`)
break
case 'girl':
enviar(` … … … … … … … … ,,—-~~”’¯¯¯¯¯¯”’~~—-,,
… … … … … …,,-~”¯::::::::::::::::::::::::::::::::::¯”’~,,
… … … … ..,,~”::::::::::::::::::::::::::::::::::::::::::::::::::::”~,,
… … … ..,,-“:::::::::::::::/::::::/::::::::::::::::\::::::::::::\:::::::::\
… … …,-“:::::,-“:::/:::::/::::::/:|::::::::::::::::\::::::::::::\:::::::::\
… … .,-“:::::::/:::::|:::::|:::::::|:|:::::::|:::::::\\:::::::::::|:|:::::\::\
… … /::::::/:::|::::::|:::::|::|::::\:\:::::/\::::/:::||:::::::::|:/::::::|:::|
… …/::::::|:::::\::::::\::::\::\::::/\:\,::/::\::/::::|:|:::::::/\/::::::/::::|
… ../::::::/::::::’\::::::\-,:::\/\::/: :\-,”/ : :\/:\:::/: |:::::/::/::::::|::::/
… ./::::::|:::::::::\::::::\|::/: \/: : : \/: : : : : \,/: \/::_/\//:\:::::/:::/
… /::::::/::/:::::::|::/,__/:/: :__/ . .: : : : : : :\__. \/: \:::::/::/:::/
… |:::|::::::::::::/::/::::/;/ ;/ ,. .,\: : : : : : : / ,._., \ /::::::|::/:|
…|:::/:::/::::::::/::/|:::|.\: |.|❤||; : : : : : :|.|.❤||;|::|:::\/:/
…|::|:::|::::::::/:::\|:::’\,|: \.”‘” /: : : : : : : :’\.” ‘”/ : \: |:::|::\
…|::|:::|:::::::/:::::|::::|/: : “¯’: : : : : : : : : :”¯” : : :\ : :/::::’\
…|::|:::|::::::/:::::/:::::’\: : : : : : : : : : : : : : :’: : : : 😐 :/::::::|
… \:|:::|:::::|::::::|::::::|,: : : : : : :~,___,~: : : : : :,-“:::::::|::|
… .’\|::|:::::|::::::||::::::\’~,: : : : : : ‘~–~’: : : : ,,~”\:::::::::|:/
… …’\:|:::::|::::::/.|::::::|: : “~,: : : : : : : : ,,-~,”::::::’\::::::::/
… … .\\:::::|”~,/-,|:::::::|: : : : ¯”~,-,,,-~”:::,,-‘\::::::::\-,,_::|/
… … ..’,\,::|~–‘-~\:::::::|: : : : : : |::|,,-~”¯..__\::::::::\… .’|
… ..,~”’: : \|: : : : : \::::::|: : : : : : |¯”’~~”~,”,: : \:::::::|.. /
..,-“: : : : : :|: : : : : :\::::::|: : : : : : \: : : : : : “~’-,:\::::::|\,
..|: : : : : : : |: : : : : : |::::|,\,: : : : : : : : : : : : : :”-,-\::::|: \
..| : : : : : : : : : : : : : |::::|:’-,\: : : : : : : : : : : : : : :”-‘\,|: 😐
…\ : : : : : : : : : :’\: : :\:::|: : ‘\’\: : : : :~,,: : : : : : : : : “~-‘,_
… \: : : : : : : : : : :\: /:|:/: : : :’,-‘-,_,: : : “-,: : : : : : : : :,/”’-,
… .\: : : : : : : : : : :\|: |/: : : ,-“….”-,:\: : : : ‘\: : : : : : :,/…….”-,
… …\: : : : : : : : : : \: |: : :/………..\*/ : : : :|: : : : : :,-“………..’|
… … .\ : : : : : : : : : ‘\’: : /…………..\/ : : : : /: : : : : :,-“…………./
… … …\ : : : : : : : : : ‘\:/……………..\: : :,/: : : : : /……………../
… … …..\ : : : : : : : : : \……………………\:,-“: : : : :,/…………/
… … … …\ : : : : : : : : : \,_………….._,”======’,_……….,-“\
… … … … \,: : : : : : : : : \: ¯”’~—~”¯: : : : : : : : : :¯”~~,’: :\
… … … … ..’\,: : : : : : : : : \: : : : : : : : : : : : : : : : : : : ‘|: : \
… … … … … .\, : : : : : : : : ‘\: : : : : : : : : : : : : : : : : : :|: : ‘\
… … … … … …\,: : : : : : : : :\ : : : : : : : : : : : : : : : : : |: : :\
… … … … … … ..\ : : : : : : : : \: : : : : : : : : : : : : : : : :|: : : :\
… … … … … … …\\,: : : : : : : :\, : : : : : : : : : : : : : : :/: : : : :\
… … … … … … … .\\ : : : : : : : :’\ : : : : : : : : : : : : : :|: : : : : ‘|
… … … … … … … ./:\: : : : : : : : :’\, : :;: : : : : :;: : : : |: : : : : 😐
… … … … … … … /: : \: : : : : : : : : ‘\,:;: : : : : :;: : : : |: : : : : 😐
… … … … … … …/: : : ‘\: : : : : : : : : :’\,: : : : : :; : : : :|: : : : : : |
… … … … … … ../: : : : :\: : : : : : : : : : :\, : : : ;: : : : : |: : : : : /: |
… … … … … … ,/: : : : : : :\: : : : : : : : : : ‘\,:.. :: : : : : : |: : : :;:: |
… … … … … ..,-“: : : : : : : :“-,: : : : : : : : : : \*, : : : : : 😐 : : : :\: |
… … … … … ,/ : : : : : : : : : :”-, : : : : : : : : : :\: : : : : /: : : : : : /
… … … … ..,/ : : : : : : : : : : : : :”-, : : : : : : : : :’\: : : 😐 : : : : : ,/
… … … … ,/ : : : : : : : : : : : : : : : ;-,: : : : : : : : :’\: : |: : : : : : /
… … … …/: : : : : : : : : : : : : : : : :;: “-,: : : : : : : : ‘\: |: : : : : /
… … … ../: : : : : : : : : : : : : : : : : : : : :“-,: : : : : : : \,|: : : : :/
… … … ,/: : : : : : : : : : : : : : : : : : : : : : :“-,: : : : : : :\: : : : /
… … …/-,-,”,,-,~-,,_: : : : : : : : : : : : : : : : : “-,: : : : : :’\: : :’|
… … …|’,/,/:||:\,\: : : “’~,,~~—,,,_: : : : : : : : ‘\: : : : : :\,: 😐
… … ..|: :”: ||: :”: : : : : : :”-,…….. ¯¯””~~~-~.|\: : : : : : \:|
… … ..|: : : ||: : : : : : : : : : :”-,…………………..|: : : : : : : \|
… … ..| : : : : : : : : : : : : : : : :”-,…………………\: : : : : : : :\,
… … ..| : : : : : : : : : : : : : : : :”-,\………………..“\: : : : : : : : ‘\
… … ..| : : : : : : : : : : : : : : : : : :”-\……………,/: : :\: : : : : : :\
… … ..| : : : : : : : : : : : : : : : : : : : \,………..,/: : : : ‘\: : : : : : ||
… … ..| : : : : : : : : : : : : : : : : : : : : \…….,/: : : : ,-~/: : ,: |: /:|
… … ..’|: : : : : : : : : : : : : : : : : : : : : \~”¯: : : : : :|: ::|: :/::/:,/
… … …|: : : : : : : : : : : : : : : : : : : : : |: : : : : : : :”-,,_/_,/-~”:|
… … …|: : : : : : : : : : : : : : : : : : : : : |: : : : : : : : : : : : : : : 😐
… … … |: : : : : : : : : : : : : : : : : : : : : |: : : : : : : : : : : : : : : |
… … … | : : : : : : : : : : : : : : : : : : : : :|: : : : : : : : : : : : : : :/`)
break
case 'morena':
enviar(`ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n
`)
break

case 'predio':
reply(`████████
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█ ＼＼
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█ヽ○ノ
█⬛⬛⬛⬛⬛█ /
█⬛⬛⬛⬛⬛█ノ)
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█
█⬛⬛⬛⬛⬛█`)
break

case 'casa':
reply(`_.█████████████████ 
_ ██████████████████ 
████████████████████ 
█████████████████████ 
_█_________▄▄▄▄_ ▄▄▄▄_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▐▓▓▌_▐▓▓▌_█ 
_█__█████_▀▀▀▀_ ▀▀▀▀ █✿ ✿ 
_█__█████_____________ █(\\|/) 
_____________██ _____________██ 
_____________█ 
______________█ 
_______________██ 
_________________██ 
___________________██ 
__________________██ 
_________________███ 
______________████ 
___________█████ 
_________██████ 
_______██████`)
break

case 'felizntl':
reply(`Feliz★* 。 • ˚ ˚ ˛ ˚ ˛ •
•。★Natal★ 。* 。
° 。 ° ˛˚˛ * _Π_____*。*˚
˚ ˛ •˛•˚ */______/~＼。˚ ˚ ˛
˚ ˛ •˛• ˚ ｜田田 ｜門｜ ˚
um feliz ano novo`)
break

case 'boneconeve':
reply(`----//---------█████
\\--\/--//----██████
-\\-▌-//---████████
--\\▌//----(▓)--------(▓)
---\▌/----(▓)-◒►◒--(▓)
----▌------(▓)-- = --(▓)
----▌--------(▓)---(▓)
----▌-----\(▓)-- ✺ --(▓)/
----▌----(▓)---- ✺ ----(▓)
----▌---(▓)----- ✺ -----(▓)
----▌---(▓)----- ✺ -----(▓)
----▌----(▓)---- ✺ ----(▓)
-----------(▓)(▓)▓(▓)(▓)`)
break

case 'noel':
reply(`▌░░░░██████████████████░░░▐
▌░░░█████████████████████░▐
▌░█████████████████████████
█▐█████▐░░░░░░░░░░░░░░░░░░█
▌█████▌█░░░░░░░░░░░░░░░░░░█
▐█████▌█▀▀▀█████▀▀██████▀▀█
▐█████▐█░▌▌░░░░░▌▐░░░░░▐▐░█
▌█████▐█▌░▌▐▌█▐▐▌▐▌█▐▐▐─▐░█
▌█████▐█░▌▌▀▌██▐▌▐▌██▐▀─▐░█
▌█████▐█▌░▌──────▐──────▐░█
▌▐█▄█▌█░░░▌───▀▄▄▄▄▀───▐▐░█
█▌███▌█░▌░▌▌─▐░░░░░░──▐▐░░█
█▀░░░░▀█░░▌▐▐░▐▄▄▄▄▌░─▌▐▐░█
▌░░░░░░█▐░░▌░░▌▀▀▀▀─░░─░░░█
█░░░░░▐▄░▌░░▐░▐▀▀▀▀░░░▐░▐░█
██▄▄▄▄██▐░▌░░▐░░▐░░░░▐░░░▄█
████████▄░░▐░░▐░░▐░▐░░░▐▄██
██████████▄▄▄▄▄▄▄▄▄▄▄▄▄████`)
break

case 'noel2':
reply(`__________(█)
_______██████
_____ ████████
____███████████
___ (░░░░░░░)░░░)
___(░(░█░░█░)░░░)
__ (░░(░░●░░░)░░░)
__ (░░░░◡░░)░░░░)
_██(░░░░░░░░░░)██
_███(░░░░░░░░░)███
████ ██(░░░)██ ████
████ █████████ ███
████ ████░████ ███
(░░)_ ▓▓▓▓▌▓▐▓▓▓_(░░)
(██) ███████████ (██)
_____█████░█████_▓▓▓\
_____█████-,█████▓▓▓▓▓)
_____█████-,█████▓▓▓▓▓)
___(░░░░░░)(░░░░░) ▓▓▓▓)
______(███)_(███)▓▓▓▓▓▓)
____ (████)_(████)▓▓▓▓▓)`)
break

case 'arvorentl':
reply(` ░░░░░░░░░░ ★
░░░░░░░░░░██
░░░░░░░░░████
░░░░░░░██▒▒▒▒██
░░░░░██▒▒▒▒▒▒▒▒██
░░░░░░░██▒▒▒▒██
░░░░░░░░██████
░░░░░░░███▓▓███
░░░░░░░░█▓▓▓▓█
░░░░░░░█▓▓▓▓▓▓█
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░████▓▓▓▓▓▓▓▓████
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░███████▓▓▓▓▓▓███████
░░░░░░█▓▓▓▓▓▓▓▓█
░░░░░█▓▓▓▓▓▓▓▓▓▓█
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░███▓▓▓▓▓▓▓▓▓▓▓▓███
░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
███████▓▓▓▓▓▓▓▓███████
░░░░█▓▓▓▓▓▓▓▓▓▓▓▓█
░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
░██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
██████████████████████
░░░░░░░░██████`)
break

case 'boneconeve2':
reply(`__________ █████ 
_______█████████ 
________████████ 
_________ ███████ 
__________████████ 
______██████████████ 
_____███▒▒░░░░░░░░▒ 
_______▒░░░░░ ⓤ░░ⓤ░▒ 
_______▒░░░░░░░░ >░░ ▒ 
_______██▒░░░░░·︾·░░▒ 
_______████▒░░░░░░░▒ 
______▒▒███████████▒▒ 
____▒░░░░░▒▒▒▒███░░░▒ 
___▒░░░▒░░░░░░████░░ ▒ 
___▒░░░░▒░░░░░█████░░▒ 
___▒░░░░░▒░░░░███████░▒ 
____▒░░░░▒░░░░██████▒▒ 
____▒#▒▒▒▒▒░##░██████ 
__▒#▒░░░░░░░░░░░░░▒░▒ 
_▒░░░░░░░░░░░░░░Ѻ░░░▒ 
▒░░░░░░░░░░░░░░░░░░░ ▒ 
▒░░░░░░░░░░░░░░░Ѻ░░░ ▒ 
▒░░░░░░░░░░░░░░░░░░░ ▒ 
#▒░░░░░░░░░░░░░Ѻ░░░░▒ 
##▒░░░░░░░░░░░░░░░░##`)
break

case 'esqueleto':
reply(`░░░░░░░░░░░░▄▄▄▄░░░░
░░░░░░▄▄▄░░▄████▄░░░
░░░░░▐▀█▀▌░░░░░▀█░░░
░░░░░▐█▄█▌░░░░░░▀█░░
░░░░░░▀▄▀░░░▄▄▄▄▀▀▀░
░░░░▄▄▄██▀▀▀▀░░░░░░░
░░░█▀▄▄▄█░▀▀░░░░░░░░
░░░▌░▄▄▄▐▌▀▀▀░░░░░░░
▄░▐░░░▄▄░█░▀▀ ░░░░░░
▀█▌░░░▄░▀█▀░▀ ░░░░░░
░░░░░░░▄▄▐▌▄▄░░░░░░░
░░░░░░░▀███▀█░▄░░░░░
░░░░░░▐▌▀▄▀▄▀▐▄░░░░░
░░░░░░▐▀░░░░░░▐▌░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░░█░░░░░░░░█░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░░█░░░░░░░░█░░░░
░░░░░▄▄█▄ ░░░░░▄█▄▄░`)
break

case 'violao':
replay(`░▄▀▀▀▀▄░░▄▄
█░░░░░░▀▀░░█░░░░░░▄░▄
█░║░░░░██░████████████
█░░░░░░▄▄░░█░░░░░░▀░▀
░▀▄▄▄▄▀░░▀▀`)
break
case 'lvm':
reply(`╔╗╔╗╔═╦╦╦═╗╔══╦╦╦═╦╦═╗
║║║║║║║║║╚╣║║║║║║╚╣║╔╝
║║║╚╣║║║║╔╣║║║║║╠╗║║╚╗
╚╝╚═╩═╩═╩═╝╚╩╩╩═╩═╩╩═╝

I LOVE MUSIC`)
break
case 'sherek':
reply(`⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉`)
break
case 'hack':
reply(`███████▓█████▓▓╬╬╬╬╬╬╬╬▓███▓╬╬╬╬╬╬╬▓╬╬▓█ 
████▓▓▓▓╬╬▓█████╬╬╬╬╬╬███▓╬╬╬╬╬╬╬╬╬╬╬╬╬█ 
███▓▓▓▓╬╬╬╬╬╬▓██╬╬╬╬╬╬▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬╬╬╬▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓███████▓▓███▓╬╬╬╬╬╬▓███████▓╬╬╬╬▓█ 
████████████████▓█▓╬╬╬╬╬▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬█ 
███▓▓▓▓▓▓▓╬╬▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
████▓▓▓╬╬╬╬▓▓▓▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
███▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓▓█▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█ 
█████▓▓▓▓▓▓▓██▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
█████▓▓▓▓▓████▓▓▓█▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓█▓▓▓▓██▓▓▓▓██╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬██ 
████▓▓███▓▓▓▓▓▓▓██▓╬╬╬╬╬╬╬╬╬╬╬╬█▓╬▓╬╬▓██ 
█████▓███▓▓▓▓▓▓▓▓████▓▓╬╬╬╬╬╬╬█▓╬╬╬╬╬▓██ 
█████▓▓█▓███▓▓▓████╬▓█▓▓╬╬╬▓▓█▓╬╬╬╬╬╬███ 
██████▓██▓███████▓╬╬╬▓▓╬▓▓██▓╬╬╬╬╬╬╬▓███ 
███████▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬████ 
███████▓▓██▓▓▓▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓████ 
████████▓▓▓█████▓▓╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬▓█████ 
█████████▓▓▓█▓▓▓▓▓███▓╬╬╬╬╬╬╬╬╬╬╬▓██████ 
██████████▓▓▓█▓▓▓╬▓██╬╬╬╬╬╬╬╬╬╬╬▓███████ 
███████████▓▓█▓▓▓▓███▓╬╬╬╬╬╬╬╬╬▓████████ 
██████████████▓▓▓███▓▓╬╬╬╬╬╬╬╬██████████ 
███████████████▓▓▓██▓▓╬╬╬╬╬╬▓███████████`)
break
case 'homer':
reply(`▓▓▓▓
▒▒▒▓▓
▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓▓▓
▒▓▓▓▓▓▓░░░▓
▒▓░░░░▓░░░░▓
▓░░░░░░▓░▓░▓
▓░░░░░░▓░░░▓
▓░░▓░░░▓▓▓▓
▒▓░░░░▓▒▒▒▒▓
▒▒▓▓▓▓▒▒▒▒▒▓
▒▒▒▒▒▒▒▒▓▓▓▓
▒▒▒▒▒▓▓▓▒▒▒▒▓
▒▒▒▒▓▒▒▒▒▒▒▒▒▓
▒▒▒▓▒▒▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▓▓▓▓▓▓▓▓▓
▒▓▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▓`)
break
case 'playboy':
reply(`..¶¶¶¶¶¶¶¶7………………………………$¶¶¶¶¶$
….¶¶¶¶¶¶¶¶¶¢…………………………¶¶¶¶¶¶¶$
….ø¶¶¶¶¶$¶¶¶¶……………………..¢¶¶¶¶¶¶¶$
……¶¶¶¶¶¶¶¶¶¶¶¶………………….¶¶¶¶¶¶¶¶ø
……..¶¶¶¶¶¶¶¶¶¶¶¶¢…………….¶¶¶¶¶¶¶¶¶o
…………¶¶¶¶¶¶¶¶¶¶¶¶…………..¶¶¶¶¶¶¶¶¶
…………..¢¶¶¶¶¶¶¶¶¶¶¶…………¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶$¶¶¶¶¶7……o¶¶¶¶¶¶¶¶7
………………….7¶¶¶¶¶¶¶¶¶¶….o¶¶¶¶¶¶¶¶
……………………….o¶¶¶¶¶¶¶¶….¶¶¶¶¶¶¶
………………………………….$¶¶¶o¶¶¶¶¶¶
……………………….o¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶7
…………….¶¶¶ø……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………..¶¶¶¶……….¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶……¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………..¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
………………….7¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
…………………………o¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
……………………………¶¶¶¶¶¶¶¶¶¶¶¶¶1`)
break
case 'pigt':
reply(`▂╱▔▔╲╱▔▔▔▔╲╱▔▔╲▂
╲┈▔╲┊╭╮┈┈╭╮┊╱▔┈╱
┊▔╲╱▏┈╱▔▔╲┈▕╲╱▔┊
┊┊┊┃┈┈▏┃┃▕┈┈┃┊┊┊
┊┊┊▏╲┈╲▂▂╱┈╱▕┊┊┊ `)
break
case 'cat2':
reply(`░░░░░░░░░░░░░░░░░░░░░▄▀░░▌
░░░░░░░░░░░░░░░░░░░▄▀▐░░░▌
░░░░░░░░░░░░░░░░▄▀▀▒▐▒░░░▌
░░░░░▄▀▀▄░░░▄▄▀▀▒▒▒▒▌▒▒░░▌
░░░░▐▒░░░▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░▌▒░░░░▒▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄
░░░░▐▒░░░░░▒▒▒▒▒▒▒▒▒▌▒▐▒▒▒▒▒▀▄
░░░░▌▀▄░░▒▒▒▒▒▒▒▒▐▒▒▒▌▒▌▒▄▄▒▒▐
░░░▌▌▒▒▀▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒█▄█▌▒▒▌
░▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▄▀█▌▒▒▒▒▒▀▀▒▒▐░░░▄
▀▒▒▒▒▌▒▒▒▒▒▒▒▄▒▐███▌▄▒▒▒▒▒▒▒▄▀▀▀▀
▒▒▒▒▒▐▒▒▒▒▒▄▀▒▒▒▀▀▀▒▒▒▒▄█▀░░▒▌▀▀▄▄
▒▒▒▒▒▒█▒▄▄▀▒▒▒▒▒▒▒▒▒▒▒░░▐▒▀▄▀▄░░░░▀
▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▄▒▒▒▒▄▀▒▒▒▌░░▀▄
▒▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▒▀▀▀▀▒▒▒▄▀`)
break
case 'love6':
reply(`█───▄▀▀▀▀▄─▐█▌▐█▌▐██
█──▐▄▄────▌─█▌▐█─▐▌─
█──▐█▀█─▀─▌─█▌▐█─▐██
█──▐████▄▄▌─▐▌▐▌─▐▌─
███─▀████▀───██──▐██`)
break
case 'colaçao2':
reply(`_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
________░▒▓██
______░▒▓██
____░▒▓██`)
break


reply(`♥`)
break

case 'love4':
reply(`╔══╗♥
╚╗╔╝♥
╔╝╚╗♥
╚══╝♥
╔╗ ♥ღ♥ღ♥ღ♥
║║╔═╦╦╦╔╗
║╚╣║║║║╔╣
╚═╩═╩═╩═╝
╔╗╔╗♥
║║║║♥
║╚╝║♥
╚══╝♥

I LOVE U`)
break

case 'colaçao':
reply(`───▄▄▄▄▄▄─────▄▄▄▄▄▄
─▄█▓▓▓▓▓▓█▄─▄█▓▓▓▓▓▓█▄
▐█▓▓▒▒▒▒▒▓▓█▓▓▒▒▒▒▒▓▓█▌
█▓▓▒▒░╔╗╔═╦═╦═╦═╗░▒▒▓▓█
█▓▓▒▒░║╠╣╬╠╗║╔╣╩╣░▒▒▓▓█
▐█▓▓▒▒╚═╩═╝╚═╝╚═╝▒▒▓▓█▌
─▀█▓▓▒▒░░░░░░░░░▒▒▓▓█▀
───▀█▓▓▒▒░░░░░▒▒▓▓█▀
─────▀█▓▓▒▒░▒▒▓▓█▀
──────▀█▓▓▒▓▓█▀
────────▀█▓█▀
──────────▀

LOVE`)
break
case 'love3':
reply(`█▀███▀▀███▀▀███▀▀███▀▀███▀█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▒▒█▒▒▒▒▒███▒▒█▒▒▒█▒█████▒█
█▒▒█▒▒▒▒█▒▒▒█▒█▒▒▒█▒█▒▒▒▒▒█
█▒▒█▒▒▒▒█▒▒▒█▒▒█▒█▒▒█████▒█
█▒▒█▒▒▒▒█▒▒▒█▒▒█▒█▒▒█▒▒▒▒▒█
█▒▒████▒▒███▒▒▒▒█▒▒▒█████▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒█
█▒▒▒▒▒▒▒█──█▒████▒█──█▒▒▒▒█
█▒▒▒▒▒▒█──█─█────█─█──█▒▒▒█
█▒▒▒▒▒▒█─██───────███─█▒▒▒█
█▒▒▒▒▒▒█──────────────█▒▒▒█
█▒▒▒▒▒▒▒█────────────█▒▒▒▒█
█▒▒▒▒██▒▒█──██───██──█▒▒▒▒█
█▒▒▒█──█▒█──██───██──█▒▒▒▒█
█▒▒▒█──█▒█────███────█▒▒▒▒█
█▒▒▒█──█▒█───█───█──█▒▒▒▒▒█
█▒▒▒▒█──█─█───███──█▒▒▒▒▒▒█
█▒▒▒▒▒█────██────██▒▒▒▒▒▒▒█
█▒▒▒▒▒█──────████─██▒▒▒▒▒▒█
█▒▒▒▒▒▒█───────────█▒▒▒▒▒▒█
█▒▒▒▒▒▒▒███─────────█▒▒▒▒▒█
█▒▒▒▒▒▒▒▒▒█──────█───█▒▒▒▒█
█▒▒▒▒███▒▒█───────█───█▒▒▒█
█▒▒▒█──████─────████───█▒▒█
█▒▒▒█────█─────█────█─█▒▒▒█
█▒▒▒█─────█────█────██▒▒▒▒█
█▒▒▒█──────█───█──────█▒▒▒█
█▒▒▒▒█─────██████─────█▒▒▒█
█▒▒▒▒▒█──███▒▒▒▒█─────█▒▒▒█
█▒▒▒▒▒▒██▒▒▒▒▒▒▒▒█───█▒▒▒▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒███▒▒▒▒▒█
█▒▒▒▒█▒▒▒▒█▒▒███▒▒█▒▒▒█▒▒▒█
█▒▒▒▒▒█▒▒█▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒▒██▒▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒▒█▒▒▒▒█▒▒▒█▒█▒▒▒█▒▒▒█
█▒▒▒▒▒█▒▒▒▒▒▒███▒▒▒███▒▒▒▒█
█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
█▄▄█▄▄██▄▄█▄▄█▄▄█▄▄██▄▄█▄▄█`)
break

case 'cueio':
reply(`....▓▓▓▓
..▓▓......▓
..▓▓......▓▓..................▓▓▓▓
..▓▓......▓▓..............▓▓......▓▓▓▓
..▓▓....▓▓..............▓......▓▓......▓▓
....▓▓....▓............▓....▓▓....▓▓▓....▓▓
......▓▓....▓........▓....▓▓..........▓▓....▓
........▓▓..▓▓....▓▓..▓▓................▓▓
........▓▓......▓▓....▓▓
.......▓......................▓
.....▓.........................▓
....▓......^..........^......▓
....▓............❤............▓
....▓..........................▓
......▓..........ٮ..........▓
..........▓▓..........▓▓`)
break

case 'cat':
reply(`___██__________██
___█▒█________█▒█
__█▒███____███▒█
__█▒████████▒▒█
__█▒████▒▒█▒▒██
__████▒▒▒▒▒████
___█▒▒▒▒▒▒▒████
__█▒▒▒▒▒▒▒▒████______█
_██▒█▒▒▒▒▒█▒▒████__█▒█
_█▒█●█▒▒▒█●█▒▒███_█▒▒█
_█▒▒█▒▒▒▒▒█▒▒▒██_█▒▒█
__█▒▒▒=▲=▒▒▒▒███_██▒█
__██▒▒█♥█▒▒▒▒███__██▒█
____███▒▒▒▒████____█▒█
______██████________███
_______█▒▒████______██
_______█▒▒▒▒▒████__██
_______█▒██▒██████▒█
_______█▒███▒▒▒█████
_____█▒████▒▒▒▒████
______█▒███▒██████__`)
break

case 'espadafds':
reply(`-----------//¤¤\\
----------// ¤¤ \\
----------\\ ¤¤ //
---------- \\¤¤//
---------- (____)
-----------(____)
-----------(____)
-----------(____)
-\_____/\__/-----\__/\____/
--\_°_[-------------] _°_/
------\_°_¤ ---- ¤_°_/
-----------\ _°_ /
-----------|\_°_/|
-----------[|\_/|]
-----------[|[¤]|].   ESPADA DO FDS
-----------[|;¤;|]
-----------[;;¤;;]
----------;;;;¤]|]\
---------;;;;;¤]|]-\
--------;;;;;[¤]|]--\
-------;;;;;|[¤]|]---\
------;;;;;[|[¤]|]|---|
-----;;;;;[|[¤]|]|---|
------;;;;[|[¤]|/---/
-------;;;[|[¤]/---/
--------;;[|[¤/---/
---------;[|[/---/
----------[|/---/
-----------/---/
----------/---/|]
---------/---/]|];
--------/---/¤]|];;
-------|---|[¤]|];;;
-------|---|[¤]|];;;
--------\--|[¤]|];;
---------\-|[¤]|];
-----------\|[¤]|]
------------\\¤//
-------------\|/
--------------V`)
break 
case 'minhocal':
reply(`________(▓)
_______(▓)
______(▓)
______(▓▓))
_____((▓▓▓))
______(▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(▓▓▓▓▓▓▓))
_______(((▓▓▓▓▓))
________((▓▓▓▓))
________(▓▓▓▓)
_______(▓▓▓▓)
______(▓▓▓▓)
_____(▓▓▓▓)
____(▓▓▓▓)
___(▓▓▓▓)
__(▓▓▓▓)
_(▓▓▓▓)
.(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
.(▓▓▓▓)
_(▓▓▓▓)
__(▓▓▓▓)
___(▓▓▓▓)
____(▓▓▓▓)
_____(▓▓▓▓)
______(▓▓▓▓)
_______(▓▓▓▓)
________(▓▓▓▓)
_________(▓▓▓▓)
__________(▓▓▓▓)
___________(▓▓▓▓)
____________(▓▓▓▓)
_____________(▓▓▓▓)
______________(▓▓▓▓)
_______________(▓▓▓▓)
________________(▓▓▓▓)
_________________(▓▓▓▓)
_________________.(▓▓▓▓)
__________________(▓▓▓▓)
__________________(▓▓▓▓)
__________________(▓▓▓▓)
_________________.(▓▓▓▓)
_________________(▓▓▓▓)
________________(▓▓▓▓)
_______________(▓▓▓▓)
______________(▓▓▓▓)
_____________(▓▓▓▓)
____________(▓▓▓▓)
___________(▓▓▓▓)
__________(▓▓▓▓)
_________(▓▓▓▓)
________(▓▓▓▓)
_______(▓▓▓▓)
______(▓▓▓▓)
_____(▓▓▓▓)
____(▓▓▓▓)
___(▓▓▓▓)
__(▓▓▓▓)
_(▓▓▓▓)
.(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
(▓▓▓▓)
.(▓▓▓▓)
_(▓▓▓▓)
__(▓▓▓▓)
___(▓▓▓▓)
____(▓▓▓▓)
_____(▓▓▓▓)
______(▓▓▓▓)
______.(▓▓▓▓)
_______(▓▓▓▓)
_______(▓▓▓▓)
_______(▓▓▓▓))
______((▓▓▓▓▓))
______(▓▓▓▓▓▓)
____((▓▓▓▓▓▓))
___(▓▓___▓▓▓▓)
__.(▓▓___▓▓▓▓))
___▓▓▓___▓▓▓▓▓))
_(▓▓▓▓___▓▓▓▓▓▓)
((▓▓▓▓_______▓▓)
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓___▓▓▓▓▓▓▓))
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓))
(▓▓▓▓___▓▓___▓▓▓)
(▓▓▓▓___▓___▓▓▓▓)
(▓▓▓▓_____▓▓▓▓▓▓)
(▓▓▓▓___▓___▓▓▓▓))
(▓▓▓▓___▓▓___▓▓▓))
(▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓)
(▓▓▓▓________▓▓▓)
(▓▓▓▓___▓▓▓▓▓▓▓▓)
(▓▓▓▓_____▓▓▓▓▓▓))
(▓▓▓▓___▓▓▓▓▓▓▓▓)
(▓▓▓▓________▓▓▓)
((▓▓▓▓▓▓▓▓▓▓▓▓▓))
_((▓▓▓▓▓▓▓▓▓▓▓▓)
__((▓▓▓▓▓▓▓▓▓▓))
___((▓▓▓▓▓▓▓▓))
____((▓▓▓▓▓▓▓))
_____((▓▓▓▓▓▓)
______((▓▓▓▓))
_______((▓▓▓))
_______((▓▓▓)
______((▓▓▓)
_____((▓▓▓)
____((▓▓▓)
___.(▓▓▓)
__(▓▓▓)
.(▓▓▓)
(▓▓▓)
((▓▓)))
((▓▓))
_(▓▓))
__(▓▓)
___(▓▓)
____(▓▓)
_____(▓▓)
______(▓▓)
_______((▓)))
________((▓))
_________((▓)
_________((▓)
_________(▓)

minhoca do like`)
break


case 'love':
reply(`┳┻┳┻╭━━━━╮╱▔▔▔╲
┻┳┻┳┃╯╯╭━┫▏╰╰╰▕
┳┻┳┻┃╯╯┃▔╰┓▔▂▔▕╮
┻┳┻┳╰╮╯┃┈╰┫╰━╯┏╯
┳┻┳┻┏╯╯┃╭━╯┳━┳╯
┻┳┻┳╰━┳╯▔╲╱▔╭╮▔╲
┳┻┳┻┳┻┃┈╲┈╲╱╭╯╮▕
┻┳┻┳┻┳┃┈▕╲▂╱┈╭╯╱
┳┻┳┻┳┻┃'''┈┃┈┃┈'''╰╯
┻┳┻┳┻┏╯▔'''╰┓┣━┳┫
┳┻┳┻┳╰┳┳┳'''╯┃┈┃┃
┻┳┻┳┻┳┃┃┃┈'''┃┈┃┃
┳┻┳┻┳┻┃┃┃'''┊┃┈┃┃
┻┳┻┳┻┳┃┃┃┈'''┃┈┃┃.
┳┻┳┻┳┻┣╋┫'''┊┣━╋┫
┻┳┻┳┻╭╯╰╰-╭╯━╯.''╰╮
Love You Forever,,,,　 `)

break
case 'love5':
reply(`║║♫═╦╦╦╔╗
♫╚╣║║║║╔╣
╚═╩═╩♫╩═╝`)
break 
case 'caminhao':
await laura.sendMessage(from, { react: { text: `😑`, key: info.key }})
reply(`──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▌
───▄▄██▌█░░░░LAURA░░░░░▐
▄▄▄▌▐██▌█░EXPORTADORA░▐
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▌
▀❍▀▀▀▀▀▀▀❍❍▀▀▀▀▀▀❍❍▀`)
break
case '777':
reply(`█▄████─█▄████─█▄████
▀▀─▄█▀─▀▀─▄█▀─▀▀─▄█▀
──▄██────▄██────▄██
─▄██▀───▄██▀───▄██▀
─███────███────███`)
break
case 'android':
reply(`┈┈┈╲┈┈┈┈╱
┈┈┈╱     ▔▔╲
┈┈┃┈▇┈┈▇┈┃
╭╮┣━━━━━━┫╭╮
┃┃┃┈┈┈┈┈┈┃┃┃
╰╯┃┈┈┈┈┈┈┃╰╯
┈┈╰┓┏━━┓┏╯
┈┈┈╰╯┈┈╰╯`)
break

case 'heli':
reply(`▬▬▬.◙.▬▬▬
═▂▄▄▓▄▄▂
◢◤ █▀▀████▄▄▄▄▄▄◢◤
█▄ █ :) ██▀▀▀▀▀▀▀╬
◥█████◤
══╩══╩══
▬▬▬.Laura domina.▬▬▬`) 
break

case 'sexy':
reply(`_____Sexy?Sex
____?Sexy?Sexy
___y?Sexy?Sexy?
___?Sexy?Sexy?S
___?Sexy?Sexy?S
__?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Se
_?Sexy?Sexy?Sexy?
?Sexy?Sexy?Sexy?Sexy
?Sexy?Sexy?Sexy?Sexy?Se
?Sexy?Sexy?Sexy?Sexy?Sex
_?Sexy?__?Sexy?Sexy?Sex
___?Sex____?Sexy?Sexy?
___?Sex_____?Sexy?Sexy
___?Sex_____?Sexy?Sexy
____?Sex____?Sexy?Sexy
_____?Se____?Sexy?Sex
______?Se__?Sexy?Sexy
_______?Sexy?Sexy?Sex
________?Sexy?Sexy?sex
_______?Sexy?Sexy?Sexy?Se
_______?Sexy?Sexy?Sexy?Sexy?
_______?Sexy?Sexy?Sexy?Sexy?Sexy
_______?Sexy?Sexy?Sexy?Sexy?Sexy?S
________?Sexy?Sexy____?Sexy?Sexy?se
_________?Sexy?Se_______?Sexy?Sexy?
_________?Sexy?Se_____?Sexy?Sexy?
_________?Sexy?S____?Sexy?Sexy
_________?Sexy?S_?Sexy?Sexy
________?Sexy?Sexy?Sexy
________?Sexy?Sexy?S
________?Sexy?Sexy
_______?Sexy?Se
_______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy?
______?Sexy
______?Sexy
_______?Sex
_______?Sex
_______?Sex
______?Sexy
______?Sexy
_______Sexy
_______ Sexy?
________SexY
`)
break

case 'fro':
reply(`______________ 🍂_🍂_ 🍂_🍂
____________ 🍂__🍂__ 🍂__🍂
___________ 🍂___🍂__ 🍂___🍂
__________ 🍂____🍂 __🍂____🍂
_________ 🍂_____🍂 __🍂 ____🍂
_________ 🍂_____🍂 __🍂 ____ 🍂
_________ 🍂_____🍂 __🍂 ____ 🍂
__________ 🍂____ 🍂__🍂 ___ 🍂
____________ 🍂___🍂__🍂 __ 🍂
______________ 🍂🍂🍂🍂🍂
______🍃🍃_______🌱🌱
____🍃🍃🍃_______🌱
___🍃🍃🍃🍃_____🌱
______🍃🍃🍃_____🌱
__________🍃_______🌱
______🍃🍃_🍃____🌱
____🍃🍃🍃__🍃__🌱
___🍃🍃🍃_____🍃🌱
____🍃🍃__________🌱
____🍃_____________🌱
____________________🌱
____________________🌱
____________________🌱
________________███__██
______________███___ ███
_____________███_____███_██
____________███______███_███
___________███______███__███
_________████_____████__███
_________████___████___███_██
_________██████████___███_███
________███████████_████_███
________███████████████_███
________█████████████_█████
████_███████████████_████
█████_██████████████_████
██████_████████████_████
███████_██████████████
████████_███████████
█████████_███████
██████████
██████████
---------------`)
break

case 'mario':
reply(`▒▒▒▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒▒▒
▒▒▒▒▒▒▄▀▀▓▓▓▀█▒▒▒▒▒▒
▒▒▒▒▄▀▓▓▄██████▄▒▒▒▒
▒▒▒▄█▄█▀░░▄░▄░█▀▒▒▒▒
▒▒▄▀░██▄░░▀░▀░▀▄▒▒▒▒
▒▒▀▄░░▀░▄█▄▄░░▄█▄▒▒▒
▒▒▒▒▀█▄▄░░▀▀▀█▀▒▒▒▒▒
▒▒▒▄▀▓▓▓▀██▀▀█▄▀▀▄▒▒
▒▒█▓▓▄▀▀▀▄█▄▓▓▀█░█▒▒
▒▒▀▄█░░░░░█▀▀▄▄▀█▒▒▒
▒▒▒▄▀▀▄▄▄██▄▄█▀▓▓█▒▒
▒▒█▀▓█████████▓▓▓█▒▒
▒▒█▓▓██▀▀▀▒▒▒▀▄▄█▀▒▒
▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`)
break
case 'ursinho':
reply(`░░░░░░░░░░░░░░░░░░░░░░
░░░░░▄▄░░░░░░▄▄▄▄░░░░░
░░░▐▀▀▄█▀▀▀▀▀▒▄▒▀▌░░░░
░░░▐▒█▀▒▒▒▒▒▒▒▒▀█░░░░░
░░░░█▒▒▒▒▒▒▒▒▒▒▒▀▌░░░░
░░░░▌▒██▒▒▒▒██▒▒▒▐░░░░
░░░░▌▒▒▄▒██▒▄▄▒▒▒▐░░░░
░░░▐▒▒▒▀▄█▀█▄▀▒▒▒▒█▄░░
░░░▀█▄▒▒▐▐▄▌▌▒▒▄▐▄▐░░░
░░▄▀▒▒▄▒▒▀▀▀▒▒▒▒▀▒▀▄░░
░░█▒▀█▀▌▒▒▒▒▒▄▄▄▐▒▒▐░░
░░░▀▄▄▌▌▒▒▒▒▐▒▒▒▀▒▒▐░░
░░░░░░░▐▌▒▒▒▒▀▄▄▄▄▄▀░░
░░░░░░░░▐▄▒▒▒▒▒▒▒▒▐░░░
░░░░░░░░▌▒▒▒▒▄▄▒▒▒▐░░`)
break
//==============JOGOS===========\\

case 'gay':
await laura.sendMessage(from, { react: { text: `🏳️‍🌈`, key: info.key }})
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'GAY DE MAIS'} else if (tamanho == 13 ) {pp = 'gay suspeito'} else if (tamanho == 14 ) {pp = 'esse ai ja comeu o amigo e virou gay'} else if (tamanho == 15 ) {pp = 'eita, muito gayyyy😅😅😅😅'} else if (tamanho == 16 ) {pp = 'e muito gay ta doido'} else if (tamanho == 17 ) {pp = 'sente atração por pau ne 😅😅😅'} else if (tamanho == 18 ) {pp = 'gayyyyyyyyyy de mais'} else if (tamanho == 19 ) {pp = 'virou gay pq nenhuma mulher quer um filho da puta como vc seu gayy'} else if (tamanho == 20 ) {pp = 'muito gay🏳️‍🌈🏳️‍🌈🏳️‍🌈'} else if (tamanho == 21 ) {pp = 'voce dau o cu e gostou ne muito gay'} else if (tamanho == 22 ) {pp = 'voce sente tesao enfiando o dedo no cu, muito gayyy🏳️‍🌈🏳️‍🌈'} else if (tamanho == 23 ) {pp = 'voce e gay de mais, nao conversa mais cmg'} else if (tamanho == 24 ) {pp = 'gay confirmado'} else if (tamanho > 25 ) {pp = 'vc e muito gay porra 🏳️‍🌈🏳️‍🌈'
}
hasil = `
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈
「${pp} 
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈

.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈
sua porcentagem de gay e ${random}%
.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .🏳️‍🌈 `
reply(hasil)
break

case 'chifre':
await laura.sendMessage(from, { react: { text: `🐂`, key: info.key }})
random2 = `${Math.floor(Math.random() * 35)}`
const tamanho2 = random2
if (tamanho2 < 13 ) {pp = 'muito corno🤟'} else if (tamanho2 == 13 ) {pp = 'meio corno😬'} else if (tamanho2 == 14 ) {pp = 'muito corno😳'} else if (tamanho2 == 15 ) {pp = 'cuidado com o poste'} else if (tamanho2 == 16 ) {pp = 'vai pegar manga com esse chifre?'} else if (tamanho2 == 17 ) {pp = 'eita poha, levou muita galha em😳'} else if (tamanho2 == 18 ) {pp = 'cuidado com os fios de energia😳'} else if (tamanho2 == 19 ) {pp = 'como você aguenta esse peso todo😳'} else if (tamanho2 == 20 ) {pp = 'recorde mundial de maior chifre, parabéns'} else if (tamanho2 == 21 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 22 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 23 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 == 24 ) {pp = 'parabéns, belos chifres'} else if (tamanho2 > 25 ) {pp = 'vai construir uma torre com isso ai é??'
}
hasil = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟${emoji}𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄${emoji}⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushName}」
╭┤➢𖣘 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`
reply(hasil)
break

case 'cassino':
if (!isGroup) return reply('Você só pode jogar em grupos🙄')
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = exportion[Math.floor(Math.random() * exportion.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►  Você ganhou🔮  ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`

} else {
var Vitória = `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►    Você perdeu...    ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`
}
	const cassino = `
   ۣۜۜ͜͡☆ ☲ ► 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ◄☲  ☆ۣۜۜ͜͡
┏━━━━━━━━━━━━━━━━━┓
 ۣۜۜ͜͡☆ ☲ ► ${somtoy2} ◄☲ ☆ۣۜۜ͜͡   
┗━━━━━━━━━━━━━━━━━┛

*${Vitória}*`
reply(cassino)
if (Vitória == `▱▰▱▰▱▰ ★ ▱▰▱▰▱▰
 ☲ ►   Você ganhou..🎊   ◄☲
▱▰▱▰▱▰ ★ ▱▰▱▰▱▰`) {

reply('Parabéns')
}
await (sender)
break
case 'nazista':
if (!isGroup) return reply(msg.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
reply('Aguarde...💂')
await delay(5000)
reply(`${pushname} Sua Porcentagem De nazista é De💂: ${aletg}%`)
break
case 'gado': case 'gada':
if (!isGroup) return reply(msg.groupo)
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, estou confiscando sua porcentagem de gado...🐂😅😅😅')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
const sn = ['sim', 'não', 'talvez']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
rate = body.slice(7)
zxzz = 
random = `${Math.floor(Math.random() * 200)}`
reply(` ➥ A chance de (${q}) e de:❰ `+random+`% ❱ ✧ `)
break

case 'corno': case 'corna':
if(!isGroup) return enviar('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 200)}`
random2 = `${Math.floor(Math.random() * 200)}`
laura.sendMessage(from, {text: ` Pesquisando o quanto você e ${comando} :  @${pushname}},\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ muito corno kkkkkkkk🐂`, mentions: [blamention_id]})
break
case 'gostoso': case 'gostosa':
if (!isGroup) return reply(msg.grupo)
const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde avaliando seu perfil...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break
case 'lesbica':
case 'lesbico':
if(!isGroup) return reply('só pode ser usado em grupo, tu e burro zee')
rate = body.slice(7)
if(budy.includes("@")) {
mention_id = args.join(" ").replace("@", "") + "@s.whatsapp.net"
var blamention_id = mention_id
}

if(!budy.includes("@")) {
var blamention_id = sender 
}

zxzz = 
random = `${Math.floor(Math.random() * 110)}`
random2 = `${Math.floor(Math.random() * 110)}`
laura.sendMessage(from, {text: `➮ Pesquisando a ficha de ${comando} :  @${blamention_id.split("@")[0]}, aguarde...\n\n _Você é: ❰ ${random},${random2}% ❱  ${comando}_ `, mentions: [blamention_id]})
break

//jogos
//plaquinas
case 'plaq':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq2':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq3':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq4':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq5':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq6':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
        if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break

case 'plaq7':{
    if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
    teks = body.slice(6)
    if (teks.length > 100) return reply('O texto é longo, até 100 caracteres') //maximo de caracteres
    buffer =(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
    laura.sendMessage(sender, {image: {url: buffer }, caption: ' *Plaquinha feita*'})
    await laura.sendMessage(from, { react: { text: `👁️`, key: info.key }})
    }
    reply(`a plaquinha esta sendo enviado no seu privado...`)
    break
    
    case 'conselho': //@SUPRA ♡
  try {
 anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
     ppimg = await laura.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = `Este é meu conselho:
${anu.frase}`
     laura.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break
    
    
case 'metadinha':{
                await laura.sendMessage(from, { react: { text: `🤔`, key: info.key }})
                let anu = await axios.get(`https://marcos025.onrender.com/api/ferramenta/metadinha?apikey=XANAX-VNCS$`)
                laura.sendMessage(sender, {image: {url: anu.data.masculina}, caption: `𝑴𝑨𝑺𝑪𝑼𝑳𝑰𝑵𝑶`})
                laura.sendMessage(sender, {image: {url: anu.data.feminina}, caption: `𝑭𝑬𝑴𝑰𝑵𝑰𝑵𝑶`})
                reply(`a metadinha esta sendo enviado no seu privado...`)
                }
                break
 //=============//MENU+18\\===================\\              
case 'hentai':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/hentai?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break



case 'hentai2':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/hentai?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'ero':{
reply(`enviando no seu pv...`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/ero?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'loli' :{
reply("aguarde um momento, eu vou enviar no seu privado")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-ph`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc dosta de loli?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await laura.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'fotopraperfil':{
await laura.sendMessage(from, { react: { text: `👽`, key: info.key }})
reply(`Enviando a foto no seu perfil...`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/travazap?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'memepv':{
reply(`o meme esta sendo enviado no seu privado..`)
bla = await fetchJson("https://appp--trevodev.repl.co/memes?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {video: {url: bla.url}})
}break

case 'meme':{
reply(`enviando seu meme aguarde...`)
bla = await fetchJson("https://appp--trevodev.repl.co/memes?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(from, {video: {url: bla.url}})
}break

case 'foto18':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/foto_18?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'pussy':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/pussy?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'neko2':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/neko2?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'manga':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/manga?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'foot':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/foot?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'vídeo18':
case 'video18':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/18/video?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {video: {url: bla.url}})
}break

case 'xvi':
reply('realizando ação...')
dlk = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/pornogratis?nome=${q}&apikey=tohsaka`);

laura.sendMessage(sender, {video: {url: dlk.url}})
break

case 'gerarcpf':
enviar(`ESCOLHA UM PAIS , ONDE SEU
CPF VAI SER GERADO 
   ╭━━━━━◉                    ◉━━━━━╮ 
       ╔┉｡˚┉═══『☠️』═══┉｡˚┉╗    
       ║    *GERAR  CPF*    ║
       ╚┉｡˚┉═══『☠️』═══┉｡˚┉╝    
╰━━━◉  *BY PEDROZZ*  ◉━━━╯
ㅤ ㅤ  ི⋮ ྀ❌⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝❌⋮ ྀ

${prefix}estadosunidos


${prefix}canadá


${prefix}China


${prefix}Brasil
`)
break

case 'brasil':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : BRASIL 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'estadosunidos':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : ESTADOS UNIDOS 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'canada':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${pushname}
HORA : ${hora}
DATA :${data}
PAIS : CANADA 

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
case 'china':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
enviar('gerando cpf aguarde..')
await delay(4009)
enviar(`SOLICITADO POR ${sender.split("@")[0]}
HORA : ${hora}
DATA :${data}
PAIS : CHINA

CPF: ${cp1}.${cp2}.${cp3}-${cp4}`)
break
//cpf

case 'shadow':
var gh = body.slice(7)
var teks1 = gh.split("|")[0];
if (args.length < 1) return reply(`onde está o texto hum\nExemplo: ${prefix}shadow pedrozz`)
reply(msg.wait)
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${teks1}&apikey=BotWeA`, {method: 'get'})
buffer = await getBuffer(anu.result)
laura.sendMessage(from, buffer, image, {quoted: mek,caption: 'Eh...'})
                                        break

//trava zap

case 'botzin':
laura.sendMessage(from, { document: fs.readFileSync('./travas/bot.txt'), mimetype: "text/plain", fileName: "bot.txt", caption: "trava do SUKUNA-BOT", })
break
//fim 
case 'gif':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/gifs?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {gif: {url: bla.url}})
}break

case 'lbc':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/ass?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break

case 'hentai4':{
reply(`estarei enviando no seu privado,e se a foto ou o vídeo não for por favor report o comando com meu dono,com o cmd ${prefix}report..`)
bla = await fetchJson("https://appp--trevodev.repl.co/nsfw/cum?username=Astaroth&key=PEDROZZ_XXX")

laura.sendMessage(sender, {image: {url: bla.url}})
}break
//cases By pedrozz
//case audio by pedrozz

case 'sound':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound1':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound2':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound3':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound3.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound4':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound4.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound5':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound5.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound6':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound6.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound7':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound7.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound8':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound8.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound9':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound9.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound10':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound10.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound11':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound11.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound12':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound12.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'sound13':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound13.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound14':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound14.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound15':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound15.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound16':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound16.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound17':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound17.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound18':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound18.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound19':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound19.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound20':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound20.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound21':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound21.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound22':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound22.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound23':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound23.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound24':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound24.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound25':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound25.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound26':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound26.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound27':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound27.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound28':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound28.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound29':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound29.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound30':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound30.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound31':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound31.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound32':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound32.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound33':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound33.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound34':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound34.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound35':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound35.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound36':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound36.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'sound37':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound37.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound38':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound38.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound39':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound39.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound40':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound40.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound41':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound41.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound42':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound42.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound43':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound43.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound44':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound44.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound45':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound45.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound46':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound46.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound47':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound47.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound48':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound48.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'sound49':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound49.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound50':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound50.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'sound51':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/sound/sound51.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
//fim audiomeme
//case musica
case 'musica':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica1':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica2':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica3':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica3.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica4':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica4.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica5':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica5.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica6':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica6.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica7':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica7.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica8':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica8.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'musica9':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica9.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica10':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica10.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica11':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica11.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica12':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica12.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break


case 'musica13':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica13.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica14':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica14.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica15':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica15.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica16':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica16.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica17':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica17.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica18':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica18.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica19':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica19.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica20':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica20.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica21':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica21.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica22':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica22.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'musica23':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/musica/musica23.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
//fim case musica
case 'menufigu':
await laura.sendMessage(from, { react: { text: `💦`, key: info.key }})
escrever(`╔━━⊱ *「 figurinhas 」*━━✕
┃${prefix}ale「  」
┃${prefix}cari「  」
┃${prefix}hum「  」
┃${prefix}pa.tu「  」
┃${prefix}pia「  」
┃${prefix}titi「  」
┃${prefix}tist「  」
┃${prefix}tal「  」
┃${prefix}add「  」
┃${prefix}add「  」
┃${prefix}add「  」
┃${prefix}add「  」
┗━━━━━━━━━━━━━━✕


╔━⊱ *「 𝘾𝙧𝙚𝙙𝙞𝙩𝙤𝙨 」*━━✕
┃𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝙗𝙮 §§PEDROZ§§∆•
┗━━━━━━━━━━━━✕`)
break


case 'criador':
await laura.sendMessage(from, { react: { text: `🤑`, key: info.key }})
audiocriador = await fs.readFileSync("./laura/audio/infodono.mp3")
laura.sendMessage(from, {audio: audiocriador, mimetype: 'audio/mpeg', ptt:true}, {quoted: info}) 
            menu8 = `
        ╭┤女⃟⃟女 INFO DONO女⃟⃟女
   
             ╭▭▬▭▬▭▬▭▬▭▬▭
             ┃CRIADOR: Pedrozz
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃ZAP: Wa.me/556199317165
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃insta: @jack__13755
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ┃grupo:${grupo}
             ┃
             ┣▬▭▬▭▬▭▬▭▬▭▬▭⪨
             ╰▬▭▬〔🤑〕▬▭▬▭▬▭⪨
          ©*${botName}*-𝑩𝑶𝑻⃟ 
          
            `       
            
           await laura.sendMessage(from, {image: fs.readFileSync('./laura/figu/laura1.webp'), caption: menu8, contextInfo: {
            externalAdReply: {
            title:"🙇🏻 informações do meu mestre🙇🏻",
            body: "",
            reviewType: "PHOTO", 
            thumbnailUrl: `https://telegra.ph/file/602966047fb689889943a.jpg`,
            sourceUrl: `https://instagram.com/jack__13755`, 
            mediaType: 2
            }}})
             
break
case 'grupoc':
enviar(`
grupo:${grupo}
`)
break
case 'sermembro':
if (!isCreator) return reply(msg.dono)
reply(`Agora vc não é mais adm do grupo.`)
kicee = sender
await laura.groupParticipantsUpdate(from, [kicee], 'demote')
break

case 'login':
if(!q.trim()) return enviar(`*Aonde está o nome,idade e sexualidade em humano? ex: ${prefix + comando} pedrozz/18/hetero\nseja mais inteligente*`)
var [id, idade, sexualidade] = q.split("/")
enviar(`*aguarde estarei te registrando*`)
registro.push(sender)
fs.writeFileSync("./arquivos/registro.json", JSON.stringify(registro))

lau = `✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
〡 *𖤍 SEU LOGIN FEITO COM SUCESSO 𖤍*
⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *NOME:* 〖${id}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *IDADE:* 〖${idade}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡➣ *sexualidade* 〖 ${sexualidade}〗
〡⊰꙳ ✰ ⊱┈──╌☆╌──┈⊰ ✰ ꙳⊱
〡pronto agora você pode usar meus comandos tranquilamente🥳🥳
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
╔━━━━━━░🌸░━━━━━━╗
🌹⃟LOGIN By ${botName}ͦ⃟🌹
╚━━━━━━░🌸░━━━━━━╝
✟⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘✟
`

laura.sendMessage(from, {image: {url:
'https://telegra.ph/file/aa1b07a2be9ac2ef8bcd4.jpg' }, caption: lau, mentions:
[sender]}, {quoted: info })
break
case'8':
reply(`${prefix}8`)
break
case 'tabela1':
enviar(`O COMANDO ${comando} SERÁ BLOQUEADO POR 5 MINUTOS PARA EVITAR FLOD!

Símbolos japoneses, coreanos, chineses e asiáticos

㈀㈁㈂㈃㈄㈅㈆㈇㈈㈉㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛㈜㈝㈞㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩㈪㈫㈬㈭㈮㈯㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉄㉅㉆㉇㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻㉼㉽㉾㉿㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰㋐㋑㋒㋓㋔㋕㋖㋗㋘㋙㋚㋛㋜㋝㋞㋟㋠㋡㋢㋣㋤㋥㋦㋧㋨㋩㋪㋫㋬㋭㋮㋯㋰㋱㋲㋳㋴㋵㋶㋷㋸㋹㋺㋻㋼㋽㋾人益頹衙浳浤搰㍭煤洳橱橱煪煱

Símbolos matemáticos, frações

∀∁∂∃∄∅Δ∇∈∉ε∋∌∍∎Π∐Σ−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿∅∅∩∪≨≩≲≳⊊⊋⊓⊔⊕⊗⊜⋚⋛⏧➕➖➗ﾟ•°º⅟½⅓¾⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞℀℁℅℆

Setas e direções

᠈᠉ᨆᨈᨉᨊ←↑→↓↔↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⍅⍆⍇⍈⍏⍐⍖⍗⛕⛖⛗➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿⤴⤵⬅⬆⬇📤📥🔀🔁🔂🔃🔄

𝕾𝖎𝖒𝖇𝖔𝖑𝖔𝖘 𝕽𝖆𝖗𝖔𝖘 (visto em Celular)

𖠁𖠂𖠃𖠄𖠇𖠈𖠉𖠊𖠋𖠌𖠍𖠎𖠏𖠐𖠑𖠒𖠓𖠔𖠕𖠖𖠗𖠘𖠙𖠚𖠛𖠜𖠝𖠞𖠟𖠠𖠡𖠢𖠣𖠤𖠥𖠦𖠧𖠨𖠩𖠪𖠫𖠬𖠭𖠮𖠯𖠰𖠱𖠲𖠳𖠴𖠵𖠶𖠷𖠸𖠹𖠺𖠻𖠼𖠽𖠾𖠿𖡀𖡁𖡂𖡃𖡄𖡅𖡆𖡇𖡈𖡉𖡊𖡋𖡌𖡍𖡎𖡏𖡐𖡑𖡒𖡓𖡔𖡕𖡖𖡗𖡘𖡙𖡚𖡛𖡜𖡝𖡞𖡟𖡠𖡡𖡢𖡣𖡤𖡥𖡦𖡧𖡨𖡩𖡪𖡫𖡬𖡭𖡮𖡯𖡰𖡱𖡲𖡳𖡴𖡵𖡶𖡷𖡸𖡹𖡺𖡻𖡼𖡽𖡾𖡿𖢀𖢁𖢂𖢃𖢄𖢅𖢆𖢇𖢈𖢉𖢊𖢋𖢌𖢍𖢎𖢏𖢐𖢑𖢒𖢓𖢔𖢕𖢖𖢗𖢘𖠅𖠆𖢙𖢚𖢛𖢜𖢝𖢞𖢟𖢠𖢡𖢢𖢣𖢤𖢥𖢦𖢧𖢨𖢩𖢪𖢫𖢬𖢭𖢮𖢯𖢰𖢱𖢲𖢳𖢴𖢵𖢶𖢷𖢸𖢹𖢺𖢻𖢼𖢽𖢾𖢿𖣀𖣁𖣂𖣃𖣄𖣅𖣆𖣇𖣈𖣉𖣊𖣋𖣌𖣍𖣎𖣏𖣐𖣑𖣒𖣓𖣔𖣕𖣖𖣗𖣙𖣚𖣛𖣜𖣝𖣞𖣟𖣠𖣡𖣢𖣣𖣤𖣥𖣦𖣧𖣨𖣩𖣪𖣫𖣬𖣭𖣮𖣯𖣰𖣱𖣲𖣳𖣴𖣵𖣶𖣷𖣸𖣹𖣺𖣻𖣼𖣽𖣾𖣿𖤀𖤁𖤂𖤃𖤄𖤅𖤆𖤇𖤈𖤉𖤊𖤋𖤌𖤎𖤏𖤑𖤒𖤓𖤔𖤕𖤖𖤗𖤘𖤙𖤚𖤛𖤜𖤝𖤞𖤟𖤠𖤡𖤢𖤣𖤤𖤥𖤦𖤧𖤨𖤩𖤪𖤫𖤬𖤭𖤮𖤯𖤰𖤱𖤲𖤳𖤴𖤵𖤶𖤷𖤸𖤹𖤺𖤻𖤼𖤽𖤾𖤿𖥀𖥁𖥂𖥃𖥄𖥅𖥆𖥇𖥈𖥉𖥊𖥋𖥌𖥍𖥎𖥏𖥐𖥑𖥒𖥓𖥔𖥕𖥖𖥗𖥘𖥙𖥚𖥛𖥜𖥝𖥞𖥟𖥠𖥡𖥢𖥣𖥤𖥥𖥦𖥧𖥨𖥩𖥪𖥫𖥬𖥭𖥮𖥯𖥰𖥱𖥲𖥳𖥴𖥵𖥶𖥷𖥸𖥹𖥺𖥻𖥼𖥽𖥾𖥿𖦀𖦁𖦂𖦃𖦄𖦅𖦆𖦇𖦈𖦉𖦊𖦋𖦌𖦍𖦎𖦏𖦐𖦑𖦒𖦓𖦔𖦕𖦖𖦗𖦘𖦙𖦚𖦛𖦜𖦝𖦞𖦟𖦠𖦡𖦢𖦣𖦤𖦥𖦦𖦧𖦨𖦩𖦪𖦫𖦬𖦭𖦮𖦯𖦰𖦱𖦲𖦳𖦴𖦵𖦶𖦷𖦸𖦹𖦺𖦻𖦼𖦽𖦾𖦿𖧀𖧁𖧂𖧃𖧄𖧅𖧆𖧇𖧈𖧉𖧊𖧋𖧌𖧍𖧎𖧏𖧐𖧑𖧒𖧓𖧔𖧕𖧖𖧗𖧘𖧙𖧚𖧛𖧜𖧝𖧞𖧟𖧠𖧡𖧢𖧣𖧤𖧥𖧦𖧧𖧨𖧩𖧪𖧫𖧬𖧭𖧮𖧯𖧰𖧱𖧲𖧳𖧴𖧵𖧶𖧷𖧸𖧹𖧺𖧻𖧼𖧽𖧾𖧿𖨀𖨁𖨂𖨃𖨄𖨅𖨆𖨇𖨈𖨉𖨊𖨋𖨌𖨍𖨎𖨏𖨐𖨑𖨒𖨓𖨔𖨕𖨖𖨗𖨘𖨙𖨚𖨛𖨜𖨝𖨞𖨟𖨠𖨡𖨢𖨣𖨤𖨥𖨦𖨧𖨨𖨩𖨪𖨫𖨬𖨭𖨮𖨯𖨰𖨱𖨲𖨳𖨴𖨵𖨶𖨷𖨸

Símbolo do infinito, círculos, quadrados, losangos, traços, pontos e formas diversas

♾☍⚪⚫⚬⭕🔴🔵๏༚ᢀᨔ⌻⌼⌽⌾⍉⍛⍜⎉⎊⎋⏀⏁⏂⏣◉○◌◍◎●◐◑◒◓◔◕◦◯◴◵◶◷☌⚭⚮⚯⛢❍⬤⬮⬯⭖⭗⭘⭙〄ʘஃ་჻᎒᎓᠁᠂᠃᠅᨞⁕⁑⁂⁖⁘⁙․‥…‧⁚⁛⁜⁝⁞※┄┅┆┇┈┉┊┋⛬⌗⌸⌹⍁⍂⍃⍄⍞⍯⎕⏍⏥▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▕▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱◘◙◧◨◩◪◫◰◱◲◳◻◼◽◾⚼⛝⛞❏❐❑❒❘❙❚⬚⬛⬜🔲🔳⌧❖⌺⍋⍍⍒⍔⍙⍚⎏⎐⎑⎒⏃⏄⏅▲△▴▵▶▷▸▹►▻▼▽▾▿◀◁◂◃◄◅◆◇◈◊◢◣◤◥◬◭◮◸◹◺◿⛋⛛⛡⟐🔶🔷🔸🔹🔺🔻🔼🔽இ༓࿉།༎ᔗᔘᔚᔙᓬᕫᕬᕭᕮᖗᖘᖙᖚᖰᖱᖲᖳᖼᖽᖾᖿᗤᗥᗦᗧᗡᗠᗢᗣᗞᗟᗜᗝᗘᗛᗗᗖᗐᗑᗒᗕᘜᘝᘞᘛᘮᘯᘰᘳᙀᙁᙂᙅᙈᙉᙊᙍᙷᙸᙼᙺᨀᨁᨂᨃᨄᨅᨇᨋᨌᨍᨎᨏ᨟ᨐᨑᨒᨓᨕᱤᱥᱦᱧᱨᱩᱫᱬᱭᱮᱯᱰᱵᱜᱝ⌌⌍⌎⌏⌜⌝⌞⌟⌓⌔⌖⌘⌬⍊⍌⍎⍑⍓⍕⍝⍭⍱⍲⎄⎅⎆⎇⎈⎌⎍⎎⍽⍾⎓⎔⎗⎘⏆⏇⏈⏉⏊⏋⏌─━│┃┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╴╵╶╷╸╹╺╻╼╽╾╿◖◗◚◛◜◝◞◟◠◡☰☱☲☳☴☵☶☷⚊⚋⚌⚍⚎⚏⚞⚟⚶⚷⚹⚺⚻⛘⛚⛻彡❡۩ண⌦⌫ਊ〽〰

꧁༒꧂ᵐᵖ⁴⁰¹⁵⁷₁₅₇ⁿᵗʲʰˢᶠᵉﮩ٨ـﮩﮩ٨ـﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـﮩ٨ـﮩﮩ٨ـ♥ﮩ٨ـﮩﮩ٨ـᤢㅤꪰꪰ⛺炎༗ぁア$ホ愛望⳻᷼⳺⳻͟⳺ᯤᯤ⁴⁴⁴ᯤ⁹⁹⁹ᯤ⁶⁹Ⓥⓥ™ꛍ♂️〆么テ☂®☯©️✓ꪜ♲♻❤☔♀️❀✿⛅⛄Ϟ⚡†⸸ʚїɞ╰☆╮☆★♥♡《》〘〙☃ʚɞʚїɞ(×_×)(ʘʖ̲ʘ)(×﹏×)❖¤⸙߷ⰇᴥՖꙊꙪ►×͜××᷼×⁕᷼⁕⁕͜⁕⳻፝֟͜⳺⳻᷼⳺༺▁▂▃࿙࿚࿐༜♰♱✽〠֟፝⚓ϟ☬￮⁶⁹ₓⷪₓᷟₓᷛꚠ༗⸙Λﴶ۩۞۝⸕٭⸔ㅤꪰꪰꪰꪰ亗Δ࿆֟፝ტӪბ災も文დ♋〄々〩༄༅༆༇༈༉༓༜༻࿇࿂࿐࿑࿉࿈࿓࿔࿄࿅㍶∞⚠♿༬�᳀⦿꠶꠷ꯌ⌆⌇⌘⌚
𝕸𝖆𝖎𝖘 𝖚𝖘𝖆𝖉𝖔𝖘, usada para nick Free Fire


꧁꧂𒀱𒅒᭄


༫𐂡𒋨𖤍༗ههههه𓅂𖣘𒁂𒈒𒈞✰ཽ༺༻࿐☬Ӂ༒༈Ϟϟペᘛ「」៚༆乡⎝⎝⎠⎠░⫷⫸෴⚔⚒웃유ஒௐ우움ᐇᐖᐕᐵᑥᓆᒖᑆᑈᐛᓍᓎᓏᓠᓤᓥᓨᓩ῁῭΅⍡⍢⍣⍤⍥⍨⍩⛣ｯﭢツッシ⑆ツ囧ㅹÜ〲〴〠㋚㋡㋞ٹїټツ

${botName}-BOT`)
break
///case de onlyfans free by: pedrozz
        case 'only1': 
if(!isPremium) return reply(msg.premium)
enviar(`Enviado no seu pv`)
only1 = `
Luiza russo (mansão maromba)
via telegram> https://t.me/+8cJ7yGnq5fI2YjYx
`
laura.sendMessage(sender, {text: only1}, {quoted: selo})
break

case 'only2': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only2 = `
Luiza blue 
via telegram> https://t.me/+JaX8wY_45843ZTBh
`
laura.sendMessage(sender, {text: only2}, {quoted: selo})
break

case 'only3': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only3 = `
Isadora vale 
via telegram> https://t.me/+smb4i0bxRl41ZjRh
`
laura.sendMessage(sender, {text: only3}, {quoted: selo})
break

case 'only4': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only4 = `
Ingrid bianchi
via telegram> https://t.me/+RJtf2TqTQ8NjZjlh
`
laura.sendMessage(sender, {text: only4}, {quoted: selo})
break

case 'only5': 
if(!isPremium) return reply(msg.premium)
enviar(`Enviado no seu pv`)
only5 = `
Lizy Donato 
via telegram> https://t.me/+gmSjm2WZnb41OGEx
`
laura.sendMessage(sender, {text: only5}, {quoted: selo})
break

case 'only6': 
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only6 = ` 
Feh Galv茫o
via telegram> https://t.me/+naeQ1pp8ajswMjgx
`
laura.sendMessage(sender, {text: only6}, {quoted: selo})
break

case 'only7': 
if(!isPremium) return reply(msg.premium)
enviar(`[Enviado no seu pv`)
only7 = `
Tatyzack
via telegram> https://t.me/+NvglGFhOLSY5NmZ
`
laura.sendMessage(sender, {text: only7}, {quoted: selo})
break

case 'only8': 
if(!isPremium) return reply(msg.premium)
enviar(`[Enviado no seu pv`)
only8 = `
Ayrla Souza 
via telegram> https://t.me/+XLziPd47MWo2N2Y
`
laura.sendMessage(sender, {text: only8}, {quoted: selo})
break

case 'only9':
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only9 = `
ALINE FARIA
via telegram> https://t.me/+j1xp_hmXrx5lZWMx
`
laura.sendMessage(sender, {text: only9}, {quoted: selo})
break

case 'only10':
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only10 = `
KINE CHAN 
via telegram> https://t.me/+YIVax4IQ9aFlMDgx
`
laura.sendMessage(sender, {text: only10}, {quoted: selo})
break

case 'only11': 
if(!isPremium) return reply(msg.premium)
enviar(`[]Enviado no seu pv`)
only11 = `
DJ NATHI
via telegram> https://t.me/+6Z5vuVApT-1lYjEx
`
laura.sendMessage(sender, {text: only11}, {quoted: selo})
break

case 'only12':
if(!isPremium) return reply(msg.premium)
enviar(`[Enviando no seu pv`)
only12 = `
BELE KAFFER
via telegram> https://t.me/+70DMw3iTzb0yMzEx
`
laura.sendMessage(sender, {text: only12}, {quoted: selo})
break 
case 'only13': 
if(!isPremium) return reply(msg.premium)
enviar(`]Enviado no seu pv`)
only13 = `
only dos lestes
via telegram> https://t.me/cadelinhasredansbr
`
laura.sendMessage(sender, {text: only13}, {quoted: selo})
break 
case 'only14':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only14 = `
Lua Santa
via telegram> https://t.me/+tX4sSnwJYBI3NGMx
`
laura.sendMessage(sender, {text: only14}, {quoted: selo})
break
case 'only15':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only15 = `
Lua Uchiha
via telegram> https://t.me/+nW1We0oSDuUxZWFh
`
laura.sendMessage(sender, {text: only15}, {quoted: selo})
break
case 'only16':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only16 = `
Cibelly Ferreira (prof do tik tok)
via telegram> https://t.me/+SkelQs1wPJ1iYmNh
`
laura.sendMessage(sender, {text: only16}, {quoted: selo})
break
case 'only17':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only17 = `
Catarina Paulino
via telegram> https://t.me/+JwZmPiNqSDI5NWUx
`
laura.sendMessage(sender, {text: only17}, {quoted: selo})
break
case 'only18':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only18 = `
Jennie s
via telegram> https://t.me/+lPvd-vfwxSxjMjkx
`
laura.sendMessage(sender, {text: only18}, {quoted: selo})
break
case 'only19':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only19 = `
Isabella Ramirez
via telegram> https://t.me/+9Ow2dG6RMjMwOGNh
`
laura.sendMessage(sender, {text: only19}, {quoted: selo})
break
case 'only20':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only20 = `
Irmãs Burch
via telegram> https://t.me/+qLHY0yEPajI1MzEx
`
laura.sendMessage(sender, {text: only20}, {quoted: selo})
break
case 'only21':
if(!isPremium) return reply(msg.premium)
enviar(`Enviando no seu pv`)
only21 = `
Mia Khalifa
via telegram> https://t.me/+Ky3nc1oowKY4Mjkx
`
laura.sendMessage(sender, {text: only21}, {quoted: selo})
break
/////fim menus 
case 'pronto':
enviar(`ja era meu patrão,vc falou q ta pronto?... então toma hehehe
OBS: não tem como parar kkk`)
bug = `${prefix}ja.era
`
laura.sendMessage(sender, {text: bug}, {quoted: selo})
break
case 'ja.era':
enviar(`${prefix}ja.era`)
break

///case de figurinha by pedrozz
case 'ale':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/01.webp'), caption: "Legenda" })
break
case 'cari':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/cari.webp'), caption: "Legenda" })
break
case 'hum':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/hum.webp'), caption: "Legenda" })
break
case 'pa.tu':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/pa.tu.webp'), caption: "Legenda" })
break
case 'pia':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/pia.webp'), caption: "Legenda" })
break
case 'titi':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/titi.webp'), caption: "Legenda" })
break
case 'tist':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/tist.webp'), caption: "Legenda" })
break
case 'tal':
laura.sendMessage(from, {sticker: fs.readFileSync('./laura/figu/tal.webp'), caption: "Legenda" })
break
//fim da case de figurinha 
//case audio
case 'ameiobot':
await laura.sendMessage(from, { react: { text: `♥`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/adorei.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'boatarde':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa tarde.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'bah':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bah.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'boanoite':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa noite.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'eunaogosto':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/eunaogosto.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'geme':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/geme.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'bomdia':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bomdia.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'teamo':
await laura.sendMessage(from, { react: { text: `♥`, key: info.key }})
c=lient.sendMessage(from, {audio: fs.readFileSync('./laura/audio/teamo2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
case 'tiro':
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bang bang.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break
//fim da case audio
//case de videos

case 'xvideo1': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo1.mp4'), caption: "InnocentHigh Smalltits adolescente cavalga pau de professores" })
break
case 'xvideo2': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo2.mp4'), caption: "VIZINHOS LOIRAS SAFADOS FODEM UM CARA ALEATÓRIO" })
break
case 'xvideo3': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo3.mp4'), caption: "Amiga faz a meia-irmã nerd transar com o meio-irmão valentão Legendado" })
break
case 'xvideo4': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo4.mp4'), caption: "Dei viagra pro irmão só pra ser fodida por ele" })
break
case 'xvideo5': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo5.mp4'), caption: "Bratty - Pervy Step Loves My April Fools Sex Games S4:E11 (Legendado)" })
break

case 'xvideo6': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo6.mp4'), caption: "Homem casado é seduzido por duas novinhas Legendado" })
break
case 'xvideo7': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo7.mp4'), caption: "18yo Teen In Her First Orgy! Hentai" })
break
case 'xvideo8': //by pedrozz
if(!isPremium) return reply(msg.premium)
await laura.sendMessage(from, { react: { text: `🔞`, key: info.key }})
escrever(`isso pode demorar um pouquinho, então por favor aguarde`)
laura.sendMessage(from, {video: fs.readFileSync('./laura/xvideos/xvideo8.mp4'), caption: "MILF Asks for an ANAL CREAMPIE — Uncensored Hentai [EXCLUSIVE] " })
break
//fim da case de videos
case 'escreva':
escrever(`oooi`)
break

case 'qualquer':
await laura.sendMessage(from, { react: { text: `✔️`, key: info.key }})
enviar(`estarei enviando em seu pv meu consagrado`)
ir = 
`oi oi oi oi oi`

laura.sendMessage(sender, {text: ir}, {quoted: selo})

break

case 'ameiobot':
await laura.sendMessage(from, { react: { text: `♥`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/adorei.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'nomebot':
escrever(`meu nome e ${botName}`)
break
case 'rebaixar': case 'rebaixa':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon *kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await laura.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremo???')
else if (responsepm[0].status === "200") return reply('Voce nao e mais administrador(a) desse grupo,você foi rebaixado👻')
else if (responsepm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('tente dnv')
break
case 'novocmd':
if (!q) return reply(`Exemplo: ${prefix}novocmd coloca antilink ou a case do novo cmd que quer que adicione no bot.`)
reply(`${pushname} Obrigado pela colaboração, a sua idea foi reportada ao meu criador.😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './laura/image/menu.jpg',
quoted: info},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
laura.sendMessage("556199317165@s.whatsapp.net",templateMessage)
break
case 'nomegrupo':
        {
          if (!isGroup) return reply(`esse comando só pode ser usado em gupo`)
          if (!q) return reply(`CADE O NOME PARA O GRUPO PIKINON?🙄`)
          if (!isGroupAdmins) return reply(`esse comando só pode ser usado por adimins`)
          if (!isBotGroupAdmins) return reply(`esse comando só pode ser usado se o bot for adm`)
          blat = args.join(" ")
          laura.groupUpdateSubject(from, `${blat}`)
          laura.sendMessage(from, { text: '🌸NOME DO GRUPO ALTERADO COM SUCESSO 🌸' }, { quoted: info }).catch((err) => {
            reply(`erro`);
          })
        }
        break

case 'descgp':
case 'descricaogp':
if (!isGroup) return reply(`Cmd somente em grupo`)
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!q) return reply(`CADE A DESCRIÇÃO PARA O GRUPO PIKINON?`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`Este comando so pode ser usado em grupo`);
if (!q) return reply(` `);
laura.groupUpdateDescription(from, `${q}`)
laura.sendMessage(from, {text: `${emoji}A descrição do grupo foi alterada com sucesso${emoji}`}, {quoted: loc})
break

case 'sairgp':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente meu dono ou um adm pode usar'})
try {
laura.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'marcar': {
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente meu dono ou um adm'})
if (!isGroup) return reply(mess.group)
 let metadata = await laura.groupMetadata(from)
let teks = `bora bora rapaizzzzzzz\n•\n`
for (let mem of participants) {
teks += `👻 @${mem.id.split('@')[0]}\n`
}
laura.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: loc })
}
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return

prefixx = args[0]
config.prefix = prefixx
fs.writeFileSync('./config/data.json', JSON.stringify(config, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${config.prefixx}`)
break


case 'ban': //essa case não e minha
case 'kick':{
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
if (!isGroup) return reply(`somente em grupo mane🙄`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
if(sender.includes(mentioned)) return reply("😑")
if(botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(donoNumher.includes(mentioned)) return reply('Não posso remover meu dono!😑')
let responseb = await laura.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") laura.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else laura.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.includes(sender)) return reply("😑")
if(mentioned.includes(donoNumher)) return reply("Não pode remover meu dono 😠")
if(mentioned.includes(botNumber)) return reply("😑")
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await laura.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
laura.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await laura.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") laura.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else laura.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
break
case 'attp1': 
case 'attp2': 
case 'attp3': 
case 'attp4': 
case 'attp5': 
case 'attp6': 
case 'attp7': 
if(!q) return reply("Ei, Cadê o Texto?")


reply(`Aguarde só um Pouquinho ${pushname} estarei gerando sua figurinha😊`)


att = await getBuffer(`https://tohsaka.onrender.com/api/maker/${comando}?texto=${q}&apikey=tohsaka`)


laura.sendMessage(from, {sticker: att}, {quoted: info})


break

case 'bomb':
reply(`${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n${q}\n\n`)

break

case 'pig':
case 'urso':
case 'seta':
case 'papel':
case 'grafit4':
case 'blackpinkepo':
case 'areia':
case 'balckpingv2':
case 'brotoluz':
case 'borracha':
case 'brilhante':
case 'diabo': 
case 'crack':
case 'vietnam':
case 'goldt':
case 'biscoito':
if(!q) return reply(`Ei, ${pushname}Cadê o Texto?`)
reply("Estou Gerando,Aguarde só um Pouquinho...")
laura.sendMessage(from,
 {image: {url: `https://tohsaka.onrender.com/api/ephoto/${comando}?nome=${q}&apikey=tohsaka`}}, 
{quoted: info})
break
case 'enquete':
if(!q) return reply(`Ei, ${pushname}Cadê o Tema da enquete?🤔🙄\n\nEXEMPLO: ${prefix}enquete pedrozz e louco.`)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./laura/image/menu.jpg') }, { upload: laura.waUploadToServer })
var enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
"messageContextInfo": {
"messageSecret": "QEwFogrlUlBtJgIiRuBYBjXD7VZwmpu/8rGXYb2MuaA="},
"pollCreationMessage": {
"name": `${q}`,
"options": [

{ "optionName": 'Sim' },
{ "optionName": 'Não'},
{ "optionName": 'talvez' }],
"selectableOptionsCount": 3
}}), { userJid: from, quoted: info})
laura.relayMessage(from, enquete.message, { messageId: enquete.key.id })
break
case 'ping':
uptime = process.uptime()
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente dono ou adm'})
r = (Date.now() / 1000) - info.messageTimestamp
pokemon = `
╭┉┈┈┈───┈┈┈┈• 
ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ
        ╔━━━━━━░🌟░━━━━━━╗
✨⃟AQUI SEU PING:${String(r.toFixed(3))}}ͦ⃟✨
✨⃟TEMPO ATIVO:${kyun(uptime)}ͦ⃟✨
✨⃟.   DATA:${data} ͦ⃟✨
        ╚━━━━━━░🌟░━━━━━━╝
ི⋮ ྀ${emoji}⏝ ི⋮ ྀ ｡˚  ི⋮ ྀ⏝${emoji}⋮ ྀ
                         •┈┈┈───┈┈┈┈┅╯
           ꧁⃟✨By Pedrozz✨⃟꧂
`
await laura.sendMessage(from, {text: pokemon}, {quoted: info})
break

case 'gerargrupo':
if(!q) return reply(`${pushname} Qual o Tipo de Grupo você procura?`)
reply("Aguarde, Estou Gerando os Grupos")
 if(!isPremium) return reply(msg.premium)   
    swp = await fetchJson(`https://tohsaka.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=tohsaka`)
    teks = `.• .• .• .• .• .• .• 《LAURA PRIVAT》.• .• .• .• .• .• .• .• .• .\n\n`;
    for(let i of swp) {
        teks += " *➤ NOME:* " + i.nome+ "\n"
        teks += " *➤ DESCRIÇÃO:* " + i.descrição+ "\n"
        teks += " *➤ LINK:* " + i.link+ "\n\n"
    }
    teks += `.• .• .• .• .• .• .• .• .• .• .• .• .• .• .• .`
    img = `${swp[0].img}`
   reply(teks)
    break

case 'promover':
if (!isBotGroupAdmins) return reply(`O bot tem q ser adm 🙄`)
if (!isGroup) return reply(`comando somente em grupo`)
if (!isGroupAdmins) return reply('voce tem que ser um adm pikimon kk😆')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('eu jurava que não tinha como adicionar o vento🤔🤔')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await laura.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('agora temos um novo adm 🎉🎉🎉')
else if (responsedm[0].status === "404") return reply('Esse ser insignificante nem está no grupo adm')
else return reply('Tenta dnv '-'')
break
case 'removervip': case 'delvip': case 'tirarvip':
if (!isGroup) return reply(msg.grupo)
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return  reply(enviar.msg.donosmt)
if (!budy.includes("@55")) {
num = info.message.extendedTextMessage.contextInfo.participant
bla = premium.includes(num)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: ` ${num.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(!bla) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./PEDROZZ-premius/usuarios/premium.json', JSON.stringify(premium))
laura.sendMessage(from, {text: ` @${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
}
break

//laura assistente
case 'laura':
enviar(`oi humano oq vc desejas hoje?`)
enviar(`1: tocar.musica.sad `)
enviar(`2: tocar.musica.sad2 `)
break
case 'tocar.musica.sad':
enviar(`enviando sua musica`)
await laura.sendMessage(from, { react: { text: `😭`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio2/sad1.mp3'), mimetype: "audio/mpeg",},{quoted: info})
await esperar(1000)
break
case 'tocar.musica.sad2':
enviar(`enviando sua musica\nceditos:canal:sadstation`)
await laura.sendMessage(from, { react: { text: `😭`, key: info.key }})
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio2/sad2.mp3'), mimetype: "audio/mpeg",},{quoted: info})
await esperar(1000)
break

case 'audioale':
const audio = ['sound1','sound2','sound3','sound4','sound5','sound6','sound7','sound8','sound9','sound10']
 const pack = audio[Math.floor(Math.random() * audio.length)]  
const audio2 = ['sound11','sound12','sound13','sound14','sound15','sound16','sound17','sound18','sound19','sound20']
 const pack2 = audio[Math.floor(Math.random() * audio2.length)]  
const audio3 = ['sound21','sound22','sound23','sound24','sound25','sound26','sound27','sound28','sound29','sound30']
 const pack3 = audio[Math.floor(Math.random() * audio3.length)]  
const audio4 = ['sound31','sound32','sound33','sound34','sound35','sound36','sound37','sound38','sound39','sound40']
 const pack4 = audio[Math.floor(Math.random() * audio4.length)]  
const audio5 = ['sound41','sound42','sound43','sound44','sound45','sound46','sound47','souns48','sound49','sound50'] 
 const pack5 = audio[Math.floor(Math.random() * audio5.length)]  
enviar(`audios aleatórios sendo enviado👻...`)  
esperar(7000)
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack2}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack3}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack4}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
laura.sendMessage(from, {audio: fs.readFileSync(`./laura/sound/${pack5}.mp3`), mimetype: "audio/mpeg",},{quoted: info})
break

case 'figuale':
const sticker = ['1','2','3','4','5','6','7','8','9','10']
 const patck = sticker[Math.floor(Math.random() * sticker.length)]  
const sticker2 = ['11','12','13','14','15','16','17','18','19','20']
 const patck2 = sticker[Math.floor(Math.random() * sticker2.length)]  
const sticker3 = ['21','22','23','24','25','26','27','28','29','30']
 const patck3 = sticker[Math.floor(Math.random() * sticker3.length)]  
const sticker4 = ['31','32','33','34','35','36','37','38','39','40']
 const patck4 = sticker[Math.floor(Math.random() * sticker4.length)]  
const sticker5 = ['41','42','43','44','45','46','47','48','49','50'] 
 const patck5 = sticker[Math.floor(Math.random() * sticker5.length)]  
 const sticker6 = ['51','52','53','54','55','56','57','58','69','60']
 const patck6 = sticker[Math.floor(Math.random() * sticker6.length)]  
enviar(`figurinhas aleatórios sendo enviado👻...`)  
esperar(7000)
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck2}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck3}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck4}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck5}.webp`)})
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/${patck6}.webp`)})
break
      case 'fotolink':
      if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return laura.sendMessage(from, {text: 'somente meu dono ou um adm pode usar'})
        try {
          if (isQuotedImage) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
            const fetch = require('node-fetch');
            const FormData = require('form-data');
            const fs = require('fs');
            async function uploadImageToTelegraph(imageBuffer) {
              const form = new FormData();
              form.append('file', imageBuffer, { filename: 'image.jpg' });

              const response = await fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form,
              });
              const data = await response.json();
              if (data && data[0] && data[0].src) {
                return 'https://telegra.ph' + data[0].src;
              } else {
                throw new Error('Failed to retrieve the image URL from the response.');
              }
            }
            const owgi = await getFileBuffer(boij, "image");
            const imageUrl = await uploadImageToTelegraph(owgi);
            reply(imageUrl);
          } else {
            reply('marque a ft')
          }
        } catch (e) {
          console.log(e)
          reply('error...')
        }
        break
        case 'tomp3':
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(`espere so um pouquinho ai meu bom`)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
laura.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break
        
//fim


//=============FIM DOS CMD COM PREFIXO==============\\

}
//==================CMD SEM PREFIXO==============\\
if (texto.includes("bomdia")){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/bom dia.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes("boatarde")){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa tarde.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes("boanoite")){
laura.sendMessage(from, {audio: fs.readFileSync('./laura/audio/boa noite.mp3'), mimetype: "audio/mpeg",},{quoted: info})
}

if (texto.includes(`@556199317165`)) {
laura.sendMessage(from, {sticker: fs.readFileSync(`./laura/figu/29.webp`)}, {quoted: info});
escrever(` o que queres com meu dono?`)
 }

if (texto.includes('sexo')){
reagir(`🔞`)
await esperar(1000)
reagir(`😘`)
await esperar(1000)
reagir(`🌹`)
await esperar(1000)
escrever(`${pushname} tarado(a) kkkk`)
}




//==========FIM DOS CMD SEM PREFIXO========\\



} catch (erro) {
console.log(erro)
}})


laura.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}
if(update.isNewLogin) {
console.log(`conectado com sucesso`)
}})}
ligarbot()

//atualização de pastas ou arquivos

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./dono/config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./laura/servidor/servidor.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('O servidor foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./menus', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('Um dos menus foi editada, irei reiniciar...');
process.exit()
}
})

 

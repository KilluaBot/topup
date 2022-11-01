//NO Enc
process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./settings/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, MessageType, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const jimp_1 = require('jimp')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const brainly = require('brainly-scraper')
const { TiktokDownloader } = require('./baileys/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const xa = require('xfarr-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, savefrom, snapsave, chord, mediafiredl, sfilemobi, sfilemobiSearch, zippyshare , bioskopNow, bioskop, cnbindonesia, antaranews, kompas } = require('@bochilteam/scraper')
const caliph = require("caliph-api");
const { color, bgcolor } = require('./baileys/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const CFonts = require('cfonts');
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./baileys/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, generateProfilePicture, jsonformat, format, parseMention, getRandom, runh } = require('./baileys/myfunc')
const { pinterest, wallpaper, wikimedia, quotesAnime, umma, ringtone, styletext } = require('./baileys/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./baileys/textpro')
const { detikNews } = require('./baileys/detik')
const { mediafireDl } = require('./baileys/mediafire')
const { wikiSearch } = require('./baileys/wiki.js');
const { Gempa } = require("./baileys/gempa.js");
const ms = require('ms')
 let { covid } = require('./baileys/covid.js') 
 let { copid } = require('./baileys/copid.js') 
 let { cerpen } = require('./baileys/cerpen')
const { jadwaltv }= require('./baileys/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./baileys/ytdl')
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./mongoDB/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}
// redmor
let readmore = String.fromCharCode(8206).repeat(4001)
//db
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./database/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./baileys/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU 
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tb2 = 'https://telegra.ph/file/128307237b4d2a0c88748.jpg'
const tb1 = 'https://telegra.ph/file/ef36d8dbac2f03e9a2de8.jpg'

// TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = ham = async (ham, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ham.decodeJid(ham.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await ham.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : true
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : true
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
const isVideo = (m.type === 'videoMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Bandwitch
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}
//styletext
async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}
//Sewa
_sewa.expiredCheck(ham, sewa)


// Auto-group sticker
if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await ham.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await ham.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
    if (isAutoStick) {
if (/image/.test(mime) && !/webp/.test(mime)) {
    let mediac = await quoted.download()
    await ham.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
    console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return
    let mediac = await quoted.download()
    await ham.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
async function sendFileFromUrl(from, url, caption, nay, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return ham.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: m, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//pickRandom
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//fakealldoc
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)
  
//push in console & readMessages 
if (m.message) {
	ham.readMessages([m.key])
            console.log(chalk.blue('~>'), chalk.cyan('[CMD]'), chalk.red(`=`), chalk.green(prefix + command ? prefix + command : 'Media Message'), chalk.yellow(`Args: ${args.length}`) + '\n' + chalk.cyan('>> Users'), chalk.yellow(`=`), chalk.red(pushname), chalk.green(`(${m.sender})`) + `\n` + chalk.cyan(`>> (${groupName ? groupName : 'Private Chat'})`), chalk.green('='), chalk.yellow(chalk.italic(('[' + m.chat + ']'))))
		}
		
//console.log('\x1b[1;31m\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', `\x1b[1;33m${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM HH:mm:ss')}\x1b[1;37m`, `\x1b[1;34m${prefix + command}\x1b[1;37m`, 'From', chalk.green(pushname + ' => ' + m.sender.split('@')[0]), 'In', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(args.length))
		
//fake recording, composing
if (m.message) {
ham.sendPresenceUpdate('recording', m.chat)
}
if (m.message) {
ham.sendPresenceUpdate('composing', m.chat)
}
		
if (isCmd && !isUser){
pendaftar.push(m.sender)
fs.writeFileSync('./database/user/user.json', JSON.stringify(pendaftar))
} 
// Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].xp
   }
}

const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].level
    }
}

const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    return _level[position].jid
    }
 }

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    _level[position].xp += amount
    fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}

const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
    if (_level[i].jid === userId) {
position = i
    }
})
if (position !== false) {
    _level[position].level += amount
    fs.writeFileSync('./database/level.json', JSON.stringify(_level))
    }
}

const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
if (_level[i].id === userId) {
position = i
found = true
}
    })
    if (found === false && position === null) {
const obj = { id: userId, xp: 0, level: 1 }
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
return 99
    } else {
return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
var role = 'Copper V'
if (levelRole <= 5) {
role = 'Copper IV'
} else if (levelRole <= 10) {
role = 'Copper III'
} else if (levelRole <= 15) {
role = 'Copper II'
} else if (levelRole <= 20) {
role = 'Copper I'
} else if (levelRole <= 25) {
role = 'Silver V'
} else if (levelRole <= 30) {
role = 'Silver IV'
} else if (levelRole <= 35) {
role = 'Silver III'
} else if (levelRole <= 40) {
role = 'Silver II'
} else if (levelRole <= 45) {
role = 'Silver I'
} else if (levelRole <= 50) {
role = 'Gold V'
} else if (levelRole <= 55) {
role = 'Gold IV'
} else if (levelRole <= 60) {
role = 'Gold III'
} else if (levelRole <= 65) {
role = 'Gold II'
} else if (levelRole <= 70) {
role = 'Gold I'
} else if (levelRole <= 75) {
role = 'Platinum V'
} else if (levelRole <= 80) {
role = 'Platinum IV'
} else if (levelRole <= 85) {
role = 'Platinum III'
} else if (levelRole <= 90) {
role = 'Platinum II'
} else if (levelRole <= 95) {
role = 'Platinum I'
} else if (levelRole < 100) {
role = 'Exterminator'
}

var levelRoles = getLevelingLevel(m.sender)
var roles = 'Cop V'
if (levelRoles <= 5) {
roles = 'Cop IV'
} else if (levelRoles <= 10) {
roles = 'Cop III'
} else if (levelRoles <= 15) {
roles = 'Cop II'
} else if (levelRoles <= 20) {
roles = 'Cop I'
} else if (levelRoles <= 25) {
roles = 'Sil V'
} else if (levelRoles <= 30) {
roles = 'Sil IV'
} else if (levelRoles <= 35) {
roles = 'Sil III'
} else if (levelRoles <= 40) {
roles = 'Sil II'
} else if (levelRoles <= 45) {
roles = 'Sil I'
} else if (levelRoles <= 50) {
roles = 'Gol V'
} else if (levelRoles <= 55) {
roles = 'Gol IV'
} else if (levelRoles <= 60) {
roles = 'Gol III'
} else if (levelRoles <= 65) {
roles = 'Gol II'
} else if (levelRoles <= 70) {
roles = 'Gol I'
} else if (levelRoles <= 75) {
roles = 'Plat V'
} else if (levelRoles <= 80) {
roles = 'Plat IV'
} else if (levelRoles <= 85) {
roles = 'Plat III'
} else if (levelRoles <= 90) {
roles = 'Plat II'
} else if (levelRoles <= 95) {
roles = 'Plati I'
} else if (levelRoles < 100) {
roles = 'Exter'
}
//function levelingnya
if (m.isGroup && isLeveling && isUser && ham.public) {
const currentLevel = getLevelingLevel(m.sender)
const checkId = getLevelingId(m.sender)
try {
    addCooldown(m.sender)
    if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
    const amountXp = Math.floor(Math.random() * 10) + 200
    const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
    const getLevel = getLevelingLevel(m.sender)
    addLevelingXp(m.sender, amountXp)
    if (requiredXp <= getLevelingXp(m.sender)) {
    addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
ham.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

} catch (err) {
console.error(err)
}
    }
if (autoreadsw) {
if (from === 'status@broadcast') {
ham.chatRead(from)
}
}


const hariRaya = new Date('4 21, 2023 00:00:00')
const tahunBaru = new Date('1 01, 2023 00:00:00')
const sendMediaURL = async (from, url, caption, options = {}) => {
		    let mime = '';
		    let res = await axios.head(url)
		    mime = res.headerd["content-type"]
		    let type = mime.split("/")[0]+"Message"
		    if (mime.split("/")[0] === "image") {
		       var img = await getBuffer(url)
		       return ham.sendMessage(from, { image: img, caption: caption }, options)
		    } else if (mime.split("/")[0] === "video") {
		       var vid = await getBuffer(url)
		       return ham.sendMessage(from, { video: vid, caption: caption }, options)
		    } else if (mime.split("/")[0] === "audio") {
		       var aud = await getBuffer(url)
		       return ham.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
		    } else {
		       var doc = await getBuffer(url)
		       return ham.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
		    }
		}
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const seli = tahunBaru - sekarang

const ahari = Math.floor( seli / (1000 * 60 * 60 * 24));
const bjam = Math.floor( seli % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const cmmenit = Math.floor( seli % (1000 * 60 * 60) / (1000 * 60));
const detik = Math.floor( seli % (1000 * 60) / 1000);
const eltah = `${ahari} Days ${bjam} Hours ${cmmenit} Minute ${detik} Second`

const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari} Days ${jjam} Hours ${mmmenit} Minute ${ddetik} Second`

async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
  let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
  let now = Date.now();
  let distance = from - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
ham.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./database/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./database/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./database/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./database/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./database/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
let picek = pickRandom(picaks)
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/namespace/key')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik .owner untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "5123658817728409", log0, 2022, "Ilham ~ Multi Device", "6281233649676@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await ham.sendMessage(from, {text:sami}, {quoted:m})
}*/

// auto set bio
	if (m.message) {
		let times = speed()
    let late = speed() - times
		await ham.setStatus(`Speed: ${late.toFixed(4)} Ms | Runtime: ${runtime(process.uptime())} | OS Uptime: ${runtime(os.uptime())}`)
	}
	
// auto set desc gc
    /*if (m.message) {
		let times = speed()
    let lato = speed() - times
		await ham.groupUpdateDescription('6285232599038-1497274458@g.us', `[ BOT ONLINE ]\n| Runtime: ${runtime(process.uptime())}\n| Ram: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n| Speed: ${lato.toFixed(4)} Ms`)
	}*/

// AntiLink
if (AntiLink) {
linkgc = await ham.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgc}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await ham.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ham.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!ham.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./mongoDB/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© ||77+ - X - Ilham", m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ham.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Ilham - X - Ilham", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
ham.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
ham.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
ham.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) ham.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) ham.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) ham.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
ham.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) ham.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) ham.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
ham.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

//Cerpen
async function cerpen (category) {
    return new Promise((resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
    link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
    let $$ = cheerio.load(res.data)
    let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
    }
    resolve(hasil)
})
})
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await ham.sendText(room.x, str, m, { mentions: parseMention(str) } )
await ham.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: ham.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ham.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
ham.ev.emit('messages.upsert', msg)
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "Utamakan jgn spam!", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "9999999",
"retailerId": "MyGans",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'Ilham-MD', //Kasih namalu
orderTitle: 'Hooh',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"Ilham",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'Ilham',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {"title": `github.com/KilluaBot`},"jpegThumbnail": tb2 }}
const frkey = (teks) => {ham.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${namebot}`,"body": `Hai kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4`}}}, { quoted: m})}
const freply = (teks) => {
ham.sendMessage(m.chat, teks, {contextInfo:{externalAdReply:{
showAdAttribution: true,
mediaUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4",
title:`Selamat ${salam} ${pushname}`,
body: 'Jangan Lupa Donasi',
mediaType: 1,
previewType: "PHOTO",
jpegThumbnail: fs.readFileSync("./settings/log0.jpg"),
thumbnailUrl: "https://l.top4top.io/p_2151xup9t0.jpeg",
thumbnail: fs.readFileSync("./settings/log0.jpg"),
sourceUrl: "https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4"}}}, { quoted: m})
}
const ftext = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "status@broadcast" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}`,
"title": `Ilham-MD`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
const ikln =`
#WTS
🛒RDP / VPS Bulanan🛒
💻Ram 1   : 15K 
💻Ram 2   : 25K
💻Ram 4   : 35K
💻Ram 8   : 60K (SG REGION)
💻Ram 16 : 80K (SG REGION)
💻Ram 32 : 150K (SG REGION)
💻Ram 64 : 250K

🔴Azure Pay As You Go
Price : 80K
🎊Fast Respon Di jam tertentu🎉
❏ ➪ Minat hub : wa.me/6288221255023
❏ ➪ Testi https://t.me/testisonel1
❏ ➪ Payment : Gopay, Bnk Jgo, dana, Qris All payment
`
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
let Bandwit = await checkBandwidth()
let kunyek = '```'
let bio = await ham.fetchStatus(m.sender).catch(_ => 'Private!')
const version = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
const qtod = m.quoted? "true":"false"
// Case Nye Sini Ngab
switch(command) {
case 'topup': {
const ftex = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "status@broadcast" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`Support By this.ilham.`,
"title": `Ilham-MD`,
 'jpegThumbnail': log0
}
} 
}
let butts = [
{buttonId: 'emel', buttonText: {displayText: 'ML'}, type: 1},
{buttonId: 'efef', buttonText: {displayText: 'FF'}, type: 1}
]
let buttonMessage = {
	text: `Mau Topup apa?`,
	buttons: butts,
	footer: `Murmer & Fast Om:v`,
}
ham.sendMessage(m.chat, buttonMessage, {quoted:ftex})
}
break
case 'emel': {
ham.sendMessage(m.chat, { image: { url: `https://i.ibb.co/m86xdkW/gege.png` }, text: `Dipilih-pilih dulu:v`},{quoted:m})
}
break
case 'efef': {
ham.sendMessage(m.chat, { image: { url: `https://i.ibb.co/4VWdKfJ/gege.png` }, text: `Dipilih-pilih dulu:v`},{quoted:m})
}
break
// akhir fitur anime
// Eval Ada Disini
default:
if (budy.includes(`Assalamualaikum`)) {
                  m.reply(`Waalaikumsalam`)
                  }
if (budy.includes(`assalamualaikum`)) {
                  m.reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`thanks`)) {
                  m.reply(`Sama Sama Kak😁`)
                  }
		if (budy.includes(`makasih`)) {
                  m.reply(`Sama Sama Kak😁`)
                  }
                    if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }  
  if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
  if (budy.startsWith("$")) {
					if (!isCreator) return m.reply(mess.owner)
				console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) m.reply(`${stdout}`)
				})
			}
                  /**if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith("$ ")) {
					if (!isCreator) return m.reply(mess.owner)
				console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Owner!`))
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) m.reply(`${stdout}`)
				})
			}
			**/
// Anti Tag ( FenZo||77+ )
const listTag = ["79131970045@s.whatsapp.net","6281233649676@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( FenZo||77+ )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
ham.readMessages(m.chat, m.sender, [m.key.id])
ham.sendImageAsSticker(m.chat, `https://telegra.ph/file/ffd16a4e7b3d9c1f894f7.png`, m, {packname: packname, author: author})
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281233649676")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
ham.readMessages(m.chat, m.sender, [m.key.id])
ham.sendImageAsSticker(m.chat, `https://telegra.ph/file/ffd16a4e7b3d9c1f894f7.png`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
ham.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
ham.sendMessage("6281233649676@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
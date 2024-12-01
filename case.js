/* 

#- Credits By Skyzopedia
 • Contact: 6287786336665
 • Telegram: @Fahrioffic
 
 
#- Recode By :
 • Fahri - OfficiaL


# JANGAN HAPUS CREDITS, HARGAI DEVELOPER!!

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('node-yt-dl');
const speed = require('performance-now');
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const ytSearch = require('yt-search')
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { LoadDataBase } = require('./src/message');
const { OrderKuota } = require("./lib/orderkuota")
const orderkuota = new OrderKuota()
const { TelegraPh, uploaderV2 } = require('./lib/uploader');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, allDl, Ytdl, cekKhodam } = require('./lib/screaper');
const { pinterest, pinterest2, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, styletext, ssweb, igstalk, tts, remini, mediafire } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, toRupiah } = require('./lib/function');


module.exports = Sky = async (Sky, m, chatUpdate, store) => {
	try {
await LoadDataBase(Sky, m)
const botNumber = await Sky.decodeJid(Sky.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = '.'
const isCmd = body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? true : owners.includes(m.sender) ? true : false
const isPremium = premium.includes(m.sender)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const reply = m.reply;
//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(`### COMMAND NOTIFICATION ###`), chalk.blue.bold(`\n💬 Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n👤 Sender :`), chalk.white.bold(m.isGroup ? `Group • ${m.sender.split("@")[0]}` : m.sender.split("@")[0] +`\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Marketplace - ${namaOwner}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Marketplace - ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qtroli = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },"message": {"orderMessage": {"orderId": "594071395007984","thumbnail": await reSize("./src/media/menu.jpg", 200, 200),"itemCount": 9999999999,"status": "INQUIRY","surface": "CATALOG","message": `𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭 𝐒𝐤𝐲𝐳𝐨𝐩𝐞𝐝𝐢𝐚`, "orderTitle": "skyzopedia","sellerJid": "0@s.whatsapp.net","token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==","totalAmount1000": "500000000000000","totalCurrencyCode": "IDR"}}}

//============= [ EVENT GROUP ] ===============================================

global.reza = false

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Sky.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
Sky.sendMessage(m.chat, {text: `*- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Sky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Sky.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
Sky.sendMessage(m.chat, {text: `*- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Sky.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Sky.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

Sky.autoshalat = Sky.autoshalat ? Sky.autoshalat : {}
let id = m.chat 
if (id in Sky.autoshalat) {
return false
}
let jadwalSholat = { shubuh: '04:29', terbit: '05:44', dhuha: '06:02', dzuhur: '12:02', ashar: '14:49', magrib: '17:52', isya: '19:01' }
const datek = new Date((new Date).toLocaleString("en-US", {timeZone: "Asia/Jakarta"}))
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu && m.isGroup) {
let caption = `
*\`[!] System Notifikasi\`*

Waktu *${sholat}* telah tiba
ambilah air wudhu dan segeralah sholat 

_Pukul *${waktu}* Yogyakarta dan sekitarnya_`
Sky.autoshalat[id] = [
await Sky.sendMessage(m.chat, {text: caption, mentions: [], contextInfo: { isForwarded: true, forwardingScore: 9999, mentionedJid: [], forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }}}, {quoted: qlive}),
setTimeout(async () => {
delete Sky.autoshalat[m.chat]
}, 50000)]
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Sky.sendMessage(m.chat, {text: `*Skyzopedia Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *GrupBebas Promosi 1 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/FfbJmoSoTy12VZyXJTzXPT
* *Grup Bebas Promosi 3 :*
https://chat.whatsapp.com/FYzsZkNZnGu7a4Y32aGx6j
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s

*👤 Contact Skyzopedia*
* *WhatsApp Utama :*
+6287786336665
* *WhtasApp Cadangan :*
+6287786336665
https://t.me/Fahrioffic
`}, {quoted: null})
}
}


if (m.text.toLowerCase().startsWith("list-")) {
let cc = m.text.split("-")[1]
let check = list.find(e => e.key == cc.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

var example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function capital(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: Sky.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*Skyzopedia* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Skyzopedia Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*👤 Contact Skyzopedia*
* *WhatsApp Utama :*
+6287786336665
* *WhtasApp Cadangan :*
+6287786336665
https://t.me/Fahrioffic

*🏠 Join Grup Bebas Promosi*
* *GrupBebas Promosi 1 :*
https://chat.whatsapp.com/CWO0TqYeCVbIoY4YzsTxb7
* *Grup Bebas Promosi 2 :*
https://chat.whatsapp.com/FfbJmoSoTy12VZyXJTzXPT
* *Grup Bebas Promosi 3 :*
https://chat.whatsapp.com/FYzsZkNZnGu7a4Y32aGx6j
* *Channel Testimoni :*
https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Jasa Suntik Sosmed 🌟*

*- Layanan Instagram :*
- 500 Followers : Rp8000
- 1000 Like : Rp4000
- 1000 Views : Rp4000

*- Layanan Tiktok :*
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

*- Layanan Telegram :*
* 500 Member CH : Rp8000

*- Layanan Whats'App :*
* 100 Member CH : Rp12.000

*Syarat & Ketentuan :*
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Sky.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

//============= [ COMMANDS ] ====================================================

switch (command) {
case "menu": {
const teksnya = `
╭———⪼ *⌜ INFORMASI BOT ⌟*
│• *Botname :* Simpel Botz
│• *Mode :* ${Sky.public ? "Public": "Self"}
│• *Creator :* @${global.owner}
│• *Runtime Bot :* ${runtime(process.uptime())}
│• *Uptime Vps :* ${runtime(os.uptime())}
╰——⪼
  
 *乂 I N F O - U S E R*
  • *Number :* ${m.sender.split("@")[0]}
  • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}

 *乂 Simpelz Bot Menu*
  • .allmenu
 
*Terima Kasih telah menggunakan layanan bot kami*
*Jika menemukan eror silahkan hubungi owner*
`
await Sky.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: true, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: true, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}
break
case "allmenu": case "xxxxx": {
let teksnya = `
\`\`\`• Botname : ${global.botname2}\`\`\`
\`\`\`• Platform : ${await nou.os.oos()}\`\`\`
\`\`\`• Mode : ${Sky.public ? "Public": "Se"}\`\`\`
\`\`\`• Creator : ${global.ownerUtama}\`\`\`
\`\`\`• Uptime : ${runtime(process.uptime())}\`\`\`

⪼ *⌜ Othermenu ⌟*
┌ㅤ◦.ai
│ㅤ◦.gpt
│ㅤ◦.cekidch
│ㅤ◦.tourl
│ㅤ◦.tourl2
│ㅤ◦.tohd
│ㅤ◦.translate
│ㅤ◦.qc
│ㅤ◦.stickerwm
│ㅤ◦.sticker
│ㅤ◦.shortlink
│ㅤ◦.yts
└ㅤ◦.pinterest

⪼ *⌜ Downloadmenu ⌟*
┌ㅤ◦.tiktok
│ㅤ◦.tiktokmp3
│ㅤ◦.ytmp3
│ㅤ◦.ytmp4
│ㅤ◦.play
│ㅤ◦.playvid
│ㅤ◦.gitclone
└ㅤ◦.mediafire

⪼ *⌜ Storemenu ⌟*
┌ㅤ◦.addlist
│ㅤ◦.getlist
│ㅤ◦.dellist
│ㅤ◦.done
│ㅤ◦.proses
│ㅤ◦.jpm
│ㅤ◦.jpm1
│ㅤ◦.jpm2
│ㅤ◦.jpmtesti
│ㅤ◦.jpmslide
│ㅤ◦.jpmslideht
│ㅤ◦.pushkontak
│ㅤ◦.pushkontak2
│ㅤ◦.payment
│ㅤ◦.produk
└ㅤ◦.subdomain

⪼ *⌜ Store Panel ⌟*
┌ㅤ◦ .buypanel
└ㅤ◦ .batalbeli

⪼ *⌜ Pterodactymenu ⌟*
┌ㅤ◦.addpremium
│ㅤ◦.delpremium
│ㅤ◦.listpremium
│ㅤ◦.1gb - unlimited
│ㅤ◦.cadmin
│ㅤ◦.cadmin2
│ㅤ◦.delpanel
│ㅤ◦.deladmin
│ㅤ◦.listpanel
│ㅤ◦.listadmin
│ㅤ◦.hackbackpanel
│ㅤ◦.installpanel
│ㅤ◦.installthema
│ㅤ◦.uninstallpanel
│ㅤ◦.uninstalltema
└ㅤ◦.uninstalltema

⪼ *⌜ Groupmenu ⌟*
┌ㅤ◦.add
│ㅤ◦.kick
│ㅤ◦.close
│ㅤ◦.open
│ㅤ◦.hidetag
│ㅤ◦.kudetagc
│ㅤ◦.leave
│ㅤ◦.leave2
│ㅤ◦.tagall
│ㅤ◦.promote
│ㅤ◦.demote
│ㅤ◦.resetlinkgc
│ㅤ◦.antilink
│ㅤ◦.antilink2
│ㅤ◦.welcome
└ㅤ◦.linkgc

⪼ *⌜ Ownermenu ⌟*
┌ㅤ◦.addowner
│ㅤ◦.listowner
│ㅤ◦.delowner
│ㅤ◦.autoread
│ㅤ◦.autopromosi
│ㅤ◦.autoreadsw
│ㅤ◦.autotyping
│ㅤ◦.self/public
│ㅤ◦.setimgmenu
│ㅤ◦.setppbot
│ㅤ◦.clearsession
│ㅤ◦.clearchat
│ㅤ◦.getsc
│ㅤ◦.getcase
│ㅤ◦.joingc
│ㅤ◦.joinch
│ㅤ◦.upchannel
└ㅤ◦.upchannel2
`
Sky.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'H U T A O - A I',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./src/media/thumbdoc.jpg"),
caption: `\n${teksnya}`,
}, { quoted: qloc,ephemeralExpiration: 86400});
}
break

//================================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await Sky.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case'play': {
if (!text) return m.reply(example('dj plat kt'))
let wait = await Sky.sendMessage(m.chat, {
text: `_Searching.. [ ${text} ] 🔍_`
}, {
quoted: m,
ephemeralExpiration: 86400
})
let search = await ytSearch(text)
let download = search.videos[Math.floor(Math.random() * search.videos.length)]
if (!search) return m.reply("Video Not Found, Try Another Title");
let { url } = download
await fetchJson(`https://diibot-api.vercel.app/api/download/youtube?url=${url}&type=audio&quality=128`).then((data) => {
Sky.sendMessage(m.chat, {
text: `_Mengirim.. [ ${text} ] 🔍_`,
edit: wait.key
}, {
quoted: m,
ephemeralExpiration: 86400
})
Sky.sendMessage(m.chat, { audio: { url: data.result.url }, mimetype: "audio/mpeg", contextInfo: { externalAdReply: { thumbnailUrl: data.result.thumbnail, title: data.result.title, body: null, sourceUrl: null, renderLargerThumbnail: true, mediaType: 1}}}, { quoted: m })
Sky.sendMessage(m.chat, {
react: {
text: '🎧',
key: m.key
}
})
}).catch((e) => m.reply(mess.error))
}
break

//================================================================================

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await Sky.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://widipe.com/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await Sky.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Sky.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson(`https://widipe.com/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await Sky.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case'ytmp4':
case 'ytv':
case 'ytvideo': {
if (!text) return m.reply(example('linknya'))
if (!isUrl(text)) return m.reply("*[ System Notice ]* Invalid Link")
m.reply(mess.wait)
await fetchJson(`https://diibot-api.vercel.app/api/download/youtube?url=${text}&type=video&quality=360`).then((data) => {
let caption = `${data.result.title}

${data.result.description}`
conn.sendMessage(m.chat, { video: { url: data.result.url }, caption: caption, mimetype: 'video/mp4' }, { quoted: m })
}).catch((e) => m.reply(mess.error))
}
break

//================================================================================

case 'mediafire': {
if (!text) return m.reply(example('linknya'))
if (!isUrl(text)) return m.reply("*[ System Notice ]* Invalid Link")
m.reply(mess.wait)
await fetchJson(`https://diibot-api.vercel.app/api/download/mediafire?url=${text}`).then((data) => {
conn.sendMessage(m.chat, { document: { url: data.result.download }, fileName: data.result.filename, mimetype: data.result.mimetype, caption: mess.done }, { quoted: m })
}).catch((e) => m.reply(mess.error))
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link Tautan Tidak Valid!")
await Sky.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Sky.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link Tautan Tidak Valid!")
try {
 let [, user, repo] = args[0].match(regex) || []
 repo = repo.replace(/.git$/, '')
 let url = `https://api.github.com/repos/${user}/${repo}/zipball`
 let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
 Sky.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Sky.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Sky.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Sky.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Sky.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://xnxx.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl*
${res.data.toString()}
`
await Sky.sendMessage(m.chat, {text: link}, {quoted: m})
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Sky.sendMessage(m.chat, {text: a.url}, {quoted: m})
}

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Sky.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await Sky.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Sky.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `🔎 Result From Pinterest`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Sky.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Sky.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": {
if (!text) return m.reply(example("apa itu nodejs"))
await fetchJson("https://widipe.com/openai?text="+text).then(async (res) => {
await m.reply(res.result.toString())
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Sky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 812,
"height": 968,
"scale": 2,
"messages": [
 {
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": m.pushName,
"photo": {
 "url": ppuser
}
},
"text": text,
"replyMessage": {}
 }
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64')
 let tempnya = "./database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Sky.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Sky.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'skyzopedia.png');

await Sky.sendMessage(m.chat, {text: `${directLink}`}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await Sky.downloadAndSaveMediaMessage(qmsg)
let result = await TelegraPh(await fs.readFileSync(foto))
await Sky.sendMessage(m.chat, {text: `${result}`}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await Sky.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Sky.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Sky.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor Tidak Terdaftar Di WhatsApp")
const res = await Sky.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Sky.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor Tidak Terdaftar Di WhatsApp")
const res = await Sky.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil Mengeluarkan ${input.split("@")[0]} Dari Grup Ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Sky.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
await Sky.groupRevokeInvite(m.chat)
m.reply("Sukses Reset Link Grup ✅")
}
break

//================================================================================

//================================================================================

case "tagall": {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Sky.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Sky.groupInviteCode(m.chat)
var teks = `
${urlGrup}

- ${m.metadata.subject}
`
await Sky.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Sky.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link Tautan Tidak Valid!")
let result = text.split('https://chat.whatsapp.com/')[1]
await Sky.groupAcceptInvite(result)
m.reply("Sukses Join Grup")
}
break
//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return m.reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link Tautan Tidak Valid!")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Sky.newsletterMetadata("invite", result)
await Sky.newsletterFollow(res.id)
m.reply(`*Berhasil Join Saluran ✅*
* Nama Channel : *${res.name}*
* Total Pengikut : *${res.subscribers + 1}*`)
}
break
case "welcome": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.isGroup) return m.reply(mess.group);

 if (!q) {
return m.reply("Silakan masukkan teks `on` atau `off` setelah perintah .welcome untuk mengaktifkan atau menonaktifkan Welcome Message.");
 }
 if (!db.groups[m.chat]) {
db.groups[m.chat] = {};
 }
 if (db.groups[m.chat].welcome === undefined) {
db.groups[m.chat].welcome = false;
 }

 if (q.toLowerCase() == "on") {
if (db.groups[m.chat].welcome === true) {
return m.reply("Welcome Message sudah aktif di grup ini!");
}
db.groups[m.chat].welcome = true;
await m.reply("Berhasil mengaktifkan Welcome Message di grup ini.");
 } else if (q.toLowerCase() == "off") {
if (db.groups[m.chat].welcome === false) {
return m.reply("Welcome Message sudah nonaktif di grup ini!");
}
db.groups[m.chat].welcome = false;
await m.reply("Berhasil menonaktifkan Welcome Message di grup ini.");
 } else {
return m.reply("Input tidak valid. Silakan ketik `.welcome on` untuk mengaktifkan atau `.welcome off` untuk menonaktifkan Welcome Message.");
 }
}
break
//================================================================================
case "antilink": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.isGroup) return m.reply(mess.group);

 if (!q) {
return m.reply("Silakan masukkan teks `on` atau `off` setelah perintah .antilink untuk mengaktifkan atau menonaktifkan antilink.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].antilink === true) {
return m.reply("Antilink Group sudah aktif di grup ini!");
}
if (global.db.groups[m.chat].antilink2 === true) {
global.db.groups[m.chat].antilink2 = false;
}
global.db.groups[m.chat].antilink = true;
await m.reply("Berhasil menyalakan Antilink Group di grup ini.");
 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].antilink === false) {
return m.reply("Antilink Group tidak aktif di grup ini!");
}
global.db.groups[m.chat].antilink = false;
await m.reply("Berhasil mematikan Antilink Group di grup ini.");
 } else {
return m.reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .antilink.");
 }
}
break;
//================================================================================
case "mute": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.isGroup) return m.reply(mess.group);

 if (!q) {
return m.reply("Silakan masukkan teks `on` atau `off` setelah perintah .mute untuk mengaktifkan atau menonaktifkan mute.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 if (global.db.groups[m.chat].mute === undefined) {
global.db.groups[m.chat].mute = false;
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].mute === true) {
return m.reply("Grup Ini Sudah Dalam Keadaan Mute!");
}
global.db.groups[m.chat].mute = true;
await m.reply("Berhasil Mute Grup Ini");
 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].mute === false) {
return m.reply("Grup Ini Tidak Dalam Keadaan Mute!");
}
global.db.groups[m.chat].mute = false;
await m.reply("Berhasil Unmute Grup Ini");
 } else {
return m.reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .mute.");
 }
}
break;

//================================================================================
case "antilink2": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.isGroup) return m.reply(mess.group);

 if (!q) {
return m.reply("Silakan masukkan teks `on` atau `off` setelah perintah .antilink2 untuk mengaktifkan atau menonaktifkan antilink2.");
 }
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 if (global.db.groups[m.chat].antilink2 === undefined) {
global.db.groups[m.chat].antilink2 = false;
 }

 if (q.toLowerCase() == "on") {
if (global.db.groups[m.chat].antilink2 === true) {
return m.reply("Antilink2 Group Sudah Aktif Di Grup Ini!");
}
if (global.db.groups[m.chat].antilink === true) {
global.db.groups[m.chat].antilink = false;
}

global.db.groups[m.chat].antilink2 = true;
await m.reply("Berhasil Menyalakan Antilink2 Group Di Grup Ini");

 } else if (q.toLowerCase() == "off") {
if (global.db.groups[m.chat].antilink2 === false) {
return m.reply("Antilink2 Group Tidak Aktif Di Grup Ini!");
}

global.db.groups[m.chat].antilink2 = false;
await m.reply("Berhasil Mematikan Antilink2 Group Di Grup Ini");

 } else {
return m.reply("Perintah tidak valid. Silakan masukkan `on` atau `off` setelah perintah .antilink2.");
 }
}
break;
//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return m.reply("Status Grup Sudah Terbuka!")
await Sky.groupSettingUpdate(m.chat, 'not_announcement')
return m.reply(`Berhasil Membuka Grup`)
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return m.reply("Status Grup Sudah Tertutup!")
await Sky.groupSettingUpdate(m.chat, 'announcement')
return m.reply(`Berhasil Menutup Grup`)
} else {}
}
break;

//================================================================================
case "kudetagc": case "kudeta": {
 if (!isCreator) return m.reply(mess.owner);
 if (!m.isGroup) return m.reply(mess.group);
 if (!global.db.groups[m.chat]) {
global.db.groups[m.chat] = {};
 }
 let memberFilter = await m.metadata.participants
.map(v => v.id)
.filter(e => e !== botNumber && e !== m.sender);
 if (memberFilter.length < 1) return m.reply("Grup ini sudah tidak ada member!");
 await m.reply("Kudeta Grup By Skyzo Starting 🔥");
 for (let i of memberFilter) {
try {
await Sky.groupParticipantsUpdate(m.chat, [i], 'remove');
await sleep(2000);
} catch (error) {
console.error(`Failed to remove member ${i}: ${error.message}`);
await m.reply(`Gagal mengeluarkan member dengan ID ${i}`);
}
 }

 await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️");
}
break;
//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return m.reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Sky.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Sky.sendMessage(m.chat, {text: `Sukses ${action} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Uninstall Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply('Sukses Uninstall Tema ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtema": case "installthema": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
let teksnya = `\nPilih Jenis Tema Yang Tersedia`
await m.reply(teksnya);
}
break

//================================================================================

case "installthema1": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installthema2": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtema3": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/FYzsZkNZnGu7a4Y32aGx6j\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `sudo rm -rf /etc/mysql /var/lib/mysql`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {
await m.reply("Memproses Uninstall Server Panel")
ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply('Berhasil Uninstall Server Panel ✅');
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `sudo apt-get remove --purge mysql* -y`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings`
m.reply(teks);
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses Install Server Panel")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply('Berhasil Menjalankan Wings ✅')
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("yes\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
let teks = `
*Hackback Panel Sukses ✅*

* *Password :* ${newuser}
* *Domain :* ${newpw}`
m.reply(teks);
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Password :* ${password}
* *Link Login :* ${global.domain}
* *Created :* ${user.created_at.split("T")[0]}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
m.reply(teks);
}
break

//================================================================================

case "cadmin2": {
if (!text) return m.reply(example("nama,6283XXX"))
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(example("nama,6283XXX"))
if (!text.split(",")) return m.reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return m.reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return m.reply(example("nama,6283XXX"))
var clien = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Sky.onWhatsApp(ceknya)
if (!check[0].exists) return m.reply("Nomor Buyyer Tidak Valid!")
let username = buyyer.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
await m.reply(`*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor ${ceknya}`)
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Password :* ${password}
* *Link :* ${global.domain}
* *Created :* ${user.created_at.split("T")[0]}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
m.reply(teks);
}
break

//================================================================================

case "addlist": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("key|teksnya"))
const [ keys, teks ] = text.split("|")
if (!keys || !teks) return m.reply(example("key|teksnya"))
let ceklist = list.find(e => e.key == keys.toLowerCase())
if (ceklist) return m.reply("Key respon sudah terdaftar di database list, silahkan gunakan Key lain!")
await list.push({
key: keys.toLowerCase(), 
respon: teks
})
await fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
let teksnya = `\nBerhasil menambah list ✅\nCommand : *list-${keys.toLowerCase()}*`
m.reply(teksnya);
}
break

//================================================================================
case "dellist": {
 if (!isCreator) return m.reply(mess.owner);
 if (list.length < 1) return m.reply("Tidak Ada List");
 if (!text) {
let keyListText = "Pilih Salah Satu Key List:\n\n";
list.forEach((item, index) => {
keyListText += `${index + 1}. Key: ${item.key}\n`;
});

keyListText += "\nBalas dengan nama key yang ingin dihapus.";
return m.reply(keyListText);
 }
 let ceklist = list.find(e => e.key === text.toLowerCase());
 if (!ceklist) return m.reply("Key respon tidak ditemukan!");
 let posisi = list.indexOf(ceklist);
 await list.splice(posisi, 1);
 await fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2));

 m.reply(`Berhasil menghapus list ✅\nKeylist terhapus: *${text.toLowerCase()}*`);
}
break
case "getlist": {
if (!isCreator) return m.reply(mess.owner);
if (!text) {
if (list.length < 1) return m.reply("Tidak ada list!"); 
let teks = "Daftar Key List:\n\n";
for (let i of list) {
teks += `*Key:* ${i.key}\n`;
teks += `*Command:* list-${i.key}\n\n`;
}
teks += "Untuk melihat detail, ketik:\n*.getlist [key]*\n";
teks += "Untuk menghapus list, ketik:\n*.dellist [key]*";
return m.reply(teks);
}
let keys = text.toLowerCase();
let ceklist = list.find(e => e.key === keys);
if (!ceklist) return m.reply("Key respon tidak ditemukan!");
m.reply(`*Key:* ${ceklist.key}\n*Respon:* ${ceklist.respon}`);
}
break

//================================================================================

case "addprem": case "addpremium": {
if (!isCreator) return m.reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil Premium ${input2}`)
}
break

//================================================================================

case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n`
for (let i of premium) {
teks += `* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Sky.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delpremium": case "delprem": {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Sukses menghapus premium
nomor ${input2}`)
}
break

//================================================================================
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* https://sfile.mobi/5v8VXNw4tG2
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Sky.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak Ada Admin Panel")
var teks = "\n *- [ List all admin panel ]*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
m.reply(teks);
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *- [ List all server panel ]*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
m.reply(messageText);
}
break

//================================================================================
case "deladmin": {
if (!isCreator) return m.reply(mess.owner);

let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res2 = await cek.json();
let users = res2.data.filter(i => i.attributes.root_admin == true);
if (users.length < 1) return m.reply("Tidak Ada Admin Panel");

let teks = `Silakan Pilih Admin Panel untuk Dihapus:\n\n` +
`- Total Admin Panel: ${users.length} Admin\n\n`;

let adminList = users.map((i, index) => {
return `${index + 1}. ID: ${i.attributes.id}\nNama: ${i.attributes.first_name}`;
}).join('\n\n');

teks += adminList + `\n\nKetik nomor admin yang ingin dihapus (contoh: 1).`;

m.reply(teks);
const collector = m.chat.onMessage(async (message) => {
let input = parseInt(message.body.trim());
if (isNaN(input) || input < 1 || input > users.length) {
return m.reply("Nomor yang Anda masukkan tidak valid. Ketik nomor yang sesuai.");
}

let selectedAdmin = users[input - 1];
let del = await fetch(`${domain}/api/application/users/${selectedAdmin.attributes.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});

if (del.status === 204) {
m.reply(`Admin dengan ID: ${selectedAdmin.attributes.id} dan Nama: ${selectedAdmin.attributes.first_name} berhasil dihapus.`);
} else {
m.reply(`Gagal menghapus admin. Silakan coba lagi.`);
}
m.chat.offMessage(collector);
});
}
break;

//================================================================================

break
case "delpanel": case "hapuspanel": {
if (!isCreator) return m.reply("Khusus Owner Fahri - OfficiaL")
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply("`[ Contoh ]` *.delpanel* idservernya\n\nuntuk melihat id server ketik *.listpanel*")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
m.reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

break

//================================================================================

case "pushkontak": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))

const parts = text.split("|")
if (parts.length !== 2) return m.reply(example("idgrup|pesannya"))

const [idgc, pes] = parts
const teks = pes
const jidawal = m.chat

try {
const data = await Sky.groupMetadata(idgc)
const halls = await data.participants
.filter(v => 
v.id.endsWith('.net') && 
v.id !== botNumber && 
v.id.split("@")[0] !== global.owner
)
.map(v => v.id)

 await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

 for (let mem of halls) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'

const sentMsg = await Sky.sendMessage(mem, { 
contacts: { 
 displayName: namaOwner, 
 contacts: [{ vcard }] 
}
})

await Sky.sendMessage(mem, { text: teks }, { quoted: sentMsg })
await sleep(global.delayPushkontak)
 }

 await Sky.sendMessage(jidawal, {
text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`
 }, { quoted: m })

} catch (error) {
 console.error("Error in pushkontak:", error)
 await m.reply("Terjadi kesalahan saat memproses pushkontak")
}
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Sky.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'
const sentMsg= await Sky.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Sky.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Sky.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break
//================================================================================

case "jpmslide": {
if (!isCreator) return m.reply(mess.owner)
let allgrup = await Sky.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`)
for (let i of res) {
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Sky.sendMessage(jid, {text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return m.reply(mess.owner)
let allgrup = await Sky.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`)
for (let i of res) {
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Sky.sendMessage(jid, {text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(example("teksnya"))

const bannedGroups = global.bannedGroups;
let allgrup = await Sky.groupFetchAllParticipating();
let res = Object.keys(allgrup);
let count = 0;
const jid = m.chat;
const teks = q;
await m.reply(`Memproses Pengiriman Pesan Ke ${res.length} Grup Chat`);

for (let i of res) {
if (bannedGroups.includes(i)) {
console.log(`Grup ${i} diblokir, melewati...`);
continue;
}
try {
await Sky.sendMessage(i, { text: `${teks}` }, { quoted: qtext });
count += 1;
} catch (err) {
console.error(`Gagal mengirim ke grup ${i}:`, err);
}
await sleep(global.delayJpm);
}

await Sky.sendMessage(jid, { 
text: `Pesan Berhasil Dikirim ✅\nTotal Pesan : ${count}` 
}, { quoted: qlocJpm });
}
break;


//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Sky.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Sky.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Sky.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Sky.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Sky.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================
case "jpmtesti": {
if (!isCreator) return m.reply(mess.owner); // Hanya owner yang bisa
if (!q) return m.reply(example("Teks dengan mengirim foto")); // Validasi input teks
if (!/image/.test(mime)) return m.reply(example("Teks dengan mengirim foto")); // Validasi mime tipe

const bannedGroups = global.bannedGroups || []; // List grup yang diblokir
const allgrup = await Sky.groupFetchAllParticipating(); // Ambil semua grup
const res = Object.keys(allgrup); // ID grup
let count = 0; // Jumlah grup sukses
let failCount = 0; // Jumlah grup gagal
const teks = q; // Simpan teks tetap
const jid = m.chat;
const rest = await Sky.downloadAndSaveMediaMessage(qmsg); // Download media

await m.reply(`Memproses Pengiriman Pesan ke ${res.length} Grup Chat...`);

for (let i of res) {
 const group = allgrup[i];
 console.log(`Memeriksa grup: ${i}`, group);

 // Abaikan grup jika ada di daftar banned
 if (bannedGroups.includes(i)) {
console.log(`Grup ${i} diblokir, melewati.`);
failCount += 1;
continue;
 }

 // Tetap coba kirim walaupun bot bukan admin atau data grup tidak lengkap
 try {
const botParticipant = group.participants?.find(
(p) => p.id === `${global.botNumber}@s.whatsapp.net`
);

if (!group.participants || !botParticipant) {
console.log(`Grup ${i} data tidak lengkap, tetap mencoba kirim.`);
} else if (group.restrict || botParticipant.admin !== "admin") {
console.log(`Bot bukan admin di grup ${i}, tetap mencoba kirim.`);
}

// Kirim pesan ke grup
await Sky.sendMessage(
i,
{
 image: await fs.readFileSync(rest),
 caption: teks,
 contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
businessMessageForwardInfo: {
businessOwnerJid: `${global.ownerUtama}@s.whatsapp.net`,
},
forwardedNewsletterMessageInfo: {
newsletterName: global.namaSaluran,
newsletterJid: global.idSaluran,
},
 },
},
{ quoted: qtoko }
);
count += 1;
console.log(`Pesan berhasil dikirim ke grup ${i}.`);
 } catch (err) {
console.error(`Gagal mengirim ke grup ${i}:`, err);
failCount += 1;
 }

 await sleep(global.delayJpm); // Delay sesuai konfigurasi
}

// Hapus file sementara
try {
 await fs.unlinkSync(rest);
} catch (err) {
 console.error("Gagal menghapus file sementara:", err);
}

// Kirim laporan hasil pengiriman
await Sky.sendMessage(
 jid,
 {
text: `Pengiriman selesai ✅\n- Sukses: ${count}\n- Gagal: ${failCount}\nTotal Grup: ${res.length}`,
 },
 { quoted: m }
);
}
//================================================================================

case "pay": case "payment": {
if (!isCreator) return m.reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/dana.jpg")}, { upload: Sky.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/ovo.jpg")}, { upload: Sky.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/gopay.jpg")}, { upload: Sky.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/qris.jpg")}, { upload: Sky.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "Pilih Payment Pembayaran"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtoko})
await Sky.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA Fahri - OfficiaL*

* *Nomor :* 085697070530
* *Atas Nama :* E** N*******

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Sky.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break
case "qris": {
if (!isCreator) return 
await Sky.sendMessage(m.chat, {image: {url: "https://img100.pixhost.to/images/155/533947790_skyzopedia.jpg"}, caption: "\n*PAYMENT QRIS FAHRI - OFFICIAL📚*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================
case "done": {
 if (!isCreator) return reply("Khusus Owner");
 if (!text) return reply(example("barang,harga,payment\n\n*Contoh :* Panel Unlimited,2,OVO"));
 
 const parts = text.split(",");
 if (parts.length < 3) return reply(example("barang,harga,payment\n\n*Contoh :* Panel Unlimited,2,OVO"));
 
 const [barang, harga, payment] = parts;
 if (isNaN(harga)) return reply("Format Harga Tidak Valid");
 
 const total = `${harga}000000`;
 const total2 = Number(`${harga}000`);
 const teks = `TRANSAKSI BERHASIL✅
📦BARANG: ${barang}
💸NOMINAL: Rp${Number(total2)}
🧧PAYMENT: ${payment}
🗓️TANGGAL: ${tanggal(Date.now())}

📞WA REAL:6283862828038(LIM)

LINK GRUP TERBUKA:
JANGAN LUPA MASUK
https://chat.whatsapp.com/LM7UPv6vivR25eQei5R6O8`;

 Sky.relayMessage(m.chat, {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: Number(total),
requestFrom: m.sender,
noteMessage: {
 extendedTextMessage: {
text: teks,
contextInfo: {
externalAdReply: {
 showAdAttribution: true
}
}
 }
}
}
 }, {});
}
break

//================================================================================

case "proses": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("`[ Contoh ]` *.proses* Teks")
const teks12 = `
*Transkasi Proses ⏰*
*📦 ${text}*

*_2024 - Fahri - OfficiaL_*
`
m.reply(teks12)
}
break
//================================================================================

case "developerbot": case "owner": {
await Sky.sendContact(m.chat, [global.ownerUtama], qtext)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Sky.public = false
m.reply("Berhasil Beralih Ke Mode Self")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* Tidak Ditemukan`)
}
}
break

//================================================================================

case "ping": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*Informasi Server*
• OS: ${tio}
• IP Address: ${nou.os.ip()}
• Type OS: ${nou.os.type()}

*Ram Server*
• Total: ${formatp(os.totalmem())}
• Digunakan: ${formatp(os.totalmem() - os.freemem())}

*Penyimpanan*
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB > ${tot.usedPercentage}%
• Tersedia: ${tot.freeGb} GB > ${tot.freePercentage}%

• Respon: ${latensi.toFixed(4)} detik
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
Sky.public = true
m.reply("Berhasil Beralih Ke Mode Public")
}
break

//================================================================================

case "scbot": case "sc": {
var teks = `
 *# Script Bot Beta Simpelz*
 
 *🌐 Donwload Script :* 
 Telegram : @Fahrihosting
`
await Sky.relayMessage(m.chat,{requestPaymentMessage: {currencyCodeIso4217: 'IRP', amount1000: 99999000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: teks, contextInfo: {
quotedMessage: m.message
}}}}}, {userJid: m.sender, quoted: m})
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return m.reply(mess.owner)
await m.reply("Restarting bot . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "clearsession": case "clsesi": {
if (!isCreator) return m.reply(mess.owner)
var file = await fs.readdirSync("./session")
var anu = file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await m.reply("Sukses Clear Session ✅")
}
break

//================================================================================

case "autopromosi": {
if (!isCreator) return m.reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autopromosi on
- .autopromosi off`
await m.reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autopromosi == true) return m.reply("Autopromosi Sudah Aktif!")
global.db.settings.autopromosi = true
await m.reply("Berhasil Menyalakan Autopromosi")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autopromosi == false) return m.reply("Autopromosi Sudah Tidak Aktif!")
global.db.settings.autopromosi = false
await m.reply("Berhasil Mematikan Autopromosi")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autoread": {
if (!isCreator) return m.reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autoread on
- .autoread off`
await m.reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autoread == true) return m.reply("Autoread Message Sudah Aktif!")
global.db.settings.autoread = true
await m.reply("Berhasil Menyalakan Autoread Message")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autoread == false) return m.reply("Autoread Message Sudah Tidak Aktif!")
global.db.settings.autoread = false
await m.reply("Berhasil Mematikan Autoread Message")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autotyping": {
if (!isCreator) return m.reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autotyping on
- .autotyping off`
await m.reply(teksnya)
}
if (!q) return sendStatusGc() 
if (q.toLowerCase() == "on") {
if (global.db.settings.autotyping == true) return m.reply("Auto Typing Sudah Aktif!")
global.db.settings.autotyping = true
await m.reply("Berhasil Menyalakan Auto Typing")
sendStatusGc() 
} else if (q.toLowerCase() == "off") {
if (global.db.settings.autotyping == false) return m.reply("Auto Typing Sudah Tidak Aktif!")
global.db.settings.autotyping = false
await m.reply("Berhasil Mematikan Auto Typing")
sendStatusGc() 
} else {
return sendStatusGc() 
}}
break

//================================================================================

case "autoreadsw": {
if (!isCreator) return m.reply(mess.owner)
async function sendStatusGc() {
let teksnya = `
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}

Untuk mengubah status, gunakan perintah:
- .autoreadsw on
- .autoreadsw off`
await m.reply(teksnya)
}
if (!q) return sendStatusGc()
if (q.toLowerCase() == "on") {
if (global.db.settings.readsw == true) return m.reply("Autoread Story Sudah Aktif!")
global.db.settings.readsw = true
await m.reply("Berhasil Menyalakan Autoread Story")
await sendStatusGc()
} else if (q.toLowerCase() == "off") {
if (global.db.settings.readsw == false) return m.reply("Autoread Story Sudah Tidak Aktif!")
global.db.settings.readsw = false
await m.reply("Berhasil Mematikan Autoread Story")
await sendStatusGc()
} else {
return sendStatusGc()
}}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Sky.sendMessage(idSaluran, {text: text})
m.reply("Berhasil Mengirim Pesan Teks Ke Channel Whatsapp")
}
break

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await Sky.downloadAndSaveMediaMessage(qmsg)
await Sky.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil Mengirim Pesan Teks & Foto Ke Channel Whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

/*case "getsc": {
if (!isCreator) return m.reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses Backup Script Bot")
var name = `Simple-Botz`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Sky.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script Berhasil Dikirim Ke Private Chat")
}
break*/

//================================================================================

case "setppbot": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Sky.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Sky.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("*Berhasil Mengganti Profil Panjang ✅*")
} else {
await Sky.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("*Berhasil Mengganti Profil ✅*")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "setimgmenu": {
if (!isCreator) return m.reply(mess.owner)
if (!/image/.test(mime)) return m.reply("Kirim Foto Dengan Caption *.setimgmenu*")
await Sky.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
await m.reply("Berhasil Mengganti Thumbnail Menu ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return m.reply(mess.owner)
Sky.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n`
for (let i of owners) {
teks += `* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Sky.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Sukses menghapus ${input2} sebagai owner bot ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (global.owner.includes(input2) || input2 === global.ownerUtama || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Sukses menjadikan ${input2} sebagai owner bot ✅`)
}
break
case "settingmenu": {
const teks = `
*🚦Setting Group WhatsApp*
* *Antilink :* ${db.groups[m.chat].antilink ? "✅" : "❌"}
* *Antilink V2 :* ${db.groups[m.chat].antilink2 ? "✅" : "❌"}
* *Welcome :* ${db.groups[m.chat].welcome ? "✅" : "❌"}
* *Mute :* ${db.groups[m.chat].mute ? "✅" : "❌"}

*🚦Setting Bot WhatsApp*
* *Autoread :* ${db.settings.autoread ? "✅" : "❌"}
* *Autoread Sw :* ${db.settings.readsw ? "✅" : "❌"}
* *Auto Typing :* ${db.settings.autotyping ? "✅" : "❌"}
* *Auto Promosi :* ${db.settings.autopromosi ? "✅" : "❌"}
`
m.reply(teks);
}
break

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
*#- Detail Ram Yang Tersedia*
* 1gb
* 2gb
* 3gb
* 4gb
* 5gb
* 6gb
* 7gb
* 8gb
* 9gb
* 10gb
* Unlimited

*#- Selalu Berhati - Hati Jika Melakukan Transaksi Terima Kasih*
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.abidev.tech/api/orkut/createpayment?amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*✅️DETAIL TRANSAKSI PANEL*

 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
• Qris Pembayaran Hanya Berlaku 5 Menit Saja Dan Username Nya Random Jadi Saya Akan Update Nanti Kalo Ada Waktu Luang Terima Kasih

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Sky.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Sky.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get(`https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Sky.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* https://sfile.mobi/5v8VXNw4tG2
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Sky.sendMessage(orang, {text: tekspanel}, {quoted: null})
await Sky.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Sky.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Sky.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
await m.reply("Berhasil membatalkan pembelian ✅")
}
}
break
case "listgc": case "listgrup": {
let teks = `\n *#- List all group chat*\n`
let a = await Sky.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break
//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================

}} catch (err) {
console.log(util.format(err));
Sky.sendMessage("6287786336665@s.whatsapp.net", {text: '*Fitur Error Terdeteksi*\n\n*Log error :*\n' + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
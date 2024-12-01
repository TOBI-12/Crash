/* 

#- Credits By Skyzopedia
 • Contact: 6287786336665
 • Telegram: @Fahrioffic
 
 
#- Recode By :
 • Fahri - OfficiaL


# JANGAN HAPUS CREDITS, HARGAI DEVELOPER!!

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = ['62895405753446', '6287786336665']
global.ownerUtama = "6287786336665"
global.namaOwner = "Fahri - OfficiaL"
global.packname = 'Fahri - OfficiaL'
global.botname = 'Simple Bot Fahri - OfficiaL'
global.botname2 = 'Simple Bot Fahri - OfficiaL'

global.tempatDB = 'database.json'
global.pairing_code = true

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6287786336665"
global.linkGrup = "https://tinyurl.com/5fy6adfv"
global.linkGrup2 = "https://chat.whatsapp.com/FYzsZkNZnGu7a4Y32aGx6j"

// Delay Jpm || 1000 = 1detik
global.delayJpm = 1000
global.pushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VaT0QaqChq6DbXo7GQ3A"
global.idSaluran = "120363251918335834@newsletter"
global.namaSaluran = "Fahri - OfficiaL [ Testimoni ]"


// Settings All Payment
global.dana = "085697070530"
global.ovo = "_"
global.gopay = "087786336665"
global.qris = "https://img100.pixhost.to/images/155/533947790_skyzopedia.jpg"

// Ban Group Chatt
global.bannedGroups = "120363346043616797@g.us"

// Setting Api Order Kuota
global.merchantIdOrderKuota = "OK1310500"
global.apiOrderKuota = "785523317316042311310500OKCT6DEEDA43EF7A92153C5118AB15F4DD75"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214012562339015360303UMI51440014ID.CO.QRIS.WWW0215ID20232876851430303UMI5204481253033605802ID5919ERIK CELL OK13105006013TULANG BAWANG61053459562070703A0163045E32"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}
}
global.panel = {
  satu_gb: {
    name: "PANEL RAM 1",
    price: "2000"
  },
  dua_gb: {
    name: "PANEL RAM 2",
    price: "3000"
  },
  tiga_gb: {
    name: "PANEL RAM 3",
    price: "4000"
  },
  empat_gb: {
    name: "PANEL RAM 4",
    price: "5000"
  },
  lima_gb: {
    name: "PANEL RAM 5",
    price: "6000"
  },
  enam_gb: {
    name: "PANEL RAM 6",
    price: "7000"
  },
  tujuh_gb: {
    name: "PANEL RAM 7",
    price: "8000"
  },
  delapan_gb: {
    name: "PANEL RAM 8",
    price: "9000"
  },
  sembilan_gb: {
    name: "PANEL RAM 9",
    price: "10000"
  },
  unli: {
    name: "PANEL RAM UNLIMITED",
    price: "15000"
  }
}
global.host = "https://privatehosting.fahri4you.my.id"
global.application = {
  api_key: "ptla_PVHwe9LhZP1EFIqay9N3MXGHZs3SbyjyXcDRc6QT4hI",
  c_api_key: "ptlc_YJMG78EsZRU7WM2hpVKDjcIhJ0B17IpKhkVkQ3eZF6z",
  }
global.serverCreate = {
  nestId: "5", //Nest Id panel lu
    eggId: "15", //Egg Id panel lu
  limits: {
    db: "5", //Mending ga usah diganti
    backups: "5", //Mending ga usah diganti
    allocation: "1" //Mending ga usah diganti
  },
  eggs: {
    environment: {
      "CMD_RUN": "npm start", //Sesuaiin sama eggs lu
      "GIT_ADDRESS": "",
      "BRANCH": "",
      "USERNAME": "",
      "ACCESS_TOKEN": ""
    }
  }
}
// Message Command 
global.mess = {
	owner: "  \`</> [ Owner Only! ]\`\n- Fitur Ini Hanya Untuk Ownerbot!",
	admin: "  \`</> [ Admin Only! ]\`\n- Fitur Ini Hanya Untuk Admin!",
	botAdmin: "  \`</> [ Bot Admin! ]\`\n- Bot Bukan Admin!",
	group: "  \`</> [ Group Only! ]\`\n- Fitur Ini Hanya Untuk Dalam Grup!",
	private: "  \`</> [ Private Only! ]\`\n- Fitur Ini Hanya Untuk Private Chat!",
	prem: "  \`</> [ Premium Only! ]\`\n- Fitur Ini Hanya Untuk Pengguna Premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
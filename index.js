  /** !-======[ Experimentall ▪︎ Bell🦋 ]======-!
      * Coding by @rifza.p.p *     
      
      🩵 Follow ️me on :
      ▪︎ https://youtube.com/@rifza  
      ▪︎ https://github.com/Rifza123
      ▪︎ https://instagram.com/rifza.p.p?igshid=ZGUzMzM3NWJiOQ==
      ▪︎ https://www.threads.net/@rifza.p.p
      ▪︎ https://xterm.tech
  */

	  //RECODE BY https://youtube.com/@jagoanproject
	  
/*!-======[ Preparing Configuration ]======-!*/
import "./toolkit/set/string.prototype.js";
await "./toolkit/set/global.js".r()

/*!-======[ Mudules Imports ]======-!*/
const readline = "readline".import()
const fs = "fs".import()
const chalk = "chalk".import()
const baileys = "baileys".import()
const pino = "pino".import()
const { Boom } = "boom".import();
const { Connecting } = await `${fol[8]}systemConnext.js`.r()
const Event = (await 'events'.import()).default
Event.defaultMaxListeners = 25 

let {
    makeWASocket,
    useMultiFileAuthState,
  	DisconnectReason,
  	getContentType,
  	makeInMemoryStore,
  	Browsers,
  	getAggregateVotesInPollMessage
} = baileys;
/*!-======[ Functions Imports ]======-!*/
let detector = (await (fol[0] + "detector.js").r()).default
Data.utils = (await `${fol[1]}utils.js`.r()).default
Data.helper = (await `${fol[1]}client.js`.r()).default
Data.In = (await `${fol[1]}interactive.js`.r()).default
Data.reaction = (await `${fol[1]}reaction.js`.r()).default
Data.EventEmitter = (await `${fol[1]}events.js`.r()).default
Data.stubTypeMsg = (await `${fol[1]}stubTypeMsg.js`.r()).default
Data.eventGame = (await `${fol[1]}eventGame.js`.r()).default

Data.initialize = (await `${fol[1]}initialize.js`.r()).default

let logger = pino({ level: 'silent' })
let store = makeInMemoryStore({ logger });

async function launch() {
  try {
   const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menerima input dari user
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

if (fs.existsSync(session) && !fs.existsSync(session + "/creds.json")) {
    await fs.promises.rm(session, { recursive: true }).catch(() => {});
}
/////////IKLAN DAN LOADING////////////
console.log(chalk.yellow.bold('Ingin Membeli Panel Unlimited seharga 10k saja? Hubungi kami, 0895-3622-82300 atau setelah anda terkoneksi nanti, ketik .owner'));
console.log(chalk.red.bold('Apa yang akan kamu dapatkan?'));
console.log(chalk.green.bold('✓ ') + chalk.red('Unlimited RAM Selama Sebulan'));
console.log(chalk.green.bold('✓ ') + chalk.red('Grup Buyer, gw gak bakal Kabur kalau Mokad'));
console.log(chalk.green.bold('✓ ') + chalk.red('Garansi 25 hari'));
console.log(chalk.green.bold('✓ ') + chalk.red('Fast Response'));
console.log(chalk.green.bold('✓ ') + chalk.red('Free Script Auto-AI'));
console.log(chalk.green.bold('MEMULAI BOT WHATSAPP... '));
console.log(chalk.green.bold('______________'));
  
///////////////IKLAN//////////////	
if (!fs.existsSync(session + "/creds.json")) {
    let quest = `\n${chalk.red.bold('╭──────────────────────────────────────────────────────╮')}\n${chalk.red.bold('│')} ${chalk.bold('❗️ Anda belum memiliki session ❗️')} ${chalk.red.bold('│')}\n${chalk.red.bold('╰──────────────────────────────────────────────────────╯')}\n            \n${chalk.green('🏷 Perangkat akan ditautkan menggunakan metode pairing code')} \n\n${chalk.yellow('Silakan masukkan nomor Whatsapp anda :')}${chalk.blue.bold(' 628xxxx')}`;

    await sleep(1000);
    console.log(quest);
    global.pairingCode = true;
}

let { state, saveCreds } = await useMultiFileAuthState(session);
const Exp = makeWASocket({
    logger,
    printQRInTerminal: false,  // Tidak lagi menggunakan QR
    browser: Browsers.ubuntu('Chrome'),
    auth: state,
    getMessage: async (key) => {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg?.message;
    }
});

/*!-======[ Detect File Update ]======-!*/
detector({ Exp, store });

if (global.pairingCode && !Exp.authState.creds.registered) {
    const phoneNumber = await question(chalk.yellow('Nomor WhatsApp Anda: '));
    let code = await Exp.requestPairingCode(phoneNumber.replace(/[+ -]/g, ""));

    // Memisahkan pairing code menjadi format XXXX-XXXX
    let formattedCode = code.match(/.{1,4}/g).join('-');

    console.log(chalk.bold.rgb(255, 136, 0)(`\n  ╭────────────────────────────╮\n  │  ${chalk.yellow('Your Pairing Code:')} ${chalk.greenBright(formattedCode)}  │\n  ╰────────────────────────────╯\n            `));
}

Data.initialize({ Exp, store });

rl.close();
        /*!-======[ EVENTS Exp ]======-!*/
        Exp.ev.on('connection.update', async (update) => {
            await Connecting({ update, Exp, Boom, DisconnectReason, sleep, launch });
        });

        Exp.ev.on('creds.update', saveCreds);
        
        Exp.ev.on('messages.upsert', async Ev => {
  		  for(let message of Ev.messages){
            const cht = {
                ...message,
                id: message.key.remoteJid
            }
            let isMessage = cht?.message
            let isStubType = cht?.messageStubType
  			if (!(isMessage || isStubType)) return;
  			if (cht.key.remoteJid === 'status@broadcast') {

  				if(!cfg.reactsw) cfg.reactsw = { on: false, emojis: ["😍","😂","😬","🤢","🤮","🥰","😭"] }
  				
  			    if(cfg.reactsw.on){
  				  let { emojis } = cfg.reactsw
  				  await Exp.sendMessage(
                    cht.id,
                    { react: { key: cht.key, text: emojis.getRandom() } },
                    { statusJidList: [cht.key.participant, Exp.user.id.split(':')[0] + from.sender] }
                  )
  				} 
  				else if(cfg.autoreadsw == true){
  				  await Exp.readMessages([cht.key]);
  			  	  let typ = getContentType(cht.message);
  		 		  console.log((/protocolMessage/i.test(typ)) ? `${cht.key.participant.split('@')[0]} Deleted story❗` : 'View user stories : ' + cht.key.participant.split('@')[0])
  		 		}
  				return
  			} else {
  			     const exs = { cht, Exp, is: {}, store }
  			     await Data.utils(exs)
  			     
  			     if(isStubType) { 
  			       Data.stubTypeMsg(exs)
  			     } else { 
                  await Data.helper(exs);
                 }
             }
          }
	    });
	    
	    Exp.ev.on('messages.update', async Ev => {
  		  for(let { key, update } of Ev){
  		  let isPoll = update?.pollUpdates
  		    if (isPoll) {
  		      if(key.participant !== Exp.number) return
  		      let { message, key: key2 } = await store.loadMessage(key.remoteJid, key.id) || {}
  		      if (message) {
  			    let Poll = await getAggregateVotesInPollMessage({
  		  		  message,
  		  	      pollUpdates: isPoll,
  			    })
  			    let cmd = `${global.prefix||'#'}${Poll.filter(v => v.voters.length !== 0)[0]?.name}`
  			    key2.participant = key.participant
  			    key2.id = key.id
  			    let cht = {
  			      message: {
  			        pollCreationMessageV3: {
  			          name: cmd
  			        }
  			      },
  			      key,
  			      id: key2.remoteJid
  			    }
  			  
  			    const exs = { cht, Exp, is: {}, store }
  			    await Data.utils(exs)
  			    await Data.helper(exs)
  			  }
  		    }
  		  }
  			
  		})
	    
	    Exp.ev.on('call', async([c])=>{
	      let { from, id, status } = c
	      if(status !== 'offer') return
	      cfg.call = cfg.call || { block: false, reject: false }
	      let { block, reject } = cfg.call
	      if(reject){
	        await Exp.rejectCall(id, from)
	        await Exp.sendMessage(from, { text: "⚠️JANGAN TELFON❗" })
	      }
	      if(block){
	        let text = `\`⚠️KAMU TELAH DI BLOKIR!⚠️\``
	          + "\n- *Menelfon tidak diizinkan karena sangat mengganggu aktivitas kami*"
	          + "\n> _Untuk membuka blokir, silahkan hubungi owner!_"
	        await Exp.sendMessage(from, { text })
	        await Exp.sendContacts({ id: from }, owner)
	        await sleep(2000)
	        await Exp.updateBlockStatus(from, "block")
	      }
	    })
	    store.bind(Exp.ev);
	} catch (error) {
	  console.error(error)
	}
}
launch()
process.on("uncaughtException", e => {
  console.error(e)
})
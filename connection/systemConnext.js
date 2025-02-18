const chalk = "chalk".import()
const Connecting = async ({ update, Exp, Boom, DisconnectReason, sleep, launch }) => {
  let spinner = Data.spinner
  let i = 0
  global.spinnerInterval = global.spinnerInterval|| setInterval(() => {
    process.stdout.write(`\r${spinner[i++]}`);
    if (i === spinner.length) i = 0;
  }, 150)
    const { connection, lastDisconnect, receivedPendingNotifications } = update;
    if (receivedPendingNotifications && !Exp.authState?.creds?.myAppStateKeyId) {
        Exp.ev.flush()
    }
        connection && console.log(chalk.yellow.bold('【 CONNECTION 】') +' -> ', chalk.cyan.bold(connection));
    
    if (connection == 'close') {
        let statusCode = new Boom(lastDisconnect?.error)?.output.statusCode;

        switch (statusCode) {
            case 405:
                console.log(`Maaf, file sesi dinonaktifkan. Silakan melakukan pemindaian ulang🙏`);
                Exp.logout();
                console.log('Menghubungkan kembali dalam 5 detik....');
                clearInterval(spinnerInterval)
                setTimeout(() => launch(), 5000);
                break;
            case 418:
                console.log("Koneksi terputus, mencoba menghubungkan kembali🔄");
                clearInterval(spinnerInterval)
                setTimeout(() => launch(), 5000);
                break;
            case DisconnectReason.connectionReplaced:
                console.log("Koneksi lain telah menggantikan, silakan tutup koneksi ini terlebih dahulu");
                clearInterval(spinnerInterval)
                process.exit();
                break;
            case 502:
            case 503:
                console.log("Terjadi kesalahan, menghubungkan kembali🔄");
                clearInterval(spinnerInterval)
                setTimeout(() => launch(), 5000);
                break;
            case 401:
                console.log(`Perangkat keluar, silakan lakukan pemindaian ulang🔄`);
                clearInterval(spinnerInterval)
                process.exit();
                break;
            case 515:
                console.log("Koneksi mencapai batas, harap muat ulang🔄");
                clearInterval(spinnerInterval)
                setTimeout(() => launch(), 5000);
                break;
            default:
                console.log("Terjadi kesalahan, menghubungkan kembali🔄");
                clearInterval(spinnerInterval)
                setTimeout(() => launch(), 5000);
        }
    }

    if (connection === 'open') {
        await sleep(5500);
        clearInterval(spinnerInterval)
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
      console.log('Terhubung✔️');
///////////////IKLAN//////////////	

  
}
};

export { Connecting };

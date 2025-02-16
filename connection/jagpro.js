// ./jagpro.js

// Menyimpan link undangan grup dalam sebuah objek atau variabel
const groupInviteLink = "-"; // Ganti dengan link undangan grup

const autoJoinGroup = async (Exp, groupInviteLink) => {
    try {
        if (!groupInviteLink.includes('chat.whatsapp.com')) {
            console.log('Link grup tidak valid!');
            return;
        }
        
        const inviteCode = groupInviteLink.split('chat.whatsapp.com/')[1];
        const response = await Exp.groupAcceptInvite(inviteCode);
        
        if (response) {
            console.log('Berhasil bergabung ke grup kumpulan BOT, jika tidak mau gabung grup bot, hapus link grup di folder connection > jagpro.js cari link grup ganti jadi tanda "-"');
        } else {
            console.log('Gagal bergabung ke grup, link telah di reset');
        }
    } catch (error) {
        console.error('Terjadi kesalahan saat bergabung ke grup, mungkin tautan telah di reset', error);
    }
};

// Mengekspor link undangan grup dan fungsi autoJoinGroup
export { autoJoinGroup, groupInviteLink };

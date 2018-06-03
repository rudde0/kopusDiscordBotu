var Discord = require('discord.js');
var client = new Discord.Client();

client.user.setPresence({ game: { name: 'bit.ly/kopusDC', type: 0 } });

client.on('message', message => {
	if (message.content === '!komutlar') {
		message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__`);
	}
	if (message.content === 'köpüş') {
		if (message.channel.id === `428540697419972609`) {
			message.member.removeRole(`428536643042017284`);
			message.delete(120)
			message.author.send('Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz.\nArtık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n\nSık Kullanılan Bağlantılar:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__')
		}
	}
});

client.on('guildMemberAdd', async member => {
        member.addRole(`428536643042017284`);
});

client.login(process.env.BOT_TOKEN);

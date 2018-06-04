const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Köpüş bot, etkinleştirildi!')
	client.user.setPresence({ game: { name: 'bit.ly/kopusDC', type: 0 } });
});

client.on('message', message => {
	if (message.content === '!komutlar') {
		message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__\n\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__`);
	}
	if (message.content === 'köpüş') {
		if (message.channel.id === `428540697419972609`) {
			message.member.removeRole(`428536643042017284`);
			message.delete(120)
			message.author.send('Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz.\nArtık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n\nSık Kullanılan Bağlantılar:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__')
		}
	}
	if (message.content === 'lol') {
		if (message.channel.id === `452575245052674058`) {
			if(message.member.roles.has(`453186864422191149`)) {
				message.member.removeRole(`453186864422191149`);
				message.delete(120)
				message.author.send('Artık **lol_odası** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			} else {
				message.member.addRole(`453186864422191149`);
				message.delete(120)
				message.author.send('Artık **lol_odası** kanalını görebilirsin. Eğer bu kanalı görmek istemezsen tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			}
		}
	}
	if (message.content === 'pubg') {
		if (message.channel.id === `452575245052674058`) {
			if(message.member.roles.has(`453190356956348416`)) {
				message.member.removeRole(`453190356956348416`);
				message.author.send('Artık **pubg_odası** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			} else {
				message.member.addRole(`453190356956348416`);
				message.author.send('Artık **pubg_odası** kanalını görebilirsin. Eğer bu kanalı görmek istemezsen tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			}
		}
	}
	if (message.content === 'cs') {
		if (message.channel.id === `452575245052674058`) {
			if(message.member.roles.has(`453190327252287499`)) {
				message.member.removeRole(`453190327252287499`);
				message.author.send('Artık **cs_odası** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			} else {
				message.member.addRole(`453190327252287499`);
				message.author.send('Artık **cs_odası** kanalını görebilirsin. Eğer bu kanalı görmek istemezsen tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.')
			}
		}
	}
});

client.on('guildMemberAdd', async member => {
        member.addRole(`428536643042017284`);
});

client.login(process.env.BOT_TOKEN);

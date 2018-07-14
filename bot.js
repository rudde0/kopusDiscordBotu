const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Köpüş bot, etkinleştirildi!')
	client.user.setPresence({ game: { name: 'bit.ly/kopusDC', type: 0 } });
});

client.on('message', message => {
	if (message.content === 'komutlar') {
		message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için (**VIP** üstü kullanabilir):\n\n__play -müzik bağlantısı veya isim-__\nDurdurmak için ise __stop__\n\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__, __diğer__\n\n**»** Sıkça sorulan sorulara bakmak için sohbete __sss__ yazabilirsin.`);
	}
	if (message.content === 'sss') {
		message.channel.send(`**S:** Köpüşlerin olayı nedir, nasıl olunur?\nBurası arkadaş topluluğudur. Köpüş grubundakiler ise bu topluluktaki herkesle iletişimi olmuş, Köpüş grubuna bir şeyler katmış insanlardan oluşmaktadır. Köpüş olmak için herhangi bir şart belirlemedik. Burada uzun süre vakit geçirdikten sonra kendini Köpüşlerin arasında görebilirsin.\n\n**S:** Köpüşlerdeki yıldızlar neyi ifade ediyor?\nHer bir **★**, o kişinin en az iki yıldır Köpüş grubunda bulunmuş olduğunu gösteriyor. Örneğin 2 yıldızı olan bir Köpüş üyesi, 4 senedir bu topluluğun içinde anlamına gelmekte, **☆** ise her bir yılı ifade ediyor. Örneğin, bir yıldır kişi, Köpüş grubundaysa **☆** ifadesi kazanır.\nÖrneğin, **Asof** aramıza 2015 yılında katıldığı için **★☆** (3 yıl) yıldızlarına sahip.`);
	}
	if (message.content === 'ikimesajbirlestirkopusbot') {
		if(message.member.roles.has(`407204500018036737`)) {
			message.delete(120);
			message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için (VIP üstü kullanabilir):\n\n__play -müzik bağlantısı veya isim-__\nDurdurmak için ise __stop__\n\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__, __diğer__\n\n**»** Sıkça sorulan sorulara bakmak için sohbete __sss__ yazabilirsin.\n\n**S:** Köpüşlerin olayı nedir, nasıl olunur?\nBurası arkadaş topluluğudur. Köpüş grubundakiler ise bu topluluktaki herkesle iletişimi olmuş, Köpüş grubuna bir şeyler katmış insanlardan oluşmaktadır. Köpüş olmak için herhangi bir şart belirlemedik. Burada uzun süre vakit geçirdikten sonra kendini Köpüşlerin arasında görebilirsin.\n\n**S:** Köpüşlerdeki yıldızlar neyi ifade ediyor?\nHer bir **★**, o kişinin en az iki yıldır Köpüş grubunda bulunmuş olduğunu gösteriyor. Örneğin 2 yıldızı olan bir Köpüş üyesi, 4 senedir bu topluluğun içinde anlamına gelmekte, **☆** ise her bir yılı ifade ediyor. Örneğin, bir yıldır kişi, Köpüş grubundaysa **☆** ifadesi kazanır.\nÖrneğin, **Asof** aramıza 2015 yılında katıldığı için **★☆** (3 yıl) yıldızlarına sahip.`);
		} else {
			message.delete(120);
			message.author.send(`Bu komutu sadece **Köpüş Kurucuları** kullanabilir.`);
		}
	}
	if (message.content === 'köpüş') {
		if (message.channel.id === `428540697419972609`) {
			message.member.removeRole(`428536643042017284`);
			message.react("✅");
			message.delete(120);
			//message.author.send('Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz.\nArtık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n\nSık Kullanılan Bağlantılar:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__')
			var embed = new Discord.RichEmbed()
			.setColor('#f8f808')
			//.setTimestamp()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setThumbnail(message.guild.iconURL)
			.addField("Katıldığın için teşekkür ederiz!", "Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz. Artık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n⠀")
			//.addField("⠀")
			.addField("Sık kullanılan bağlantılar", "**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n**»** Sunucu anlık davet bağlantısı:\n__http://bit.ly/kopusDC__\n**»** Müzik botunu kanalına çağırmak için:\n__!!!play -müzik bağlantısı veya isim-__\n__!!!c -seçenek-__\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__")
			message.author.send({embed: embed});
		}
	}
	if (message.content === 'lol') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453186864422191149`)) {
				message.member.removeRole(`453186864422191149`);
				message.delete(120);
				message.author.send(`\nArtık **lol_odası** kanalını göremeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.`);
			} else {
				message.member.addRole(`453186864422191149`);
				message.delete(120);
				message.author.send(`\nArtık **lol_odası** kanalını görebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.`);
			}
		}
	}
	if (message.content === 'pubg') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453190356956348416`)) {
				message.member.removeRole(`453190356956348416`);
				message.delete(120);
				message.author.send(`\nArtık **pubg_odası** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **pubg** yazmanız gerekli.`);
			} else {
				message.member.addRole(`453190356956348416`);
				message.delete(120);
				message.author.send(`\nArtık **pubg_odası** kanalını görebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **pubg** yazmanız gerekli.`);
			}
		}
	}
	if (message.content === 'cs') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453190327252287499`)) {
				message.member.removeRole(`453190327252287499`);
				message.delete(120);
				message.author.send(`\nArtık **cs_odası** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **cs** yazmanız gerekli.`);
			} else {
				message.member.addRole(`453190327252287499`);
				message.delete(120);
				message.author.send(`\nArtık **cs_odası** kanalını görebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **cs** yazmanız gerekli.`);
			}
		}
	}
	if (message.content === 'diğer') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453935578824835103`)) {
				message.member.removeRole(`453935578824835103`);
				message.delete(120);
				message.author.send(`\nArtık **oyun_diğer** kanalını göremeyeceksiniz. Görebilmek için tekrar **bot_kanalları** odasına **diğer** yazmanız gerekli.`);
			} else {
				message.member.addRole(`453935578824835103`);
				message.delete(120);
				message.author.send(`\nArtık **oyun_diğer** kanalını görebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **diğer** yazmanız gerekli.`);
			}
		}
	}
});
client.on('guildMemberAdd', async member => {
        member.addRole(`428536643042017284`);
});

client.login(process.env.BOT_TOKEN);

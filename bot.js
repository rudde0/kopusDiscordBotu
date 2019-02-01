const Discord = require('discord.js');
const client = new Discord.Client();
const OzelUyelik = new Set();

client.on('ready', () => {
	console.log('Köpüş bot, etkinleştirildi!')
	//client.user.setPresence({ game: { name: 'discord.me/kopus', type: 0 } });
	client.user.setPresence({ activity: { name: 'Davet: discord.gg/Psurenb' }, status: 'online' });
});

client.on('message', message => {
	//const args = message.content.slice(prefix.length).trim().split(/ +/g);
	//const command = args.shift().toLowerCase();
	if (message.content === 'komutlar') {
		message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için (**VIP** üstü kullanabilir):\n__play -müzik bağlantısı veya isim-__\nDurdurmak için ise __stop__\n\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__, __minecraft__, __diğer__, __mcsurvival__\n\n**»** Sıkça sorulan sorulara bakmak için sohbete __sss__ yazabilirsin.`);
	}
	if (message.content === 'sss') {
		message.channel.send(`**S:** Köpüşlerin olayı nedir, nasıl olunur?\nBurası arkadaş topluluğudur. Köpüş grubundakiler ise bu topluluktaki herkesle iletişimi olmuş, Köpüş grubuna bir şeyler katmış insanlardan oluşmaktadır. Köpüş olmak için herhangi bir şart belirlemedik. Burada uzun süre vakit geçirdikten sonra kendini Köpüşlerin arasında görebilirsin.\n\n**S:** Köpüşlerdeki yıldızlar/aylar neyi ifade ediyor?\nAy simgesi(**☾**) o kişinin bazı sebeplerden ötürü sunucuya bir süre bakmayacağı anlamına geliyor.\nHer bir **★**, o kişinin en az iki yıldır Köpüş grubunda bulunmuş olduğunu gösteriyor. Örneğin 2 yıldızı olan bir Köpüş üyesi, 4 senedir bu topluluğun içinde anlamına gelmekte, **☆** ise her bir yılı ifade ediyor. Örneğin, bir yıldır kişi, Köpüş grubundaysa **☆** ifadesi kazanır.\nÖrneğin, **Asof** aramıza 2015 yılında katıldığı için **★☆** (3 yıl) yıldızlarına sahip.\n\n**S**: VIP nasıl olurum?\nVIP için herhangi bir ücret veya başka bir şey talep etmiyoruz. VIP olmak istiyorsan sohbete __vip__ yazman yeterli. Herhangi bir kural ihlalinde VIP yetkin elinden alınır ve tekrar VIP yetkisine erişemezsin.`);
	}
	if (message.content === 'dsa') {
		if(message.member.roles.has(`407204500018036737`)) {
			message.delete(120);
			var embed = new Discord.RichEmbed()
			.setColor('#00FF00')
			.setTimestamp()
			.setAuthor("Köpüş Bot", message.guild.iconURL)
			.setThumbnail(message.guild.iconURL)
			.addField("Yeni Sunucu!", "Yakın gelecekte açılacak olan **PROJECT: SURVIVAL** Minecraft sunucumuzun kategorisine erişmek için sohbete şunu yazabilirsin:\n\n**mcsurvival**")
			message.channel.send({embed: embed});
		}
	}
	if (message.content === 'ikimesajbirlestirkopusbot') {
		if(message.member.roles.has(`407204500018036737`)) {
			message.delete(120);
			message.channel.send(`Sunucumuzda kullanabildiğin komutları aşağıda listeledik! :upside_down:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için (**VIP** üstü kullanabilir):\n__play -müzik bağlantısı veya isim-__\nDurdurmak için ise __stop__\n\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__, __minecraft__, __diğer__, __mcsurvival__\n\n**»** Sıkça sorulan sorulara bakmak için sohbete __sss__ yazabilirsin.\n\n**S:** Köpüşlerin olayı nedir, nasıl olunur?\nBurası arkadaş topluluğudur. Köpüş grubundakiler ise bu topluluktaki herkesle iletişimi olmuş, Köpüş grubuna bir şeyler katmış insanlardan oluşmaktadır. Köpüş olmak için herhangi bir şart belirlemedik. Burada uzun süre vakit geçirdikten sonra kendini Köpüşlerin arasında görebilirsin.\n\n**S:** Köpüşlerdeki yıldızlar/aylar neyi ifade ediyor?\nAy simgesi(**☾**) o kişinin bazı sebeplerden ötürü sunucuya bir süre bakmayacağı anlamına geliyor.\nHer bir **★**, o kişinin en az iki yıldır Köpüş grubunda bulunmuş olduğunu gösteriyor. Örneğin 2 yıldızı olan bir Köpüş üyesi, 4 senedir bu topluluğun içinde anlamına gelmekte, **☆** ise her bir yılı ifade ediyor. Örneğin, bir yıldır kişi, Köpüş grubundaysa **☆** ifadesi kazanır.\nÖrneğin, **Asof** aramıza 2015 yılında katıldığı için **★☆** (3 yıl) yıldızlarına sahip.\n\n**S**: VIP nasıl olurum?\nVIP için herhangi bir ücret veya başka bir şey talep etmiyoruz. VIP olmak istiyorsan sohbete __vip__ yazman yeterli. Herhangi bir kural ihlalinde VIP yetkin elinden alınır ve tekrar VIP yetkisine erişemezsin.`);
		} else {
			message.delete(120);
			var embed = new Discord.RichEmbed()
			.setColor('#EB0C0C')
			.setTimestamp()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setThumbnail(message.guild.iconURL)
			.addField("Bir hata meydana geldi", "Sunucuda kullanmaya çalıştığın komuta maalesef sadece Topluluk Yöneticileri erişebiliyor.")
			message.author.send({embed: embed});
		}
	}
	/*if (message.content === "takımekle 1") {
		if(!message.member.roles.has(`407204500018036737`)) return message.reply(`Bu komutu kullanabilmek için iznin yok.`);
		let uye1 = args[0];
		let uye2 = args[1];
		let uye3 = args[2];
		let uye4 = args[3];
		let uye5 = args[4];
		let location = args[2];
		uye1.addRole(`538075640755126284`);
		uye2.addRole(`538075640755126284`);
		uye3.addRole(`538075640755126284`);
		ye4.addRole(`538075640755126284`);
		uye5.addRole(`538075640755126284`);
		message.reply(`${uye1}, ${uye2}, ${uye3}, ${uye4}, ${uye5} birinci takıma eklendiler!`);
	}
	if (message.content === "takımçıkar 1") {
		if(!message.member.roles.has(`407204500018036737`)) return message.reply(`Bu komutu kullanabilmek için iznin yok.`);
		let uye1 = args[0];
		let uye2 = args[1];
		let uye3 = args[2];
		let uye4 = args[3];
		let uye5 = args[4];
		let location = args[2];
		uye1.removeRole(`538075640755126284`);
		uye2.removeRole(`538075640755126284`);
		uye3.removeRole(`538075640755126284`);
		uye4.removeRole(`538075640755126284`);
		uye5.removeRole(`538075640755126284`);
		message.reply(`${uye1}, ${uye2}, ${uye3}, ${uye4}, ${uye5} birinci takımdan çıkarıldılar!`);
	}
	if (message.content === "takımekle 2") {
		if(!message.member.roles.has(`407204500018036737`)) return message.reply(`Bu komutu kullanabilmek için iznin yok.`);
		let uye1 = args[0];
		let uye2 = args[1];
		let uye3 = args[2];
		let uye4 = args[3];
		let uye5 = args[4];
		let location = args[2];
		uye1.addRole(`538075651211657238`);
		uye2.addRole(`538075651211657238`);
		uye3.addRole(`538075651211657238`);
		uye4.addRole(`538075651211657238`);
		uye5.addRole(`538075651211657238`);
		message.reply(`${uye1}, ${uye2}, ${uye3}, ${uye4}, ${uye5} ikinci takıma eklendiler!`);
	}
	if (message.content === "takımçıkar 2") {
		if(!message.member.roles.has(`407204500018036737`)) return message.reply(`Bu komutu kullanabilmek için iznin yok.`);
		let uye1 = args[0];
		let uye2 = args[1];
		let uye3 = args[2];
		let uye4 = args[3];
		let uye5 = args[4];
		let location = args[2];
		uye1.removeRole(`538075651211657238`);
		uye2.removeRole(`538075651211657238`);
		uye3.removeRole(`538075651211657238`);
		uye4.removeRole(`538075651211657238`);
		uye5.removeRole(`538075651211657238`);
		message.reply(`${uye1}, ${uye2}, ${uye3}, ${uye4}, ${uye5} ikinci takımdan çıkarıldılar!`);
	}*/
	if (message.content === 'köpüş') {
		if (message.channel.id === `428540697419972609`) {
			message.member.removeRole(`428536643042017284`);
			message.react("✅");
			message.delete(120);
			//message.author.send('Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz.\nArtık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n\nSık Kullanılan Bağlantılar:\n\n**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n\n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n\n__play -müzik bağlantısı veya isim-__\n__c -seçenek-__')
			var embed = new Discord.RichEmbed()
			.setColor('#f8f808')
			.setTimestamp()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setThumbnail(message.guild.iconURL)
			.addField("Katıldığın için teşekkür ederiz!", "Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz. Artık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n⠀")
			//.addField("⠀")
			.addField("Sık kullanılan bağlantılar", "**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__\n**»** Sunucu anlık davet bağlantısı:\n__http://bit.ly/kopusDC__\n**»** Müzik botunu kanalına çağırmak için:\n__play -müzik bağlantısı veya isim-__\n__c -seçenek-__\n**»** Oynadığın oyunla ilgili sohbet kanalına erişim için sohbete şunu yazabilirsin:\n__lol__, __cs__, __pubg__, __minecraft__, __diğer__, __mcsurvival__")
			message.author.send({embed: embed});
		}
	}
	if (message.content === 'lol') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453186864422191149`)) {
				message.member.removeRole(`453186864422191149`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#f8f808')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **lol_odası** kanalını göremeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.")
				message.author.send({embed: embed});
			} else {
				message.member.addRole(`453186864422191149`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00ff00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **lol_odası** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **lol** yazmanız gerekli.")
				message.channel.send({embed: embed});
			}
		}
	}
	if (message.content === 'pubg') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453190356956348416`)) {
				message.member.removeRole(`453190356956348416`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **pubg_odası** kanalına erişemeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **pubg** yazmanız gerekli.")
				message.channel.send({embed: embed});
			} else {
				message.member.addRole(`453190356956348416`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **pubg_odası** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **pubg** yazmanız gerekli.")
				message.channel.send({embed: embed});
			}
		}
	}
	if (message.content === 'cs') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453190327252287499`)) {
				message.member.removeRole(`453190327252287499`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **cs_odası** kanalına erişemeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **cs** yazmanız gerekli.")
				message.channel.send({embed: embed});
			} else {
				message.member.addRole(`453190327252287499`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **cs_odası** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **cs** yazmanız gerekli.")
				message.channel.send({embed: embed});			
			}
		}
	}
	if (message.content === 'minecraft') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`472068451658235925`)) {
				message.member.removeRole(`472068451658235925`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **minecraft** kanalına erişemeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **minecraft** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			} else {
				message.member.addRole(`472068451658235925`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **minecraft** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **minecraft** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			}
		}
	}
	if (message.content === 'mcsurvival') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`479278570095640580`)) {
				message.member.removeRole(`479278570095640580`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **mcsurvival** kanalına erişemeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **minecraft** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			} else {
				message.member.addRole(`479278570095640580`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **mcsurvival** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **minecraft** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			}
		}
	}
	if (message.content === 'diğer') {
		if (message.channel.id === `456256245569945620`) {
			if(message.member.roles.has(`453935578824835103`)) {
				message.member.removeRole(`453935578824835103`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **oyun_diğer** kanalına erişemeyeceksin. Görebilmek için tekrar **bot_kanalları** odasına **diğer** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			} else {
				message.member.addRole(`453935578824835103`);
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#00FF00')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesi", "Artık **oyun_diğer** kanalına erişebilirsin. Eğer kanalı görmek istemezsen tekrar **bot_kanalları** odasına **diğer** yazmanız gerekli.")
				message.channel.send({embed: embed});	
			}
		}
	}
	
	if (message.content === process.env.Gizli_Komut) {
		if(message.member.roles.has(`428536643042017284`)) {
		   	message.delete(120);
			OzelUyelik.delete(message.author.id);
		}
	}
	
	if (message.content === 'vip') {
		if (message.channel.id === `456256245569945620`) {
			if(!message.member.roles.has(`415940226519793676`)) {
				if (!OzelUyelik.has(message.author.id)) {
					OzelUyelik.add(message.author.id);
					message.member.addRole(`415940226519793676`);
					//message.delete(120);
					var embed = new Discord.RichEmbed()
					.setColor('#00FF00')
					.setTimestamp()
					.setAuthor(message.author.username, message.author.avatarURL)
					.setThumbnail(message.guild.iconURL)
					.addField("Yetki Güncellemesi", "Tebrikler!\nArtık sen de bu topluluğun bir özel üyesisin.")
					message.channel.send({embed: embed});
				} else {
					//message.delete(120);
					var embed = new Discord.RichEmbed()
					.setColor('#EC0C0C')
					.setTimestamp()
					.setAuthor(message.author.username, message.author.avatarURL)
					.setThumbnail(message.guild.iconURL)
					.addField("Yetki Güncellemesinde Hata", "Daha önceden bu komutla VIP olduğun için bu komutu kullanma hakkın kalmadı.")
					message.channel.send({embed: embed});
				}
			} else {
				//message.delete(120);
				var embed = new Discord.RichEmbed()
				.setColor('#EC0C0C')
				.setTimestamp()
				.setAuthor(message.author.username, message.author.avatarURL)
				.setThumbnail(message.guild.iconURL)
				.addField("Yetki Güncellemesinde Hata", "Halihazırda bir Özel Üyeliğe sahip olduğun için bu komutu kullanamazsın.")
				message.channel.send({embed: embed});
			}
		}
	}
});
client.on('guildMemberAdd', async member => {
        member.addRole(`428536643042017284`);
});

client.login(process.env.BOT_TOKEN);

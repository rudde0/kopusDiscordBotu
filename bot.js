const { Discord, RichEmbed } = require('discord.js');
var client = new Discord.Client();

client.on('message', message => {
	if (message.content === '!komutlar') {
		const embed = new Discord.RichEmbed()
		.setColor('RANDOM') 
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.guild.iconURL)
			.addField("**Sık Kullanılan Bağlantılar**", "\n**»** Arkadaşınla ortak video izleyebilmek için:\n__http://bit.ly/kopusw2gether__⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n\n**»** Sunucu anlık davet bağlantısı:\n__http://bit.ly/kopusDC__\n\n**»** Müzik botunu kanalına çağırmak için:\n__!!!play  -müzik bağlantısı veya isim-__")

		message.channel.send(embed);
	}
	if (message.content === 'köpüş') {
		if (message.channel.id === `428540697419972609`) {
		const embed = new RichEmbed()
			.setColor('RANDOM')
			.setTimestamp()
			.setAuthor(msg.author.username, msg.author.avatarURL)
			.setThumbnail(msg.guild.iconURL)
			.addField("Katıldığın için teşekkür ederiz!", "Köpüş sunucusunun topluluk kurallarını kabul ettiğin için teşekkür ederiz.\nArtık sunucudaki diğer sesli odalara ve metin kanallarına erişebilirsin.\n")
			.addField("Sık kullanılan bağlantılar", "**»** Arkadaşınla ortak video izleyebilmek için: __http://bit.ly/kopusw2gether__ \n**»** Sunucu anlık davet bağlantısı: __http://bit.ly/kopusDC__ \n**»** Müzik botunu kanalına çağırmak için: __!!!play  -müzik bağlantısı veya isim-__")
            msg.member.removeRole(`428536643042017284`);
            msg.delete(120)
			const messages = [];
			messages.push(msg.author.send({embed: embed}));
		}
	}
});

client.on('guildMemberAdd', async member => {
        member.addRole(`428536643042017284`);
});

client.login(process.env.BOT_TOKEN);

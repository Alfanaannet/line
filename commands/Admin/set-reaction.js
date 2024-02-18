const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");
const db = require("quick.db");
const app = express();
module.exports = {
  run(client, message, args, db) {
        if (message.author.bot || !message.guild) return;
if (!message.member.hasPermission('ADMINISTRATOR'))return ;
    let bigstring = `
⌚📱📲💻⌨️🖥️🖨️🖱️🖲️📸📷📼📀💿💾💽🗜️🕹️📹🎥📽️🎞️📞☎️📟📠📺🕰️⏰⏲️⏱️🧭🎛️🎙️🎚️📻⌛⏳📡🔋🔌💡🔦🪔🕯️💰🪙💶💴💷💵💴💸🛢️🧯💳💎⚖️🪜🧰🪛🔧🔨⚒️🧲🪝🪢🧱⛓️⚙️🔩⛏️🛠️🔫💣🧨🪓🪚🔪🗡️⚔️🛡️🧿📿🔮🏺🪄⚱️🪦⚰️🚬💈⚗️🔭🔬🕳️🪟🩹🩺💊🧹🛁🪤🚿🌡️🚰🧪🪣🧫🪠🦠🚽🧬🧻🩸🪡💉🧺🛀🚪🪥🪑🧼🪞🪒🛋️🧽🛏️🧴🛌🛎️🧸🔑🖼️🗝️🛍️🪆💌📧🪅🎉📨📩🎊🎀✉️🧧🎏🎈🎐🏮🎁🛒🎎📥📯📤🪧📦📜🏷️📃📪📄📫📑📬🧾📭📊📮📈🗳️📔📓🗃️📇📰🗞️🗑️📅🗂️📂📆🗓️📁📋🗒️📉🗄️📒🔗📕📎📗🖇️📘📐📙📏📚🧮📌📌📖🔖📍🧷✂️🖊️🔏🖋️🔐✒️🔒🖌️🔓🖍️📝✏️🔍🔎😀😃😁😆😅😂🤣☺️😊😇🙂🙃😉😌🥲😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🥱🤫🤥😶😐😑😬🙄😯😦😧😮😲😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠🥸😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾🤲👐🙌👇☝️✋🖐️🖖👋🤙💪💪🤙👋✌️🤟🤘👌🤏🤌👈👉👆🦾🖕🙏🦶🦵🦿💄💋👄🦷🦴👅👂🦻👃👣👁️👶🫂👥👤🗣️🫁🫀🧠👀👧🧒👦👩🧑🧑👨🧑‍🦱👩‍🦱👨‍🦱🧑‍🦰👩‍🦰👨‍🦰👱‍♀️👱👱‍♂️🧑‍🦳👩‍🦳👨‍🦳🧑‍🦲👩‍🦲👨‍🦲🧔👵🧓👷👴👲👳👳‍♀️👳‍♂️🧕👮👮‍♀️👮‍♀️👮‍♂️👷👷‍♀️👷‍♂️👷‍♂️👨‍⚕️👩‍⚕️🧑‍⚕️🕵️‍♂️🕵️‍♂️🕵️‍♀️🕵️‍♀️🕵️💂‍♂️💂‍♀️💂💂🧑‍🌾👩‍🌾👨‍🌾🧑‍🍳👩‍🍳👩‍🍳👨‍🍳🧑‍🎓👩‍🎓👨‍🎓🧑‍🎤🧑‍🎤🧑‍💻👩‍💻🧑‍🔧👨‍🔧👨‍🔧🧑‍💻👩‍💻👩‍💻👨‍💻🧑‍💼👩‍💼👩‍🔧👨‍🔧👨‍🚒👩‍🚒🧑‍🚒👨‍🚀👨‍🎨👩‍🎨🧑‍🎨👨‍🔬👩‍🔬🧑‍🔬💼🎒🧳🕶️🌂👜👝💍👑⛑️🎓👒👞🥾🧢👡👠👙👗🧥🥼🩲🩳👔🧵👩‍👦‍👦🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦄🐴🐗🐺🦇🦉🦅🦤🦆🐝🐛🦋🐌🪱🐞🐜🪰🦟🪳🪲🦗🕷️🕸️🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🦭🐬🐳🐋🦈🐊🐅🐆🦓🦍🐘🦧🐘🦣🦬🦛🦏🐪🐫🦒🦘🐃🐂🐄🐖🐏🐎🦏🦏🐖🐖🐖🐖🐏🐏🐕‍🦺🐈🐈🐈🦮🐎🐄🐄🐂🦌🐐🦙🐑🐓🐓🐓🦃🦩🐇🐇🐇🦝🦨🦡🦦🦦🐉🦫🦫🦥🐁🐁🐀🐀🐿️🌴🌳🌲🎄🐲🐉🦔🍃🍁🌷🪴🪵🪨🐚🍄🪶🌹🥀🌺🌸🌼🌻🌒🌜🌔🌓🌙🌎⭐🌟🌟🌏🌍🪐💫🌟🌤️☀️🌈🌪️🔥💥☄️⚡✨✨⛅🌥️🌥️🌥️🌥️☁️☁️🌦️🌦️🌧️🌧️⛈️⛈️⛈️🌩️🌩️🌨️🌨️❄️❄️🌊☂️☂️☔☔💦💦💦💧💧💨💨🌬️🌬️⛄☃️🌫️🌫️🍏🍎🍐🍋🍊🍌🍉🍇🫐🍓🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🫒🥦🥬🫑🥒🌶️🌽🥕🧄🧅🥔🍠🥐🥯🍞🥖🫓🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🧆🌮🌯🫔🥗🥘🫕🥫🍝🍜🍲🍛🍣🍱🥟🦪🦪🍤🍙🍚🍘🍥🥠🍢🥮🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🌰🥜🍯🥛🍼☕🍵🫖🧉🧋🧃🥤🍶🍺🍻🧂🥢🥡🍽️🥣🥂🍷🥃🍸🍹🍾🧊🥄🍴⚽🏀🏈⚾🎾🥎🏐🏉🥏🏏🥍🏑🏒🏸🏓🪀🎱🪃🥅⛳🪁🎣🏹🤿🥊🥋🎽🪂🏂⛷️🎿🥌⛸️🛷🛼🛹🏋️🏋️‍♀️🏋️‍♂️🤼🤼‍♀️🤸🤼‍♂️🤸‍♀️🤸‍♂️🏌️‍♀️🏌️🤾‍♂️🤾🤾‍♀️🤺⛹️‍♂️⛹️‍♀️⛹️🏌️‍♂️🏇🧘🧘‍♀️🧘‍♂️🏄🏄‍♀️🏄‍♂️🏊🧗🚣‍♂️🚣‍♀️🚣🤽‍♂️🤽‍♀️🤽🏊‍♂️🏊‍♀️🧗‍♀️🧗‍♂️🚵🚵‍♀️🚵‍♂️🚴🚴‍♀️🚴‍♂️🏆🎟️🎗️🎫🏵️🎖️🏅🥉🥈🥇🎪🤹🤹‍♀️🤹‍♂️🎭🩰🎨🎬🎤🪕🧩🎰🎸🎺🎮🎳🎷🪘🎯♟️🥁🎹🎲🪗🎼🎧🎻
🚗🚕🚙🛻🚌🚎🏎️🚓🚑🛴🦼🦽🚜🦯🚛🚚🚐🚒🚲🛵🏍️🛺📹🚨🚔🚍🚘🚖🚅🚄🚝🚞🚃🚋🚟🚠🚡🚈🚂🚆🚇🚉🚊✈️🛫🛬🚤⛵🛶🚁🚀🛸🛰️💺🛩️🛥️🛳️⛴️🚢⚓🚧⛽🚦🚥⛰️🎡🏟️🌋🏜️🏯🏝️🏰🗼🏖️⛱️🗽🗿⛲🎠🗺️🚏🎢🏔️🏗️🗻🏭🏕️🏢⛺🏬🏠🏣🏡🏤🏘️🏥🏚️🏦🛖🏨🛕🌄🕍🌅🕌❤️🧡💛💚💙💜🖤🤎🤍💔💟❣️☮️💕✝️💞☪️💓🕉️💗☸️💘✡️💖💝🕎♌♌⚛️🆔♋♊♓♒♉⛎♈♑♐♏🛐☦️♎♍☯️🉑🈷️☢️✴️☣️🆚📴💮🈶🉐📳㊙️🈚㊗️🈸🈴🈺🈵❌🚷♨️🆘🅾️💢💯🆑🅱️🆎🚫📛⛔🅰️🈲🛑⭕🈹🚯❔⚜️🌐🈳🚼🈂️🚻💠🔰‼️🚳🛑⛔📛🚫💯💢♨️🚷❓🔱❎❎🅿️🚺🔤ℹ️🔣🈁📶🎦🚮🚻🈂️🛂🛃🛅🛄🛗🚹♿🚾🏧🛃💤🌀Ⓜ️💠🔰♻️✅🈯💹❇️✳️🚸⚠️〽️🔆🔅⁉️‼️🚳🚱🔞📵🚭❗❕♨️💢💯🚫📛🚼🚻🚮🎦📶🔣ℹ️🔤0️⃣🆓🆕🆒🈁🆙🆗🆖🔠🔡️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔢#️⃣⏏️⏏️*️⃣⏫▶️⏸️⏯️◀️⏬🔼⏹️⏺️⏭️⏮️⏩⬆️⬅️➡️🔽↕️↔️↪️⤴️⤴️↩️⤵️🔀🔁🔂♾️✖️➖➕🎶🎵🔃🔄💲💱🔛🔛🔙🔴 🇦🇧🇨🇩🇪🇳🇩🇲🇱🇰🇮🇭🇫🇴🇽🇾🇿⚧♂️♀️🕦🕝🕟🕘🕚🕘🕖🕔🕚🕛🕜🕥🕡♂️🇹🇷🇷⚕️⚕️⚧♦️🎴🕑🔔🟩🔕◽🔹🔷🔲🔲🔲🟩🔉🔳⚪⚪🔺🔵🔴🟡🔺🔻⚫🔄🎶➗♾️🔂↘️⏩⏺️↗️🔼 
🏳️🏴🏁🚩🏳️‍🌈🏳️‍⚧️🏴‍☠️🇦🇽🇦🇫🇦🇷🇦🇬🇦🇶🇦🇮🇦🇴🇦🇩🇦🇸🇩🇿🇦🇱🇦🇲🇧🇾🇦🇼🇧🇪🇦🇺🇧🇿🇦🇹🇧🇯🇦🇿🇧🇲🇧🇸🇧🇹🇧🇭🇧🇴🇧🇩🇧🇦🇧🇧🇧🇼🇨🇲🇨🇳🇰🇭🇨🇱🇧🇮🇹🇩🇧🇬🇨🇫🇧🇫🇰🇾🇧🇳🇧🇶🇻🇬🇨🇻🇮🇴🇮🇨🇧🇷🇨🇦🇭🇷🇪🇨🇨🇺🇪🇬🇨🇼🇸🇻🇨🇾🇬🇶🇨🇿🇪🇷🇩🇰🇪🇪🇩🇯🇪🇹🇩🇲🇪🇺🇩🇴🇫🇰🇬🇦🇬🇵🇬🇺🇬🇲🇹🇫🇬🇩🇬🇫🇵🇫🇬🇱🇬🇷🇬🇮🇫🇷🇫🇮🇬🇭🇩🇪🇫🇯🇫🇴🇬🇪🇬🇹🇮🇸🇬🇬🇮🇳🇬🇳🇮🇩🇬🇼🇮🇷🇬🇾🇮🇶🇭🇹🇮🇪🇭🇳🇮🇲🇭🇰🇮🇱🇭🇺🇮🇹🇽🇰🇱🇮🇱🇾🇰🇮🇰🇪🇱🇷🇱🇸🇰🇿🇯🇴🇱🇧🇱🇻🇯🇪🎌🇱🇦🇰🇬🇯🇵🇯🇲🇰🇼🇱🇹🇲🇹🇱🇺🇲🇭🇲🇴🇲🇶🇲🇰🇲🇷🇲🇬🇲🇺🇲🇼🇾🇹🇲🇾🇲🇽🇲🇻🇫🇲🇲🇱🇲🇩🇳🇷🇳🇫🇳🇺🇳🇦🇲🇲🇳🇬🇳🇪🇲🇿🇲🇦🇳🇮🇳🇿🇲🇸🇲🇪🇳🇨🇳🇱🇲🇳🇲🇨🇳🇵🇰🇵🇵🇾🇳🇴🇵🇪🇲🇵🇵🇭🇴🇲🇵🇳🇵🇰🇵🇱🇵🇼🇵🇹🇵🇸🇵🇷🇵🇦🇶🇦🇵🇬🇷🇪🇷🇸🇸🇴🇸🇧🇸🇳🇸🇦🇬🇸🇸🇮🇸🇹🇸🇲🇸🇰🇸🇽🇼🇸🇷🇼🇸🇬🇸🇱🇷🇺🇷🇴🇸🇨🇿🇦🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇰🇳🇱🇨🇹🇼🇨🇭🇸🇾🇸🇪🇸🇷🇸🇩🇸🇩🇻🇨🇵🇲🇹🇯🇹🇿🇹🇭🇹🇱🇹🇰🇹🇰🇹🇬🇹🇴🇹🇳🇹🇹🇬🇧🇻🇪🇻🇦🇦🇪🇺🇦🇻🇺🇺🇿🇺🇬🇹🇻🇺🇾🏴󠁧󠁢󠁷󠁬󠁳󠁿🇺🇸🇻🇮🇹🇨🇹🇲🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁥󠁮󠁧󠁿🇹🇷🇻🇳🇪🇦🇪🇭🇩🇬🇼🇫🇭🇲🇲🇫🇾🇪🇿🇲🇸🇯🇹🇦🇿🇼🇦🇨🇺🇲🇺🇳🇧🇻🇨🇵
`;
// By Ahmed Abd El-Latif Gaming - Sekai
    if (!db.get(`guild_${message.guild.id}`)) {
      db.set(`guild_${message.guild.id}`, {// By Ahmed Abd El-Latif Gaming - Sekai
        lineurl: "",
        reaction: "",
        channels: []
      });
    }

    if (!args[0]) return message.channel.send("**the react?**");

    let emoji = args[0].match(/\d+/)
      ? args[0].match(/\d+/g).filter(x => x.length >= 18)[0]
      : args[0].match(/\D/).input;
    
    if (!emoji)
      return message.reply(// By Ahmed Abd El-Latif Gaming - Sekai
        "**It Seems that i can't find this emoji try another or add it on one of my guilds** 1"
      );

    if (emoji.length == 18 && !client.emojis.cache.get(`${emoji}`))
      return message.reply(
        "**It Seems that i can't find this emoji try another or add it on one of my guilds**."
      );
// By Ahmed Abd El-Latif Gaming - Sekai
    if (
      emoji.length == 18 &&
      args[0].includes("<") &&
      args[0].includes(">") &&
      args[0].includes(":")
    ) {
      db.set(`guild_${message.guild.id}.reaction`, emoji);

      return message.channel.send(
        `**Updated React To \`${db.get(
          `guild_${message.guild.id}.reaction`
        )}\`**`
      );
    } else if (bigstring.includes(emoji)) {
      db.set(`guild_${message.guild.id}.reaction`, emoji);

      return message.channel.send(
        `**Updated React To \`${db.get(
          `guild_${message.guild.id}.reaction`
        )}\`**`
      );
    } else {// By Ahmed Abd El-Latif Gaming - Sekai
      return message.reply(
        "It Seems that i can't fin  d this emoji try another or add it on one of my guilds.."
      );
    }
  },
  config: {// By Ahmed Abd El-Latif Gaming - Sekai
    name: "set-reaction",
    prems: "ADMINISTRATOR",
    type: "",
    alis: ["sr"]
  }
};

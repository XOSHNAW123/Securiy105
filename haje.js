////////////////////////////////////////////////////////////////////////////

const express = require("express");

const app = express();

const dreams = [

  "Find and count some sheep",

  "Climb a really tall mountain",

  "Wash the dishes"

];

app.use(express.static("public"));

app.get("/", (request, response) => {

  response.sendFile(__dirname + "/views/index.html");

});

app.get("/dreams", (request, response) => {

  response.json(dreams);

});

const listener = app.listen(process.env.PORT, () => {

  console.log("Your app is listening on port " + listener.address().port);

});

///////////////////////////////////////////////////////////////////////////////

const { Client, MessageEmbed } = require("discord.js");

var { Util } = require("discord.js");

const calli = new Client({ disableEveryone: true });

const canvas = require("canvas");

const Canvas = require("canvas");

const convert = require("hh-mm-ss");

const botversion = require("./package.json").version;

const moment = require("moment");

const fs = require("fs");

const util = require("util");

const gif = require("gif-search");

const ms = require("ms");

const jimp = require("jimp");

const math = require("math-expression-evaluator");

const { get } = require("snekfetch");

const guild = require("guild");

const dateFormat = require("dateformat");

var table = require("table").table;

const Discord = require("discord.js");

const cmd = require("node-cmd");

const prefix = "c!";

const cooldown = new Set();

const cdtime = 5;

///////////////////////////////////////////////////////////////////////////////

const callicolor = "";

const calliImage = "";

const callitrue = "";

const callifalse = "";

const calliwarn = "";

///////////////////////////////////////////////////////////////////////////////

calli.login("");

///////////////////////////////////////////////////////////////////////////////

calli.on("ready", () => {

  console.log(`${calli.user.tag}`);

  calli.user.setActivity(`${prefix}help Secure Bot`, {

    Type: "Playing"

  });

});

///////////////////////////////////////////////////////////////////////////////

calli.on("message", async message => {

  if (message.content.startsWith(prefix + "help")) {

    let help = new Discord.MessageEmbed()

      .setColor(callicolor)

      .setImage(calliImage)

      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))

      .setDescription(`

━────╮🛠╭────━

**Info Command**

\`${prefix}botinfo\` - \`${prefix}userinfo\`

\`${prefix}serverinfo\` - \`${prefix}ping\`

━────╮🛠╭────━

**Moderation Command**

\`${prefix}lock\` - \`${prefix}unlock\` - \`${prefix}ban\` - \`${prefix}kick\`

━────╮🛠╭────━

**Security Command**

\`${prefix}show anti\` - \`${prefix}settings\`

━────╮🛠╭────━

**Links**

[Add Bot](https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot) - [Support]()

      `);

    message.channel.send(help);

  }

});

///////////////////////////////////////////////////////////////////////////////

calli.on("message", async message => {

  if (message.content.startsWith(prefix + "show anti")) {

    let showanti = new Discord.MessageEmbed()

      .setColor(callicolor)

      .setImage(calliImage)

      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))

      .setDescription(`

━────╮🛠╭────━

**Security**

\`${prefix}anti ban {number}\`

\`${prefix}anti kick {number}\`

\`${prefix}anti channelD {number}\`

\`${prefix}anti channelC {number}\`

\`${prefix}anti roleD {number}\`

\`${prefix}anti roleC {number}\`

\`${prefix}anti bot {on/off}\`

━────╮🛠╭────━

      `);

    message.channel.send(showanti);

  }

});

///////////////////////////////////////////////////////////////////////////////

calli.on("message", async message => {

  if (message.content.startsWith("Tag Bot is here")) {

    let tag = new Discord.MessageEmbed()

      .setColor(callicolor)

      .setAuthor(`Secure Bot : ${prefix}help`);

    message.channel.send(tag);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", msg => {

  if (msg.author.bot) return;

  if (msg.content.includes("@everyone")) {

    if (msg.member.hasPermission("MENTION_EVERYONE")) return;

    if (!msg.channel.guild) return;

    msg.delete();

    msg.reply("❗ | You cant send `here` .");

    msg.react(callifalse);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", msg => {

  if (msg.author.bot) return;

  if (msg.content.includes("@here")) {

    if (msg.member.hasPermission("MENTION_EVERYONE")) return;

    if (!msg.channel.guild) return;

    msg.delete();

    msg.reply("❗ | You cant send `everyone` .");

    msg.react(callifalse);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  var ms = require("ms");

  var moment = require("moment");

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  let messageArray = message.content.split(" ");

  let embed = new Discord.MessageEmbed()

    .setTitle("Examples:")

    .setColor(callicolor).setDescription(`${prefix}ban @metion 1h share

${prefix}ban @metion 1d selfbot

${prefix}ban @metion 1w swearing

`);

  if (command == "ban") {

    if (!message.channel.guild)

      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))

      return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

    if (!message.guild.member(calli.user).hasPermission("BAN_MEMBERS"))

      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

    let user = message.mentions.users.first();

    let Reason = message.content

      .split(" ")

      .slice(3)

      .join(" ");

    let time = messageArray[2];

    if (message.mentions.users.size < 1) return message.channel.send(embed);

    if (!message.guild.member(user).bannable)

      return message.reply("**I Don't Have Permission For Ban This User**");

    if (!Reason) {

      message.guild.member(user).ban({ reason: Reason });

    }

    if (!Reason && time) {

      message.guild.member(user).ban(7, user);

    }

    if (!time) {

      message.guild.member(user).ban(7, user);

    }

    if (time === "0") {

      message.guild.member(user).ban(7, user);

    }

    if (time) {

      setTimeout(() => {

        message.guild.unban(user);

      }, ms(time));

    }

    if (time && Reason && user) {

      message.guild.member(user).ban({ reason: Reason });

      setTimeout(() => {

        message.guild.unban(user);

      }, ms(time));

    }

    message.channel.send(

      `:white_check_mark:  ${user.tag} banned from the server ! :airplane:`

    );

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  var prefix = "c!";

  if (message.author.kick) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {

    if (!message.channel.guild) return;

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))

      return message

        .reply("You Don't Have KICK_MEMBERS Permission")

        .then(msg => msg.delete(5000));

    if (!message.guild.member(calli.user).hasPermission("KICK_MEMBERS"))

      return message.reply("I Don't Have KICK_Members Permission");

    let user = message.mentions.users.first();

    let reason = message.content

      .split(" ")

      .slice(2)

      .join(" ");

    if (message.mentions.users.size < 1)

      return message.reply("Mention Someone");

    if (!reason) reason = "Null";

    if (!message.guild.member(user).bannable)

      return message.reply("I can not be higher than my rank");

    message.guild.member(user).kick(7, user);

    message.channel.send(

      `**:white_check_mark: ${user} has been kicked ! :airplane:**`

    );

    user.send(

      `**:airplane: You are has been kicked in ${message.guild.name} reason: **`

    );

    message.delete();

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  if (message.content.startsWith(prefix + "userinfo")) {

    let embed = new Discord.MessageEmbed()

      .setColor(callicolor)

      .setAuthor(message.author.username, message.author.avatarURL())

      .setThumbnail(message.author.avatarURL())

      .setTitle("Info User")

      .addField("Name", `**${message.author.tag}**`, true)

      .addField("ID", `**${message.author.id}**`, true)

      .addField(

        "Created At",

        `**${message.author.createdAt.toLocaleString()}**`,

        true

      )

      .setTimestamp();

    message.channel.send(embed);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", msg => {

  if (msg.content === prefix + "serverinfo") {

    const embed = new Discord.MessageEmbed()

      .setColor(callicolor)

      .setThumbnail(msg.guild.iconURL())

      .setTitle(`${msg.guild.name}`, true)

      .setTitle(`${msg.guild.name}`, true)

      .addField("Server ID", `${msg.guild.id}`, true)

      .addField("Created On", msg.guild.createdAt.toLocaleString())

      .addField("Owner Server", `${msg.guild.owner}`, true)

      .addField("Members", `**[${msg.guild.memberCount}]**`, true)

      .addField("Channels", `**[${msg.guild.channels.cache.size}]**`, true)

      .addField("Region", `**[${msg.guild.region}]**`, true)

      .addField("Roles", `**[ ${msg.guild.roles.cache.size} ]**`, true);

    msg.channel.send(embed);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", msg => {

  if (msg.content === prefix + "botinfo") {

    const embed = new Discord.MessageEmbed()

      .setAuthor(calli.user.username, calli.user.avatarURL())

      .setThumbnail(calli.user.avatarURL())

      .setColor(callicolor)

      .setTitle(` ${calli.user.username} `)

      .addField("servers", `**${calli.guilds.cache.size}**`, true)

      .addField("channels", `**${calli.channels.cache.size}**`, true)

      .addField("Users", `**${calli.users.cache.size}**`, true)

      .addField("My Name", `**${calli.user.tag}**`, true)

      .addField("My ID", `**${calli.user.id}**`, true)

      .addField("Owner Bot", `Calli#4420`, true);

    msg.channel.send(embed);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  if (message.content.startsWith(prefix + "invite"))

    message.channel.send(

      `<@${message.author.id}>, https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`

    );

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", async message => {

  if (message.content.startsWith(prefix + "lock")) {

    if (!message.channel.guild)

      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    if (!message.guild.member(calli.user).hasPermission("MANAGE_CHANNELS"))

      return;

    message.channel.updateOverwrite(message.guild.id, {

      SEND_MESSAGES: false

    });

    const lock = new Discord.MessageEmbed()

      .setTitle("" + "Click Here To Add : " + `${calli.user.username}`)

      .setURL(

        `https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`

      )

      .setColor(callicolor)

      .setDescription(

        `🔒 | Locked Channel

Channel Name : <#${message.channel.id}>

Locked By : <@${message.author.id}>

Channel Status : Send Message : ${callifalse}

`

      )

      .setThumbnail(message.author.avatarURL())

      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send(lock);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", async message => {

  if (message.content.startsWith(prefix + "unlock")) {

    if (!message.channel.guild)

      return message.channel.send("Sorry This Command Only For Servers.");

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;

    if (!message.guild.member(calli.user).hasPermission("MANAGE_CHANNELS"))

      return;

    message.channel.updateOverwrite(message.guild.id, {

      SEND_MESSAGES: null

    });

    const unlock = new Discord.MessageEmbed()

      .setTitle("" + "Click Here To Add : " + `${calli.user.username}`)

      .setURL(

        `https://discord.com/api/oauth2/authorize?client_id=${calli.user.id}&permissions=8&scope=bot`

      )

      .setColor(callicolor)

      .setDescription(

        `🔓 | UnLocked Channel

Channel Name : <#${message.channel.id}>

Locked By : <@${message.author.id}>

Channel Status : Send Message : ${callitrue}

`

      )

      .setThumbnail(message.author.avatarURL())

      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send(unlock);

  }

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  if (message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {

    message.channel.send("pong | :ping_pong: ").then(msg => {

      var PinG = `${Date.now() - msg.createdTimestamp}`;

      var ApL = `${Math.round(calli.ping)}`;

      msg.channel.send(`**Time taken: ${PinG} ms.**`);

    });

  }

});

//////////////////////////////////////////////////////////////////////////////

let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));

let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));

calli.on("message", message => {

  if (!message.channel.guild) return;

  let user = anti[message.guild.id + message.author.id];

  let num = message.content

    .split(" ")

    .slice(2)

    .join(" ");

  if (!anti[message.guild.id + message.author.id])

    anti[message.guild.id + message.author.id] = {

      actions: 0

    };

  if (!config[message.guild.id])

    config[message.guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2,

      time: 30

    };

  if (message.content.startsWith(prefix + "anti")) {

    if (message.author.id !== message.guild.ownerID)

      return message.channel.send("**Just Can Online Ownership**");

    if (message.content.startsWith(prefix + "anti ban")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].banLimit = num;

      message.channel.send(

        `** <@${message.author.id}>,  Successfully changed the anti ban to ${config[message.guild.id].banLimit}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti kick")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].kickLimits = num;

      message.channel.send(

        `**<@${message.author.id}>,  Successfully changed the anti kick to ${config[message.guild.id].kickLimits}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti roleC")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].roleDelLimit = num;

      message.channel.send(

        `**<@${message.author.id}>,  Successfully changed the anti roleC to ${config[message.guild.id].roleDelLimit}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti roleD")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].roleCrLimits = num;

      message.channel.send(

        `**<@${message.author.id}>,  Successfully changed the anti roleD to ${config[message.guild.id].roleCrLimits}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti channelC")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].chaDelLimit = num;

      message.channel.send(

        `**<@${message.author.id}>,  Successfully changed the anti channelC to ${config[message.guild.id].chaDelLimit}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti channelD")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].chaCrLimit = num;

      message.channel.send(

        `**<@${message.author.id}>,  Successfully changed the anti channelD to ${config[message.guild.id].chaCrLimit}** ${callitrue}`

      );

    }

    if (message.content.startsWith(prefix + "anti time")) {

      if (!num)

        return message.channel.send(

          "**" + callifalse + "  Type A `Number` .**"

        );

      if (isNaN(num))

        return message.channel.send(

          "**" + callifalse + "  Only Type A `Number` .**"

        );

      config[message.guild.id].time = num;

      message.channel.send(

        `** <@${message.author.id}>,  Successfully changed the anti time to ${config[message.guild.id].time}** ${callitrue}`

      );

    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

      e

    ) {

      if (e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

      e

    ) {

      if (e) throw e;

    });

  }

});

calli.on("channelCreate", async channel => {

  const entry1 = await channel.guild

    .fetchAuditLogs({

      type: "CHANNEL_CREATE"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[channel.guild.id])

    config[channel.guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[channel.guild.id + entry.id]) {

    anti[channel.guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

  } else {

    anti[channel.guild.id + entry.id].actions = Math.floor(

      anti[channel.guild.id + entry.id].actions + 1

    );

    console.log("channel create");

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

    if (

      anti[channel.guild.id + entry.id].actions >=

      config[channel.guild.id].chaCrLimit

    ) {

      channel.guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          channel.guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Channels\` ${calliwarn}**`

          )

        );

      anti[channel.guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("channelDelete", async channel => {

  const entry1 = await channel.guild

    .fetchAuditLogs({

      type: "CHANNEL_DELETE"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[channel.guild.id])

    config[channel.guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[channel.guild.id + entry.id]) {

    anti[channel.guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

  } else {

    anti[channel.guild.id + entry.id].actions = Math.floor(

      anti[channel.guild.id + entry.id].actions + 1

    );

    console.log("channel delete");

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

    if (

      anti[channel.guild.id + entry.id].actions >=

      config[channel.guild.id].chaDelLimit

    ) {

      channel.guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          channel.guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Channels\` ${calliwarn}**`

          )

        );

      anti[channel.guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("roleDelete", async channel => {

  const entry1 = await channel.guild

    .fetchAuditLogs({

      type: "ROLE_DELETE"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[channel.guild.id])

    config[channel.guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[channel.guild.id + entry.id]) {

    anti[channel.guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

  } else {

    anti[channel.guild.id + entry.id].actions = Math.floor(

      anti[channel.guild.id + entry.id].actions + 1

    );

    console.log("role delete");

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

    if (

      anti[channel.guild.id + entry.id].actions >=

      config[channel.guild.id].roleDelLimit

    ) {

      channel.guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          channel.guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Delete\` Many \`Role\` ${calliwarn}**`

          )

        );

      anti[channel.guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("roleCreate", async channel => {

  const entry1 = await channel.guild

    .fetchAuditLogs({

      type: "ROLE_CREATE"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[channel.guild.id])

    config[channel.guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[channel.guild.id + entry.id]) {

    anti[channel.guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

  } else {

    anti[channel.guild.id + entry.id].actions = Math.floor(

      anti[channel.guild.id + entry.id].actions + 1

    );

    console.log("role create");

    setTimeout(() => {

      anti[channel.guild.id + entry.id].actions = "0";

    }, config[channel.guild.id].time * 1000);

    if (

      anti[channel.guild.id + entry.id].actions >=

      config[channel.guild.id].roleCrLimits

    ) {

      channel.guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          channel.guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Create\` Many \`Roles\` ${calliwarn}**`

          )

        );

      anti[channel.guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("guildBanAdd", async (guild, user) => {

  const entry1 = await guild

    .fetchAuditLogs({

      type: "MEMBER_BAN_ADD"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[guild.id])

    config[guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[guild.id + entry.id]) {

    anti[guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[guild.id + entry.id].actions = "0";

    }, config[guild.id].time * 1000);

  } else {

    anti[guild.id + entry.id].actions = Math.floor(

      anti[guild.id + entry.id].actions + 1

    );

    console.log("ban member");

    setTimeout(() => {

      anti[guild.id + entry.id].actions = "0";

    }, config[guild.id].time * 1000);

    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {

      guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`

          )

        );

      anti[guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("guildKickAdd", async (guild, user) => {

  const entry1 = await guild

    .fetchAuditLogs({

      type: "MEMBER_KICK"

    })

    .then(audit => audit.entries.first());

  console.log(entry1.executor.username);

  const entry = entry1.executor;

  if (!config[guild.id])

    config[guild.id] = {

      banLimit: 2,

      chaDelLimit: 2,

      roleDelLimit: 2,

      kickLimits: 2,

      chaCrLimit: 2,

      roleCrLimits: 2

    };

  if (!anti[guild.id + entry.id]) {

    anti[guild.id + entry.id] = {

      actions: 1

    };

    setTimeout(() => {

      anti[guild.id + entry.id].actions = "0";

    }, config[guild.id].time * 1000);

  } else {

    anti[guild.id + entry.id].actions = Math.floor(

      anti[guild.id + entry.id].actions + 1

    );

    console.log("member kick");

    setTimeout(() => {

      anti[guild.id + entry.id].actions = "0";

    }, config[guild.id].time * 1000);

    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {

      guild.members.cache

        .get(entry.id)

        .ban()

        .catch(e =>

          guild.owner.send(

            `**${calliwarn} ${entry.username} Tryed To \`Kick\` Many \`Members\` ${calliwarn}**`

          )

        );

      anti[guild.id + entry.id].actions = "0";

      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

        e

      ) {

        if (e) throw e;

      });

    }

  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {

    if (e) throw e;

  });

  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {

    if (e) throw e;

  });

});

calli.on("guildMemberRemove", async member => {

  const entry1 = await member.guild

    .fetchAuditLogs()

    .then(audit => audit.entries.first());

  if (entry1.action === "MEMBER_KICK") {

    const entry2 = await member.guild

      .fetchAuditLogs({

        type: "MEMBER_KICK"

      })

      .then(audit => audit.entries.first());

    const entry = entry2.executor;

    if (!config[member.id])

      config[member.id] = {

        banLimit: 2,

        chaDelLimit: 2,

        roleDelLimit: 2,

        kickLimits: 2,

        chaCrLimit: 2,

        roleCrLimits: 2

      };

    if (!anti[member.guild.id + entry.id]) {

      anti[member.guild.id + entry.id] = {

        actions: 1

      };

      setTimeout(() => {

        anti[member.guild.id + entry.id].actions = "0";

      }, config[member.guild.id].time * 1000);

    } else {

      anti[member.guild.id + entry.id].actions = Math.floor(

        anti[member.guild.id + entry.id].actions + 1

      );

      console.log("kick member");

      setTimeout(() => {

        anti[member.guild.id + entry.id].actions = "0";

      }, config[member.guild.id].time * 1000);

      if (

        anti[member.guild.id + entry.id].actions >=

        config[member.guild.id].kickLimits

      ) {

        member.guild.members.cache

          .get(entry.id)

          .ban()

          .catch(e =>

            member.owner.send(

              `**${calliwarn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${calliwarn}**`

            )

          );

        anti[member.guild.id + entry.id].actions = "0";

        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {

          if (e) throw e;

        });

        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {

          if (e) throw e;

        });

      }

    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(

      e

    ) {

      if (e) throw e;

    });

    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(

      e

    ) {

      if (e) throw e;

    });

  }

});

//////////////////////////////////////////////////////////////////////////////

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file

calli.on("message", message => {

  if (message.content.startsWith(prefix + "anti bot on")) {

    if (!message.channel.guild) return;

    if (message.author.id !== message.guild.ownerID) return;

    antibots[message.guild.id] = {

      onoff: "On"

    };

    message.channel.send(`${callitrue} | AntiBot Join Is On`);

    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {

      if (err)

        console.error(err).catch(err => {

          console.error(err);

        });

    });

  }

});

calli.on("message", message => {

  if (message.content.startsWith(prefix + "anti bot off")) {

    if (!message.channel.guild) return;

    if (message.author.id !== message.guild.ownerID) return;

    antibots[message.guild.id] = {

      onoff: "Off"

    };

    message.channel.send(`${callitrue} | AntiBot Join Is Off`);

    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {

      if (err)

        console.error(err).catch(err => {

          console.error(err);

        });

    });

  }

});

calli.on("guildMemberAdd", member => {

  if (!antibots[member.guild.id])

    antibots[member.guild.id] = {

      onoff: "Off"

    };

  if (antibots[member.guild.id].onoff === "Off") return;

  if (member.user.bot) return member.kick();

});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {

  if (err)

    console.error(err).catch(err => {

      console.error(err);

    });

});

//////////////////////////////////////////////////////////////////////////////

calli.on("message", message => {

  if (message.content === prefix + "settings") {

    if (message.author.id !== message.guild.ownerID) return;

    if (!message.channel.guild)

      return message.channel.send("Sorry This Command Only For Servers.");

    let embed = new Discord.MessageEmbed()

      .setTitle("")

      .setURL("")

      .setDescription(

        `AntiBan

Enabled: ${callitrue}

Maximum Ban : ${config[message.guild.id].banLimit}

-

AntiKick

Enabled: ${callitrue}

Maximum Kick : ${config[message.guild.id].kickLimits}

-

AntiChannel C - D

Enabled: ${callitrue}

Maximum Create : ${config[message.guild.id].chaCrLimit}

Maximum Delete : ${config[message.guild.id].chaDelLimit}

-

AntiRole C - D

Enabled: ${callitrue}

Maximum Create : ${config[message.guild.id].roleCrLimits}

Maximum Delete : ${config[message.guild.id].roleDelLimit}

-

AntiTime

Enabled: ${callitrue}

Maximum Time : ${config[message.guild.id].time}`

      )

      .setColor(callicolor)

      .setThumbnail(message.author.avatarURL())

      .setFooter(`${message.author.tag}`, message.author.avatarURL());

    message.channel.send({ embed });

  }

});

//////////////////////////////////////////////////////////////////////////////

process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://numerous-bristle-expansion.glitch.me`);
}, 280000);
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "";
const cooldown = new Set()
const cdtime =5;
client.login("");
 client.on("ready", () => {
  console.log(`${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
  client.user.setActivity(`${prefix}help`, { Type: "Playing" });
});

//////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.author.username, message.author.AvatarURL)
      .setDescription(`

**Info Commands**
\`q!user\`
\`q!server\`
\`q!bot\`

**Security Number**
\`q!anti kick\` : **Number**
\`q!anti ban\` : **Number**
\`q!anti roleD\` : **Number**
\`q!anti roleC\` : **Number**
\`q!anti channelD\` : **Number**
\`q!anti channelC\` : **Number**
\`q!anti time\` : **Number**
\`q!settings\`

**Srcurity On/Off**
\`q!anti bot\` : **on-off**
\`q!anti problem\` : **on-off**

**Moderation Commands**
\`q!lock\`
\`q!unlock\`
\`q!ban\` : @**User**
\`q!kick\` : @**User**
\`q!unban\` : **Id** / **all**


[ **Invite Bot** ](https://discord.com/api/oauth2/authorize?client_id=811722944912162836&permissions=8&scope=bot) - [ **Support Server** ](https://discord.gg/yMf6kWVZKB)

`);

    message.channel.send(help);
  }
});

//////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Send Message : ${ghallatw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
Send Message : ${rastw}
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});


//////
const rast = "<:3626FA51DBD64815983FB2218F90BF20:812411653794430988>";
const rastw = "<:3626FA51DBD64815983FB2218F90BF20:812411653794430988>";
const ghallat = "<:CBC89BE048CF4C5AAB38F87C661962BE:812411654003621989>";
const ghallatw = "<:CBC89BE048CF4C5AAB38F87C661962BE:812411654003621989>";
const logosec = "";
const warn = "<:29E818FD898148B1A054C208A3280C88:812411653806096393>";
const color = "#000000";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
  if (message.author.id !== message.guild.ownerID) return;
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot on")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Enable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "anti bot off")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
   if (message.author.id !== message.guild.ownerID) return;
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiBot Is \`Disable\` .**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "on"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});



////////




///////

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot`)) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setColor(color)
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**Ping Bot**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Name Bot**", `[ ${client.user.tag} ]`, true)
      .addField("**ID Bot**", `[ ${client.user.id} ]`, true)
      .addField("**Prefix Bot**", `[ ${prefix} ]`, true)
      .addField("**Owner-Bot**", `<@790232202134421554>`, true)
      .addField("**Bot Language**", `[ Java Script ]`, true)
      .setFooter("Security");

    message.channel.send(tnx);
  }
});

////////

///////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `**Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////


/////////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(prof.author.id);

    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setColor(color)
      .setTitle("Your Info User")
      .addField(" ▶️| Your Name", `<@${prof.author.id}>`)
      .addField(" 🆔| Your ID", `${prof.author.id}`)
      .addField(" 🌐| Create User", prof.author.createdAt.toLocaleString())
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

/////////////


//////////////mute

//////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
if (cooldown.has(prof.author.id)) {
      return prof.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(prof.author.id);

    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setColor(color)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField(" 📑| **Server Name:**", `${prof.guild.name}`)
      .addField(" 👑| **Owner Server:**", `${prof.guild.owner}`)
      .addField(" 🆔| **Server ID:**", `${prof.guild.id}`)
      .addField(" 📆| **Created:**", `${prof.guild.createdAt.toLocaleString()}`)
      .addField(" 👥| **Members:**", `${prof.guild.memberCount}`)
      .addField(" 🎙| **Channels:**", `${prof.guild.channels.cache.size}`)
      .addField(" 🌐| **Region**:", `${prof.guild.region}`)
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

////////

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

///////
client.on("message", message => {
  if (message.content === prefix + "settings") {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
     if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );
    let embed = new Discord.MessageEmbed()
      .setTitle("")
       
      .setURL("")
       
      .setDescription(




        `**Anti Ban Is** :
${config[message.guild.id].banLimit}

•••••
**Anti Kick Is** :

${config[message.guild.id].kickLimits}
•••••
**Anti ChannelD Is** :

${config[message.guild.id].chaDelLimit}
•••••
**Anti ChannelC Is** :

${config[message.guild.id].chaCrLimit}
•••••
**Anti RoleD Is** :

${config[message.guild.id].roleDelLimit}
•••••
**Anti RoleC Is** :

${config[message.guild.id].roleCrLimits}
•••••
**Anti Time Is** :

 ${config[message.guild.id].time}`
      )
      .setColor(color)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});
/////
let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem off")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          ghallat +
            "** | Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**${rast} | AntiProblem Is \`Disable\` .**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem on")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`⏱ Please wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          ghallat +
            "** | Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**${rast} | AntiProblem Is \`Enable\` .**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http")) {
    if (message.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MANAGE_EMOJIS\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@everyone")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@here")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});

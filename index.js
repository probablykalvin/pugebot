const express = require("express")
const app = express()
const monitor = require("express-status-monitor")
const aoi = require('aoi.js')
const bot = new aoi.Bot({
  token: process.env.TOKEN,
  prefix: [".", "$getGlobalUserVar[color]"],
  suppressAll: false
})

bot.onBanAdd();
bot.onBanRemove();
bot.onChannelCreate();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onInviteCreate();
bot.onInviteDelete();
bot.onJoined();
bot.onLeave();
bot.onMemberUpdate();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onPresenceUpdate();
bot.onRateLimit();
bot.onReactionAdd();
bot.onReactionRemove();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onRoleUpdate();
bot.onTypingStart();
bot.onUserUpdate();
bot.onVoiceStateUpdate();
bot.onInteractionCreate();

bot.onMessage({
  respondToBots: false,
  guildOnly: true
})

bot.readyCommand({
  channel: "",
  code: ` 
  $log[

 ____  _  _   ___  ____ 
(  _ \/ )( \ / __)(  __)
 ) __/) \/ (( (_ \ ) _) 
(__)  \____/ \___/(____)

]
  $log[Made by Kalvinnn#4322.\n|\n- Fork by $userTag[$botOwnerID]\n|\n- $allChannelsCount Channels\n|\n- $allMembersCount Users\n|\n]
   $log[\nLogged in as $userTag[$clientID] \n|\n- $commandsCount Commands Loaded\n|\n- Discord webstoket: $ping MS\n|\n]

$djsEval[console.clear();]
$wait[2s]

     $log[(✓) Logging in.....]
     $djsEval[console.clear();]
$wait[700ms]
     $log[(↥) Logging in....]
     $djsEval[console.clear();]
$wait[700ms]

     $log[(↟) Logging in...]
     $djsEval[console.clear();]
$wait[700ms]
     $log[(↑) Logging in..]
     $djsEval[console.clear();]
$wait[700ms]
     $log[(∞) Logging in.]
     $djsEval[console.clear();]
  `
})

bot.loadCommands(`./commands/`, true)

bot.loadCommands(`./events/`, true)

bot.variables({
  color: "BLUE",
  x: "<:no_x:898066783200739339>",
  y: "<:yes_tick:898066976751091732>",
  no: `<:no_x:898066783200739339> Too few arguments were given.

**Usage**
\`&use\``,
  chatbot: "",
  begs: 0,
  coins: "100",
  cemo: "<:pugecoin:899158104707575828>",
  works: 0,
  bank: 0,
  bio: "",
  dailys: 0,
  ver: "v1.0.3-BETA"
})
//  | Version: p-1.0.3
bot.status({
  text: "Version: $getVar[ver]",
  type: "LISTENING",
  time: 12
})

bot.status({
  text: "$math[$membersCount[889705823197073408;all;no]-$membersCount[889705823197073408;offline;no]] online users",
  type: "WATCHING",
  time: 12
})


require("./routes")(app)


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/home.json')
})

app.get('/*', (req, res) => {
  res.send({ error: "Invalid endpoint" })
})


app.listen(5000, () => {
  console.log("API READY")
})

app.set('json spaces', 1); 
app.use(monitor())



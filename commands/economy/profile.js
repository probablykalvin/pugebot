module.exports = {
  name: "profile",
  aliases: ["pro"],
  dec: "Check your or someone's stats",
  cat: "Economy",
  use: "profile <user>",
  perm: "sendmessages, readMessagehistory, embedlinks",
  code: `
$color[$getGlobalUserVar[color]]
$if[$message==]
$title[$userTag's Stats]
$thumbnail[$userAvatar]
$addField[Cooldowns:;work : $replaceText[$replaceText[$checkcondition[$getCooldownTime[1h;globalUser;work;$authorID]==0];true;ready];false;$getCooldownTime[1h;globalUser;work;$authorID] left.] \`(1 hour)\`\nbeg : $replaceText[$replaceText[$checkcondition[$getCooldownTime[10m;globalUser;beg;$authorID]==0];true;ready];false;$getCooldownTime[10m;globalUser;beg;$authorID] left.] \`(10 mins)\`\ndaily : $replaceText[$replaceText[$checkcondition[$getCooldownTime[1d;globalUser;daily;$authorID]==0];true;ready];false;$getCooldownTime[1d;globalUser;daily;$authorID] left.] \`(1 day)\`]
$addField[Commands stats:;Worked \`$get[w]\` times.\nBegged \`$get[be]\` times.\nClaimed daily coins \`$get[d]\` times.]
$addField[Coins stats:;$get[c] Coins in wallet.\n$get[b] Coins in the bank.\n$get[n] Coins in total.;no]

$let[n;$getVar[cemo]$numberSeparator[$math[$getGlobalUserVar[bank]+$getGlobalUserVar[coins]]]]
$let[b;$getVar[cemo]$numberSeparator[$getGlobalUserVar[bank]]]
$let[c;$getVar[cemo]$numberSeparator[$getGlobalUserVar[coins]]]
$let[w;$numberSeparator[$getGlobalUserVar[works]]]
$let[be;$numberSeparator[$getGlobalUserVar[begs]]]
$let[d;$numberSeparator[$getGlobalUserVar[dailys]]]
$let[u;$username]
$else
$title[$userTag[$get[arg]]'s Stats]
$thumbnail[$userAvatar[$get[arg]]]
$addField[Cooldowns:;work : $replaceText[$replaceText[$checkcondition[$getCooldownTime[1h;globalUser;work;$get[arg]]==0];true;ready];false;$getCooldownTime[1h;globalUser;work;$get[arg]] left.] \`(1 hour)\`\nbeg : $replaceText[$replaceText[$checkcondition[$getCooldownTime[10m;globalUser;beg;$get[arg]]==0];true;ready];false;$getCooldownTime[10m;globalUser;beg;$get[arg]] left.] \`(10 mins)\`\ndaily : $replaceText[$replaceText[$checkcondition[$getCooldownTime[1d;globalUser;daily;$get[arg]]==0];true;ready];false;$getCooldownTime[1d;globalUser;daily;$get[arg]] left.] \`(1 day)\`]
$addField[Commands stats:;Worked \`$get[w]\` times.\nBegged \`$get[be]\` times.\nClaimed daily coins \`$get[d]\` times.]
$addField[Coins stats:;$get[c] Coins in wallet.\n$get[b] Coins in the bank.\n$get[n] Coins in total.;no]

$let[n;$getVar[cemo]$numberSeparator[$math[$getGlobalUserVar[bank;$get[arg]]+$getGlobalUserVar[coins;$get[arg]]]]]
$let[b;$getVar[cemo]$numberSeparator[$getGlobalUserVar[bank;$get[arg]]]]
$let[c;$getVar[cemo]$numberSeparator[$getGlobalUserVar[coins;$get[arg]]]]
$let[w;$numberSeparator[$getGlobalUserVar[works;$get[arg]]]]
$let[d;$numberSeparator[$getGlobalUserVar[dailys;$get[arg]]]]
$let[be;$numberSeparator[$getGlobalUserVar[begs;$get[arg]]]]
$let[u;$username[$get[arg]]]


$onlyIf[$isBot[$get[arg]]!=true;{description: $getVar[x] Cannot get informations about a bot.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]

$onlyIf[$userExists[$get[arg]]==true;{description: $getVar[x] Cannot find user with the provided arguments.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]

$let[arg;$findUser[$message;no]]
$endIf
`
}
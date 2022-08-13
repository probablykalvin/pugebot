module.exports = {
  name: "balance",
  aliases: ["bal"],
  dec: "Check your or someone's net worth.",
  cat: "Economy",
  use: "balance <user>",
  perm: "sendmessages, readMessagehistory, embedlinks",
  code: `
$color[$getGlobalUserVar[color]]
$if[$message==]
$title[$userTag's Balance]
$addField[Net worth:;$get[n];no]
$addField[Bank:;$get[b];no]
$addField[Coins:;$get[c];no]

$let[n;$getVar[cemo]$numberSeparator[$math[$getGlobalUserVar[bank]+$getGlobalUserVar[coins]]]]
$let[b;$getVar[cemo]$numberSeparator[$getGlobalUserVar[bank]]]
$let[c;$getVar[cemo]$numberSeparator[$getGlobalUserVar[coins]]]
$else
$title[$userTag[$get[arg]]'s Balance]
$addField[Net worth:;$get[n];no]
$addField[Bank:;$get[b];no]
$addField[Coins:;$get[c];no]

$let[n;$getVar[cemo]$numberSeparator[$math[$getGlobalUserVar[bank;$get[arg]]+$getGlobalUserVar[coins;$get[arg]]]]]
$let[b;$getVar[cemo]$numberSeparator[$getGlobalUserVar[bank;$get[arg]]]]
$let[c;$getVar[cemo]$numberSeparator[$getGlobalUserVar[coins;$get[arg]]]]

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
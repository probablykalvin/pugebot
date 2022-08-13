module.exports = {
  name: "deposit",
  aliases: ["dep"],
  dec: "Deposit coins into your bank account.",
  cat: "Economy",
  use: "deposit {amount | all}",
  perm: "sendmessages, readMessagehistory, embedlinks",
  code: `
$setGlobalUserVar[bank;$get[b]]
$setGlobalUserVar[coins;$get[c]]
$color[$getGlobalUserVar[color]]
$author[$userTag;$userAvatar[$clientID]]
$description[You've deposit $getVar[cemo]$numberSeparator[$sub[$get[arg];0]] into your bank account]
$let[b;$sum[$getGlobalUserVar[bank];$get[arg]]]
$let[c;$sub[$getGlobalUserVar[coins];$get[arg]]]
$onlyIf[$get[arg]<=$getGlobalUserVar[coins];{description: $getVar[x] You don't have that many coins to deposit.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$onlyIf[$checkContains[$get[arg];.]==false;{description: $getVar[x] Your deposit amount must not contains \`.\` or \`-\`.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$onlyIf[$get[arg]>0;{description: $getVar[x] Your deposit amount must be more than 0.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$onlyIf[$isNumber[$get[arg]]==true;{description: $getVar[x] The deposit amount must be number.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$let[arg;$replaceText[$toLowerCase[$message[1]];all;$getGlobalUserVar[coins]]]
$onlyIf[$message[1]!=;{description:$replaceText[$getVar[no];&use;$commandInfo[$commandName;use]]}{color:RED}]
$onlyIf[$getGlobalUserVar[coins]!=0;{description: $getVar[x] You have nothing to deposit.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
`
}